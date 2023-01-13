import React from 'react'
import {Link} from 'react-router-dom'
import NavbarStyle from './Navbar.module.css'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import {useState} from 'react'
import { Data} from '../Data';
import {useRecoilState} from 'recoil' 
export default function Navbar(){
  const[show , setShow] = useState(true)

  const [data,setData] = useRecoilState(Data)
  

  function logout() {
    setData(false)
   
  }

  return(
    <>
    <div className={NavbarStyle.box}>
    <a href='#'><div className={NavbarStyle.logo}>GYM</div></a>
    <div className={NavbarStyle.link} id={show? "" : NavbarStyle.menu }>
    
    <Link  className={NavbarStyle.lin} to="/about">ABOUT</Link>
    <a  className={NavbarStyle.lin} href="#program">PROGRAM</a>
    <a  className={NavbarStyle.lin} href="#program">TRAINING</a>
    <a  className={NavbarStyle.lin} href="#pricing">PRICING</a>
    </div>
    { data  ? <button className={NavbarStyle.joinlogin} onClick={logout}>LOG-OUT</button> :
    <Link to='/registration'><button className={NavbarStyle.joibus}>JOIN US</button></Link> }

    <div className={NavbarStyle.mobile} >
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