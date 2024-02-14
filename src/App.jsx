import './App.css'
import Template from './assets/login-pet.png'
import { BsFillPersonFill } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import Google from './assets/google.svg'
import Facebook from './assets/facebook.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode} from 'jwt-decode';

function App() {

  // eslint-disable-next-line no-undef
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2000/user'); // ส่งคำขอ GET ไปยังเซิร์ฟเวอร์
        setUserData(response.data); // เซ็ตข้อมูลที่ได้รับกลับมาใน state
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // เรียกใช้งานฟังก์ชันเมื่อ component ถูกโหลด
  }, []);


  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const [errorUserName, setErrorUserName] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  const [userNameColor, setUserNameColor] = useState("")
  const [passwordColor, setPasswordColor] = useState("")

  const validateform = (e) => {
    e.preventDefault()

    if (userName.length >= 3) {
      setErrorUserName("")
      setUserNameColor('green')
    } else {
      setErrorUserName("Please enter a valid username")
      setUserNameColor('red')
    }

    if (password.length > 8) {
      setErrorPassword("")
      setPasswordColor('green')
    } else {
      setErrorPassword("Passwords must have at least 8 characters")
      setPasswordColor('red')
    }

    try {
      const response = axios.post('http://localhost:2000/auth/login', { userName, password });
      // const token = response.data.token; // รับ Token จากเซิร์ฟเวอร์
      // const decodedToken = jwt_decode(token); // decode JWT

      // // เก็บ Token ไว้ใน localStorage เพื่อใช้ในการตรวจสอบการเข้าสู่ระบบในครั้งถัดไป
      // localStorage.setItem('token', token);
      // console.log(token);

      // สามารถทำการ redirect หรืออื่นๆ ตามที่ต้องการได้ที่นี่
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">

          <form className='login-form' onSubmit={validateform}>

            <h1 className='login-title'>LOGIN</h1>

            <div className="form-control">
              <i><BsFillPersonFill /></i>
              <input type="text" placeholder='username' value={userName} onChange={(e) => setUserName(e.target.value)} /> 
              <small style={{ color: userNameColor }}>{errorUserName}</small>
            </div>
            <div className="form-control">
            <i><CgLock /></i>
              <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <small style={{ color: passwordColor }}>{errorPassword}</small>
            </div>

            <div className="btn-login">
              <button type="submit">Login Now</button>
              <button type="button"><Link to='/register'>Register</Link></button>
            </div>

            <p className='tag-social'>Login with others</p>
            <div className="form-social">
              <Link to=''>
                <img src={Google} alt='Google' />
                <p>Login with Google</p>
              </Link>
            </div>
            <div className="form-social">
              <Link to=''>
                <img src={Facebook} alt='Facebook' />
                <p>Login with Facebook</p>
              </Link>
            </div>
          </form>

          <div className="template">
            <img src={Template} style={{ width: 387, height: 709 }} alt='template' />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
