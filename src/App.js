import { Route, Routes } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import ChooseRole from './components/ChooseRole';
import ProfileImg from './components/ProfileImg';
import EmailVerify from './components/EmailVerify';



function App() {
  return (
    <div className=" bg-white w-screen h-screen" >
      
      <Routes>
        <Route path='/' element={<UserInfo/>} />
        <Route path='/register/add-avatar' element={<ProfileImg/>}  />
        <Route path='/register/role' element={<ChooseRole/>} /> 
        <Route path='/register/email-verify' element={<EmailVerify/>} />
      </Routes>
    </div>
  );
}

export default App;
