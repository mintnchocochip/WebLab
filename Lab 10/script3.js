document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const customerName = document.getElementById("customerName").value;
      const phoneNumber = document.getElementById("phoneNumber").value;
      const email = document.getElementById("email").value;
  
      let appleQty = document.getElementById("appleQty").value;
      let bananaQty = document.getElementById("bananaQty").value;
      let avocadoQty = document.getElementById("avocadoQty").value;
  
      if (!document.getElementById("appleSelect").checked) {
        appleQty = 0;
      }
      if (!document.getElementById("bananaSelect").checked) {
        bananaQty = 0;
      }
      if (!document.getElementById("avocadoSelect").checked) {
        avocadoQty = 0;
      }
  
      const queryString = `?customerName=${encodeURIComponent(customerName)}`
        + `&phoneNumber=${encodeURIComponent(phoneNumber)}`
        + `&email=${encodeURIComponent(email)}`
        + `&appleQty=${appleQty}`
        + `&bananaQty=${bananaQty}`
        + `&avocadoQty=${avocadoQty}`;
  
      window.open("Lab 10\receipt.html" + queryString, "_blank");
    });
  });
  