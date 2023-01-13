import React from "react";
import AppStyle from "./App.module.css";
import Navbar from './component/Navbar'
import Training from './component/Training'
import Pricing from './component/Pricing'
import Footer from './component/Footer'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useRecoilState} from 'recoil' 
import {Data,Data2,Data3} from './Data.js'


export default function App() {


  // const data = useRecoilValue(Data)
  const[ show , setShow] = useState(false)
  const [data,setData] = useRecoilState(Data)  //
  const [sub,setSub] = useRecoilState(Data2)
  const [sub1,setSub2] = useRecoilState(Data3)

  function Logout(){
    setData(false) 
    setSub(false)
    setSub2(false)
  }

  return (
    <>
    <div id="Home" className={AppStyle.box}>
      <Navbar className={AppStyle.nav}/>
      <div className={AppStyle.wrap}>
     <div className={AppStyle.content}>
       <h1>“<span className={AppStyle.quotes}>Ability </span> is what you’re capable of doing. <span className={AppStyle.quotes}>Motivation </span> determines what you do.<span className={AppStyle.quotes}>Atitude </span> determines how well you do it.”</h1>
     </div>

     {sub1 ?<> <Link className={AppStyle.linkBtn} to='/activity1'><span >GO TO ACTIVITY</span>  </Link> <button  className={AppStyle.joilogin}   onClick={()=>Logout()}>LOG OUT</button> </> :<>
     {sub ? <><Link className={AppStyle.linkBtn} to='/activity'><span >GO TO ACTIVITY</span></Link> <button className={AppStyle.joilogin}  onClick={()=>Logout()}>LOG OUT</button> </>:<>
{data? <><a href="#pricing"><button className={AppStyle.joibus}>GET STARTED</button></a> <button className={AppStyle.joilogin}  onClick={()=>Logout()}>LOG OUT</button> </> :<>


     {show ?

   
    <><Link to='/registration'> <button className={AppStyle.joibus}>REGISTRATION</button></Link>
    <Link to='/login'> <button className={AppStyle.joibus}>LOGIN</button></Link>
    </>
    :
     <button onClick={()=>setShow(true)} className={AppStyle.joibus}>JOIN WITH US</button> 
     }
     </>
    }
</>
  }
</>
     }

     </div>
    </div>
    
    <div id='program'>
    <Training />
    </div>

    <div id='pricing'>
      <Pricing/>
      </div>
    
    <Footer/>
    </>
  );
}
