import React from "react";
const Component =(props)=>{
return (
    <div>
<h1>{props.name}  {props.bio}   {props.prof} {props.children}</h1>
</div>
);
}

export default Component;