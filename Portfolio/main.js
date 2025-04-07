/* -------------------------------
   Global App Configuration
   ------------------------------- */
   const apps = [
    {
      id: "projects",
      name: "Projects",
      icon: "icon-projects.png", // replace with your image path
      content: "<p>My Projects: [Add your project details here]</p>",
      command: "projects"
    },
    {
      id: "resume",
      name: "Resume",
      icon: "icon-resume.png", // replace with your image path
      content: "<p>My Resume: [Add your resume details here]</p>",
      command: "resume"
    },
    {
      id: "skills",
      name: "Skills",
      icon: "icon-skills.png", // replace with your image path
      content: "<p>My Skills: [Add your skills details here]</p>",
      command: "skills"
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: "icon-terminal.png", // replace with your image path
      content: "", // handled separately
      command: null
    }
  ];
  
  /* -------------------------------
     Sound Setup with Howler.js
     ------------------------------- */
  const openSound = new Howl({
    src: ['pop.mp3'], // Replace with your own sound file
    volume: 0.5
  });
  
  /* -------------------------------
     Dynamic Desktop & Windows Generation
     ------------------------------- */
  // Generate Desktop Icons
  const desktop = document.getElementById('desktop');
  apps.forEach(app => {
    const iconEl = document.createElement('div');
    iconEl.classList.add('icon');
    iconEl.dataset.app = app.id + "-window";
    iconEl.innerHTML = `<img src="${app.icon}" alt="${app.name}"><span>${app.name}</span>`;
    desktop.appendChild(iconEl);
  });
  
  // Generate App Windows (skipping Terminal as it is pre-made)
  const appWindowsContainer = document.getElementById('app-windows');
  apps.forEach(app => {
    if (app.id === "terminal") return;
    const windowEl = document.createElement('div');
    windowEl.classList.add('app-window');
    windowEl.id = app.id + "-window";
    windowEl.innerHTML = `
      <div class="window-header">
        <span>${app.name}</span>
        <button class="close-window">X</button>
      </div>
      <div class="window-content">
        ${app.content}
      </div>
    `;
    appWindowsContainer.appendChild(windowEl);
  });
  
  /* -------------------------------
     Window & Icon Event Handlers
     ------------------------------- */
  // Open window with GSAP animation and play sound
  function openWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
      win.style.display = 'flex';
      openSound.play();
      gsap.fromTo(win, {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)'});
    }
  }
  
  // When an icon is clicked, open the corresponding window
  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const targetWindow = icon.getAttribute('data-app');
      openWindow(targetWindow);
    });
  });
  
  // Close window functionality
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-window')) {
      const win = e.target.closest('.app-window');
      gsap.to(win, {scale: 0.5, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => {
        win.style.display = 'none';
      }});
    }
  });
  
  // Basic Dragging for windows
  document.querySelectorAll('.app-window').forEach(win => {
    const header = win.querySelector('.window-header');
    header.addEventListener('mousedown', mouseDownHandler);
  
    function mouseDownHandler(e) {
      let offsetX = e.clientX - win.offsetLeft;
      let offsetY = e.clientY - win.offsetTop;
  
      function mouseMoveHandler(e) {
        win.style.left = (e.clientX - offsetX) + 'px';
        win.style.top = (e.clientY - offsetY) + 'px';
      }
  
      function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      }
  
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    }
  });
  
  /* -------------------------------
     Terminal Functionality
     ------------------------------- */
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  
  terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const command = terminalInput.value;
      terminalInput.value = '';
      processCommand(command);
    }
  });
  
  function processCommand(cmd) {
    let response = '';
    switch(cmd.trim().toLowerCase()) {
      case 'help':
        response = 'Commands: help, projects, resume, skills';
        break;
      case 'projects':
        response = 'Opening Projects...';
        openWindow('projects-window');
        break;
      case 'resume':
        response = 'Opening Resume...';
        openWindow('resume-window');
        break;
      case 'skills':
        response = 'Opening Skills...';
        openWindow('skills-window');
        break;
      default:
        response = 'Command not found. Type "help" for a list of commands.';
    }
    appendToTerminal(response);
  }
  
  function appendToTerminal(text) {
    const p = document.createElement('p');
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  
  /* -------------------------------
     Three.js 3D Background Animation
     ------------------------------- */
  let scene, camera, renderer, cube;
  function initThree() {
    const canvas = document.getElementById('three-canvas');
    renderer = new THREE.WebGLRenderer({canvas, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
  
    // Rotating wireframe cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({color: 0x00ff00, wireframe: true});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  
    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
  }
  
  function animateThree() {
    requestAnimationFrame(animateThree);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  // Adjust scene on window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
  });
  
  // Initialize Three.js and start animation
  initThree();
  animateThree();
  