import React from "react";
import profilePic from "./Images/image.png"; // Example image from src
import "./App.css"; // Importing CSS for styling

const ImageComponent = () => (
  <div className="image-container">
    <img src="./Images/image.png" alt="Public" className="image" height = "100"/>
    <img src={profilePic} alt="Src" className="image" />
  </div>
);

const LoginForm = () => (
  <form className="login-form">
    <h2 className="form-title">Novell Services Login</h2>

    <div className="form-group">
      <label>Username:</label>
      <input type="text" />
    </div>

    <div className="form-group">
      <label>Password:</label>
      <input type="password" />
    </div>

    <div className="form-group">
      <label>
        City of
        <br />
        Employment:
      </label>
      <input type="text" />
    </div>

    <div className="form-group">
      <label>Web server:</label>
      <select>
        <option>— Choose a server —</option>
      </select>
    </div>

    <div className="form-group role-group">
      <label>
        Please specify
        <br />
        your role:
      </label>
      <div className="radio-options">
        <label>
          <input type="radio" name="role" value="Admin" /> Admin
        </label>
        <label>
          <input type="radio" name="role" value="Engineer" /> Engineer
        </label>
        <label>
          <input type="radio" name="role" value="Manager" /> Manager
        </label>
        <label>
          <input type="radio" name="role" value="Guest" /> Guest
        </label>
      </div>
    </div>

    <div className="form-group sso-group">
      <label>
        Single Sign-on
        <br />
        to the following:
      </label>
      <div className="checkbox-options">
        <label>
          <input type="checkbox" /> Mail
        </label>
        <label>
          <input type="checkbox" /> Payroll
        </label>
        <label>
          <input type="checkbox" /> Self-service
        </label>
      </div>
    </div>

    <div className="button-group">
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </div>
  </form>
);


const ProfileImage = () => (
  <img src={profilePic} alt="Profile" className="profile-image" />
);

const UserInfo = () => (
  <div className="user-info">
    <h3>John Doe</h3>
    <p>Email: john.doe@example.com</p>
    <p>Bio: Software Engineer at XYZ Corp.</p>
  </div>
);

const UserPosts = () => (
  <div className="user-posts">
    <h3>Recent Posts</h3>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
      <li>Post 3</li>
    </ul>
  </div>
);

const ProfilePage = () => (
  <div className="profile-page">
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);

const App = () => (
  <div className="app-container">
    <ImageComponent />
    <LoginForm />
    <ProfilePage />
  </div>
);

export default App;