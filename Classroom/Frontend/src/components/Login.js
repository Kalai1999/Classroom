import React, {useState} from 'react';
import '../Styles/Form.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import {useForm} from 'react-hook-form';
import img2 from '../Images/img2.jpg'
function Login (props) {
    
  // const [state , setstate] = useState({
    //     username : "",
    //     password : ""
    // })

    const history=useHistory();
    const [username,setusername] = useState();
    const[password,setpassword]=useState();
    const {handleSubmit} = useForm();
    const signIn = async() => {
      console.log(username);
      const value = {
         "username":username,
         "password":password
      }
      console.log(value);
      const response = await axios.post("http://13.233.144.149:3000/auth/login",value)
      .then(response => {
        console.log(response);
        history.push('/home');
      })
      .catch(err=>{

      })
    }
    return(
       <div className='form-container'>
      <div className='form-content-left'>
      <form className='form' onSubmit={handleSubmit(signIn)}>
        <h2 align="center" style={{color:'white',fontWeight:'bold'}}>LOGIN</h2>
      <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={username}
            onChange={(e) => {
              let user = e.target.value;
              setusername(user)}}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
      
       
        <button className='form-input-btn-login' type='submit'>
          Log in
        </button>
          <span className='form-input-login'>
          Don't have an account? <a href='/signup' style={{color:'blue',textDecorationLine:'blue'}}>Sign Up</a>
        </span>
        </form>
          </div>
          <div className="form-content-right">
          <img className='form-img' src={img2} />
          </div>
      </div>
    )
}
    export default Login;