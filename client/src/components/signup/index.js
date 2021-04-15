import React from 'react'

const SignUp = () => {
    return (
        <div className="sign-up">
        <div class="form-title text-center">
          <h4>Chào mừng bạn đền với SoloTravelShop, vui lòng đăng nhập nhé!</h4>
      </div>
      <div class="d-flex flex-column text-center">
      <form>
        <div class="form-group">
          <input type="text" class="form-control" id="phone"placeholder="Số điện thoại" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="password" placeholder="Mật khẩu" />
        </div>
        <button type="button" class="btn btn-info btn-block btn-round">Đăng nhập</button>
      </form>
    </div>
  </div>
    )
}
export default SignUp