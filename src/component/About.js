import React from "react";
import AboutStyle from "./About.module.css"
import AboutNav from './AboutNav';

export default function About() {
  return (
    <>
    <AboutNav/>
    <div className={AboutStyle.main}>
    <div className={AboutStyle.aboutUp}>
    <div  className={AboutStyle.vdoone}>
    <iframe width="200" height="290em" src="https://www.youtube.com/embed/oAM6H2LqT6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div  className={AboutStyle.content}>
    <h1 style={{color:"red", fontSize:"2em"}}>About Us</h1>
    <p style={{fontWeight:"bold" , color:"white"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod velit commodi veniam expedita eum ipsum quaerat nemo labore, cumque qui ipsa sapiente hic fuga quam dolorem eius aut suscipit soluta dolore libero voluptatum sunt atque molestiae illo! Aliquam, dicta. Ullam laboriosam eligendi amet voluptate nisi quos unde minima quo omnis. Voluptatem, veniam eaque aliquam voluptate autem animi, tenetur nostrum perferendis quia mollitia ea perspiciatis laudantium ullam unde omnis. Quo, expedita.</p>
    <button onClick={()=>alert("Clicked From About Us Section")} className={AboutStyle.joibus}>Learn More</button>
    </div>
    </div>
    <div className={AboutStyle.aboutDown}>
    <div  className={AboutStyle.vdotwo}>
    <iframe width="200" height="290" src="https://www.youtube.com/embed/oAM6H2LqT6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div  className={AboutStyle.content}>
    <h1 style={{color:"red"}}>Why Choose Us ?</h1>
    <ul >
    <li style={{fontWeight:"bolder" ,color:"red"}}> <span style={{color:"black" , fontWeight: "bolder"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</span></li>
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt iure non blanditiis magnam accusantium,</p>
    <li style={{fontWeight:"bolder" ,color:"red"}}><span  style={{color:"black" , fontWeight: "bolder"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</span></li>
    <p style={{  color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia sunt iure non blanditiis magnam accusantium,.</p>

    </ul>

    </div>
    </div>
    </div>
      </>
  );
}
