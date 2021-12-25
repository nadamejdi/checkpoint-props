import React from 'react';
import Profile from './profile/profil';



function App() {
  const styleObject = {color:"red",textAlign:'center'}
  const handleName = name => alert(name);
  return (
    <div className="App" style ={styleObject}>
     <Profile  handleName={handleName} 
     bio ="Mejdi" 
       
     prof="dev">
       <br/>
      <img src="/imagee.jpg" alt="iamgee"/>
     </Profile>
     
    </div>
    
  );
}

export default App;
