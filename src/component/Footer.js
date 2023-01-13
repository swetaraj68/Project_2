import React from 'react'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import FooterStyle from './Footer.module.css'

export default function Footer(){
  return(
    <>
    <div className={FooterStyle.main}>
      <div >
      <h1>GYM</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, fugiat?</p>
      <a className={FooterStyle.links} style={{fontSize:"2em" ,color : "white"}} href='https://www.facebook.com/' target="_blank"><BsFacebook/></a>
      <a className={FooterStyle.links}  style={{fontSize:"2em" ,color : "white"}} href='https://www.instagram.com/' target="_blank"><BsInstagram/></a>
      <a  className={FooterStyle.links} style={{fontSize:"2em" ,color : "white"}} href='https://twitter.com/?lang=en' target="_blank"><AiFillTwitterCircle/></a>
      </div>
      <div className={FooterStyle.griding}>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
       <span>Lorem ipsum dolor</span>
      </div>
      </div>
      <div className={FooterStyle.copy} style={{display: "flex" , justifyContent : "center" ,border : "2px dotted white " ,backgroundColor :"black" , color : "white"}}>
      <h3 >&copy;2023 All Rights  Reserved To Team 12</h3>
      </div>
    </>
  )
}