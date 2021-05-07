import React, { useContext, useState } from 'react'
import SoloButton from '../common/button'
import AuthService from '../../services/auth.service'
import Spinner from '../common/spinner'
import { useHistory } from 'react-router-dom'
import { Context } from '../../store/store'
import { SET_CURRENT_USER } from '../../store/action'

import './_signin.scss'

const SignIn = () => {
  const history = useHistory()
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const [state, dispatch] = useContext(Context)

  const handleSignIn = async () => {
    try {
      setLoading(true)
      const resp = await AuthService.signIn(phone, password)
      if (!resp.auth) {
        setErrorMessage(resp.reason)
      } else {
        await dispatch({ type: SET_CURRENT_USER, payload: resp.user })
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

  return loading ? <Spinner /> :
    (
      <div className="sign-in-wrapper">
        <div class="form-title">
          <h5>Hi there! Vui lòng đăng nhập bạn nhé!</h5>
        </div>
        <div className="sign-in">
          <div class="sign-in-form">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" id="phone" placeholder="Số điện thoại" onChange={handleOnchangePhone} />
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