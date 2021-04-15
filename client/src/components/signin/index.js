import React, { useState } from 'react'
import './_signin.scss'
import SoloButton from '../common/button'
import AuthService from '../../services/auth.service'
import color from '../../assets/scss/_colors.scss'
import { DualRing } from 'react-spinners-css'

const SignIn = () => {
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      const resp = await AuthService.signIn(phone, password)
      console.log('fe -signin', resp)
      if (!resp.auth) {
        setErrorMessage(resp.reason)
      } else {

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

  return loading ? <DualRing color={color.color_sts} /> :
  (
        <div className="sign-in-wrapper">
            <div class="form-title">
                <h6>Hi there! Vui lòng đăng nhập bạn nhé!</h6>
            </div>
          <div className="sign-in">
          <div class="sign-in-form">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="phone"placeholder="Số điện thoại" onChange={handleOnchangePhone} />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Mật khẩu" onChange={handleOnchangePassword} />
              </div>
              <SoloButton btnStyle='sweet-red btn-sign-in' text={'Đăng nhập'} onClick={handleSignIn} />
            </form>
          </div>
          <h5>{errorMessage}</h5>
          </div>
        </div>
  )
}
export default SignIn