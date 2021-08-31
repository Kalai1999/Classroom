import {React,useState} from 'react';
import { useForm } from 'react-hook-form';
import img1 from '../Images/img1.jpg';
import axios from 'axios';
import { is } from '@babel/types';
import { useHistory } from 'react-router';
export default function SignUp ()  {
const [username,setusername] = useState();
const[pass,setpass]=useState();
const[email,setemail]=useState();
const[confpass,setconfpass]=useState();
const[role,setrole]=useState();
const [userErr,setuserErr]=useState("");
const [passErr,setpassErr]=useState();
const[nameErr,setnameErr]=useState("");
const[emailErr,setemailErr]=useState("");
const[passwordErr,setpasswordErr]=useState("");
const[confpwdErr,setconfpwdErr]=useState("")
const {handleSubmit} = useForm();
const history= useHistory();

const signUp = async(props) => {
   if(pass===confpass){
    setpassErr("");
    const value = {
        "username":username,
        "email":email,
        "role":role,
        "password":pass,
    }
    console.log(value);
    const res = await axios.post("http://13.233.144.149:3000/users/signup",value)
    .then(res => {
        console.log(res);
       if(res.data.message==='User already exist')
            setuserErr('User Already exists!');
       else if(res.data.message="User signed up successfully !"){
            setuserErr('');
            history.push('/');
        }
    })
    .catch(err => {

    })
   }
   else{
     setpassErr("Password and confirm password should be same");
   }
   
}

  return (
      <div className="form-container">
      <div className="form-content-left">
         <img src={img1} className="form-img"/>
      </div>
      <div className="form-content-right">
        <form onSubmit={handleSubmit(signUp)} className="form">
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <p align="center" style={{color:'red',fontSize:'10'}}>{userErr}</p>
        <div className='form-inputs'>
        <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
          />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Role</label>
          <select
            className='form-input'
            name='role'
            value={role}
            onChange={(e)=>setrole(e.target.value)}
          >
            <option value = "teacher" >Teacher</option>
            <option value = "student" >Student</option>
            </select>
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
          />
          </div>
          <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={confpass}
            onChange={(e)=>setconfpass(e.target.value)}
          />
          </div>
          <p align="center" style={{color:'red',fontSize:'10'}}>{passErr}</p>
         
          <button className='form-input-btn-signup' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? <a href='/'>Login</a>
        </span>
        </form>
      </div>
      </div>
  );
}




