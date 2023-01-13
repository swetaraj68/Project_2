import React from 'react';
import { useState ,useEffect} from 'react';
import {Link} from 'react-router-dom'
import RegisterStyle from "./Registration.module.css"
import {  AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";
import {useRecoilState} from 'recoil'
import {Data} from '../Data'

export default function Login() {
  const [newData ,setNewData] = useRecoilState(Data) 
  let getData= JSON.parse(localStorage.getItem("userDetails")) // local storage se array achuka
  console.log(getData , "i am from local") // data ara hai
 const[thisData ,setThisData]=useState([])
  
 

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    const newARR = getData.filter(x=> x.UserName === userName   && x.Password === password)
    console.log(newARR)
    if(newARR.length === 0){
      alert("user not found")
    }else{
      alert("you are logged in")
      // const newUserLoggedIn = {UserName : userName , Password : password , isLog : true , isSub : false }
      setNewData(true)
    }
   
      
  }

  
  function captUserName(e) {
    setUserName(e.target.value);
  }
  function capturePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
    <div className={RegisterStyle.main}>
    <div className={RegisterStyle.form}>
    <form >
      <h1>Login Page</h1>
      
      <div className={RegisterStyle.email}>
      <label style={{fontSize:"2em"}}><AiOutlineUser/></label>
      <input
        type="text"
        placeholder="Your User Name"
        value={userName}
        onChange={captUserName}
      />
    
      </div>
      <div className={RegisterStyle.email}>
      <label style={{fontSize:"2em"}}><RiLockPasswordFill/></label>
      <input
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={capturePassword}
      />
     
      </div>
      <br/>
      
      <input className={RegisterStyle.loginBtn} onClick={handleSubmit} type="button" value="SUBMIT" />
      <p >New User ? <Link to='/registration'>Registration</Link> </p>
      </form>
      {newData ?<p className={RegisterStyle.popup}>NOW YOU CAN GET SUBSCRIBED TO OUR PREMIUM FEATURES <br/><Link to='/' style={{color : "white" , textDecoration : "none" , fontWeight: "bolder" , textShadow : "1px 1px black"}}>Home</Link> </p> : "" }
      </div>
      </div>
</>
  );
}
