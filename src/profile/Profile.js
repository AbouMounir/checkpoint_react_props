import React from "react";
import PropTypes from 'prop-types';

function Profile({fullName="Abou Mounir",bio="ma bio",profession,handleName,children}) {
    
    const container_top = { display : "flex", justifyContent : "space-between", margin : "20px 0"}  
    const nameBox = { fontWeight : 'blod', color : "white" ,fontSize : "15px", marginBottom : "20px"}
    const container = {position : "absolute", top : "50%", right : "50%", transform : "translate(50%,-50%)", borderRadius : "15px", width: "420px", padding : "20px", backgroundColor : "REBECCAPURPLE"}
    const bioBox = {fontSize : "12px" , color : "lightgray"}
    const info = { alignSelf : "center", marginLeft : "10px  "}
    const btn = {marginLeft : "40%",color :"red"}
    
    return (
        <div style={container}>
          <div style={container_top}>
             {children} 
             <div style={info}>
                <div style={nameBox}> fullName : {fullName} </div>
                <div style={nameBox}> Profession : {profession} </div>
             </div>
          </div>
          <div style={bioBox}> {bio} </div>
          <button style={btn} onClick={e => handleName(e)}> Show my name</button>
        </div>
    );
};

Profile.propTypes = {
  fullName : PropTypes.string,
  profession : PropTypes.string,
}
export default Profile ;