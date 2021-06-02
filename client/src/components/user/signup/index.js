import React, { useState, useContext } from 'react'
import SoloButton from '../../common/button'
import AuthService from '../../../services/auth.service'
import { useHistory } from 'react-router-dom'
import { Context } from '../../../store'
import { beginLoading, endLoading } from '../../../services/loadingBar.service'
import SignLayout from '../../common/signLayout'

import './_signup.scss'

const SignUp = () => {
  const [,dispatch] = useContext(Context)
  const history = useHistory()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleSignUp = async () => {
    beginLoading(dispatch)
    try {
      const resp = await AuthService.signUp(email, password)
      if (resp.data) {
        history.push('/sign-in')
      }
    } catch (error) {
      console.log(error)
    }
    endLoading(dispatch)
  }

  const handleOnchangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSignInClick = () => {
    history.push('/sign-in')
  }

  return (
    <SignLayout text='đăng ký'>
        <form>
              <div class='form-group'>
                <input type='email' className='form-control' id='email' placeholder='Nhập email của bạn' onChange={handleOnchangeEmail} />
              </div>
              <div class='form-group'>
                <input type='password' className='form-control' id='password' placeholder='Nhập mật khẩu' onChange={handleOnchangePassword} />
              </div>
              <SoloButton btnStyle='sweet-red btn-sign' text={'Đăng ký'} onClick={handleSignUp} />
              <div className='sign-up-redirection'>
                Bạn đã có tài khoản? <span className='text' onClick={handleSignInClick}>Đăng nhập</span>
              </div>
        </form>
    </SignLayout>
    )
}
export default SignUp