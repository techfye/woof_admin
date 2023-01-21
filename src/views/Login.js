import { React, useState } from 'react'
const Login = () => {


  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  return (
    <>
      <div className="layout-page" style={{ alignSelf: 'center' }}>
        <div className="container-xxl" >
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner d-flex justify-content-center" >
              <div className="card" style={{ width: '35%' }}>
                <div className="card-body">
                  <h4 className="mb-2">Welcome to Social Platform 👋</h4>
                  <p className="mb-4">Please sign-in to your account and start the adventure</p>

                  <form className="mb-3" action="index.html" method="POST">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email or Username</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        name="email"
                        placeholder="Enter your email or username"
                        autoFocus
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                        <a href="auth-forgot-password-basic.html">
                          <small>Forgot Password?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="password"
                          onChange={handleChange}
                        />
                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="remember-me" />
                        <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button type='submit' className="btn btn-primary d-grid w-100">Sign in</button>
                    </div>
                  </form>

                  <p className="text-center">
                    <span>New on our platform?</span>
                    <a href="auth-register-basic.html">
                      <span>Create an account</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login