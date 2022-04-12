import React, { useState } from 'react';
import logo from '../image/logo.png';
import showPwdImg from '../image/eyeopen.svg';
import hidePwdImg from '../image/eyeclose.svg';
import {Link } from 'react-router-dom';

const Basicform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e)=>{
    e.preventDefault();
    const newEntry = {email: email, password: password};

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry)
  }
  // const handleToggle= () =>{
  //   if(isRevealPwd===false){
  //           setIcon(eye);
  //   }
  //   else{
  //     setIsRevealPwd(prevState => prevState);
  //   }
  //   isRevealPwd=false ? setIcon(eye) : setIcon(eyeDisabled);
  // }

  return (
    <div className="main">
      <div className="sub-main">
        <div className="logo">
          <img src={logo} alt= 'logo' className='image1'/>
        </div>
        <div className="line">
        <hr/>
        <div className="signin">
          SIGN IN
        </div>
        <hr/>
        </div>
    <form action=''onSubmit={submitForm} className='form'>
      <div className='uname'>
        {/* <img src={emailpic} alt="email" className='emailpic'/>     */}
        <div className="icon">
        <i class="zmdi zmdi-email"></i>
        </div>
        <input type="text" placeholder="Email" id="email" autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='name'
        />
      </div>

      <div className='pwd'>
        {/* <img src={passpic} alt="pass" className='passpic' /> */}
        <div className="icon">
        <i class="zmdi zmdi-lock"></i>
        </div>
        <input type={isRevealPwd ? "text": "password"} placeholder="Password" id="password" autocomplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='pass' 
        />
        <div className="span">
          {/* <Icon icon={icon} size={20} 
          onClick={() => setIsRevealPwd(prevState => !prevState)
          ? 
          setIcon(eye)
          : setIcon(eyeDisabled) } 
          /> */}
          <img
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? showPwdImg : hidePwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
          alt="shownhidepass" className='passpic'
        />
        </div> 
      </div>
      <div className="warn">
      Forgot password?
    </div>
      <div className="button">
      <button type="submit" className='loginbtn'> Login </button>
      </div>
    </form>
    <hr/>
    <div className="register" >
      New User? 
      <Link to="/register"><span style={{color:'blue'}}>&nbsp;Register</span></Link>
    </div>
    </div>
    </div>
  )
}
export default Basicform;