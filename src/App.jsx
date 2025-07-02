
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import LoginPage from './pages/Auth/Login'
import SignupPage from './pages/Auth/SignUp'
import ForgotPasswordPage from './pages/Auth/ForgetPassword'
import NotFoundPage from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path='/sign-up' element={<SignupPage/>}/>
        <Route path='/forget-password' element={<ForgotPasswordPage/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
