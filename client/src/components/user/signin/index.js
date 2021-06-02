import React, { useContext, useState } from 'react'
import SoloButton from '../../common/button'
import AuthService from '../../../services/auth.service'
import {
  useHistory,
  useLocation
} from 'react-router-dom'
import { Context } from '../../../store'
import {
  SET_CURRENT_USER
} from '../../../store/action'
import SignLayout from '../../common/signLayout'
import { beginLoading, endLoading } from '../../../services/loadingBar.service'

import './_signin.scss'

const SignIn = () => {
  const history = useHistory()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const location  = useLocation()

  const [, dispatch] = useContext(Context)

  const getFromUri = (query) => {
    return query.replace('?from=', '')
  }

  const handleSignIn = async () => {
    beginLoading(dispatch)
    try {
      const resp = await AuthService.signIn(email, password)
      if (resp.auth) {
        await dispatch({ type: SET_CURRENT_USER, payload: resp.user })
        history.push(`/${getFromUri(location.search)}`)
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

  const handleSignUpClick = () => {
    history.push('/sign-up')
  }

  return (
    <SignLayout text='đăng nhập'>
        <form>
            <div className='form-group'>
                <input type='email' className='form-control' id='email' placeholder='Email' onChange={handleOnchangeEmail} />
              </div>
              <div className='form-group'>
                <input type='password' className='form-control' id='password' placeholder='Mật khẩu' onChange={handleOnchangePassword} />
              </div>
              <SoloButton btnStyle='sweet-red btn-sign-in' text={'Đăng nhập'} onClick={handleSignIn} />
              <div className='sign-up-redirection'>
                Bạn mới biết <span>Solo Travel Shop</span>? <span className='text' onClick={handleSignUpClick}>Đăng ký</span>
              </div>
        </form>
    </SignLayout>
    )
}
export default SignIn