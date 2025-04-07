import { useState } from "react";
import pic from "./assets/react.svg";
import pic2 from "/vite.svg";

const ImageComponent = (props) => (
  <div className="img-container">
    <img src={pic} alt="React logo" />
    <br/>
    <img src={pic2} alt="Vite logo" />
  </div>
);

// const App = () => {
//   const Company = ["G", "F", "G"];
//   const clickPannyachu = (Company) => {
//     alert(Company);
//   };
  
//   return(
//     <>
//       <ImageComponent />
//       <ul>
//         {Company.map((company, index) => (
//           <button key={index} onClick={() => clickPannyachu(company)}>
//             {company}
//           </button>
//         ))}
//       </ul>
//     </>
//   );
// };

const App = () =>{
  const users = [
    { id: 1, name: 'geeks', age: 10 },
    { id: 2, name: 'for', age: 455 },
    { id: 3, name: 'geeks', age: 35 },
  ];
  return (
    <>
    <ul>
      {users.map((user) => (
        user.age > 30 ? (
          <li key={user.id} >{user.name} is over 30 yrs old</li>
        ):
        (
          <li key={user.id} >{user.name} is under 30 yrs old</li>
        )
      ))}
      </ul>
    </>
  );
};

export default App;