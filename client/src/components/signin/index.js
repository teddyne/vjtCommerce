import React, { useContext, useState } from 'react'
import SoloButton from '../common/button'
import AuthService from '../../services/auth.service'
import {
  useHistory,
  useLocation
} from 'react-router-dom'
import { Context } from '../../store/store'
import {
  SET_CURRENT_USER,
  SET_LOADING
} from '../../store/action'

import './_signin.scss'

const SignIn = () => {
  const history = useHistory()
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const location  = useLocation()

  const [, dispatch] = useContext(Context)

  const getFromUri = (query) => {
    return query.replace('?from=', '')
  }

  const handleSignIn = async () => {
    dispatch({ type: SET_LOADING, payload: true })
    try {
      const resp = await AuthService.signIn(phone, password)
      if (!resp.auth) {
        setErrorMessage(resp.reason)
      } else {
        await dispatch({ type: SET_CURRENT_USER, payload: resp.user })
        history.push(`/${getFromUri(location.search)}`)
      }
    } catch (error) {
      console.log(error)
    }
    dispatch({ type: SET_LOADING, payload: false })
  }

  const handleOnchangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleOnchangePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSignUpClick = () => {
    history.push('/sign-up')
  }

  return (
      <div className="sign-in-wrapper">
        <div className="form-title">
          <span>đăng nhập</span>
        </div>
        <div className="sign-in">
          <div className="sign-in-form">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" onChange={handleOnchangePhone} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Mật khẩu" onChange={handleOnchangePassword} />
              </div>
              <SoloButton btnStyle='sweet-red btn-sign-in' text={'Đăng nhập'} onClick={handleSignIn} />
              <div className='sign-up-redirection'>
                Bạn mới biết <span>Solo Travel Shop</span>? <span className='text' onClick={handleSignUpClick}>Đăng ký</span>
              </div>
            </form>
          </div>
          <h5>{errorMessage}</h5>
        </div>
      </div>
    )
}
export default SignIn