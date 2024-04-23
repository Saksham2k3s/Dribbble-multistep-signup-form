import React from 'react'
import UserInfo from '../components/UserInfo';
import ProfileImg from '../components/ProfileImg';
import ChooseRole from '../components/ChooseRole'
import { useSelector } from 'react-redux'
function LoginSignUp() {
  const {first, second, third, fourth} = useSelector((state) => state.user.signup_step)
  return (
    <div  >

    {
       first === true && <UserInfo/>
    }
    {
      second === true && <ProfileImg/>
    }
    {
      third === true && <ChooseRole/>
    }
     
    </div>
  )
}

export default LoginSignUp