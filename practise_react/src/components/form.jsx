const FormComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleRememberChange = (event) => {
      setRemember(event.target.checked);
    };
    
    const handleLogin = () => {
      alert(username);
    };
    
    return (
      <fieldset>
        <legend>Novell Services Login</legend>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username}
          onChange={handleUsernameChange}
        /> 
        <br />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <label htmlFor="remember">
          <input 
            type="checkbox" 
            id="remember" 
            name="remember"
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember me
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>Login</button>  
      </fieldset>
    );
  };

class Welcome extends React.Component{
    render(){
        return(
            <h1>Hello, {this.props.name}</h1>
        );
    }
}


export default Welcome;