import React from 'react';
import Component from './profile/Component';

function App() {
  const styleObject = {color:"red",textAlign:'center'}
  return (
    <div className="App" style ={styleObject}>
     <Component name="nada"  />
     <Component  bio="Mejdi"  />
     <Component  prof="dev" />
     <Component><img src="/imagee.jpg" alt="iamgee"></img></Component>
     
    </div>
    
  );
}


export default App;
