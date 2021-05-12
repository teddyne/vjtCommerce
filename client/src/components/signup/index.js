import React, { useState } from 'react'
import SoloButton from '../common/button'
import AuthService from '../../services/auth.service'
import Spinner from '../common/spinner'
import { useHistory } from 'react-router-dom'
import './_signup.scss'

const SignUp = () => {
  const history = useHistory()
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      const resp = await AuthService.signIn(phone, password)
      if (!resp.auth) {
        setErrorMessage(resp.reason)
      } else {
        history.push('/')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOnchangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSignInClick = () => {
    history.push('/sign-in')
  }

  return loading ? <Spinner /> :
    (
      <div className="sign-in-wrapper">
        <div className="form-title">
        <span>đăng ký</span>
        </div>
        <div className="sign-in">
          <div className="sign-in-form">
            <form>
              <div class="form-group">
                <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" onChange={handleOnchangePhone} />
              </div>
              <div class="form-group">
                <input type="password" className="form-control" id="password" placeholder="Mật khẩu" onChange={handleOnchangePassword} />
              </div>
              <div class="form-group">
                <input type="password" className="form-control" id="password" placeholder="Xác nhận mật khẩu" onChange={handleOnchangePassword} />
              </div>
              <SoloButton btnStyle='sweet-red btn-sign-in' text={'Đăng ký'} onClick={handleSignIn} />
              <div className='sign-up-redirection'>
                Bạn đã có tài khoản? <span className='text' onClick={handleSignInClick}>Đăng nhập</span>
              </div>
            </form>
          </div>
          <h5>{errorMessage}</h5>
        </div>
      </div>
    )
}
export default SignUp