import React from 'react'
import Modal from 'react-bootstrap/Modal'

const Login = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <div>
            <div class="form-title text-center">
                <h4>Login</h4>
            </div>
            <div class="d-flex flex-column text-center">
            <form>
              <div class="form-group">
                <input type="email" class="form-control" id="email1"placeholder="Your email address..." />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password1" placeholder="Your password..." />
              </div>
              <button type="button" class="btn btn-info btn-block btn-round">Login</button>
            </form>
            
            <div class="text-center text-muted delimiter">or use a social network</div>
            <div class="d-flex justify-content-center social-buttons">
              <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                <i class="fab fa-twitter"></i>
              </button>
              <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                <i class="fab fa-facebook"></i>
              </button>
              <button type="button" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                <i class="fab fa-linkedin"></i>
              </button>
            </div>
          </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div class="signup-section">Not a member yet? <a href="#a" class="text-info"> Sign Up</a>.</div>
        </Modal.Footer>
        </Modal>
    )
}
export default Login