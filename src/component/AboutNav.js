import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './AboutNav.module.css'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import {useState} from 'react'
export default function AboutNav(){
  const[show , setShow] = useState(true)
  return(
    <>
    <div className={Navbar.box}>
    <Link to='/'><div className={Navbar.logo}>GYM</div></Link>
    <div className={Navbar.link} id={show? "" : Navbar.menu }>
    <Link className={Navbar.lin} to="/">HOME</Link>
    
    </div>
    <Link to='/registration'><button className={Navbar.joibus}>JOIN US</button></Link>
    <div className={Navbar.mobile} >
    {show ?
     <AiOutlineMenu onClick={()=>setShow(false)}/>
     :
     <AiOutlineClose onClick={()=>setShow(true)}/>
    }
    </div>
    </div>
    </>
  )
}