import React from "react";
import PropTypes from "prop-types";

const Profile =(props)=>{
    
return (
    <div>
<h1>{props.name}  {props.bio}   {props.prof} </h1>

<button onClick={() => props.handleName( `My name is ${props.name}` )}>
     ClickMe
   </button>
{props.children}


</div>
);
}
Profile.defaultProps={
    name:"AAA"
  };
  Profile.propTypes={
    bio:PropTypes.string.isRequired,
    prof:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired


  };
export default Profile;