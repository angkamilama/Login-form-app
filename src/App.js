import React, { useRef, useState } from "react";
import style from "./style.css";

function App() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const [showUserError, setShowUserError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") {
      setShowUserError((showUserError) => !showUserError);
    }
    if (passwordRef.current.value === "") {
      setShowPasswordError((showPasswordError) => !showPasswordError);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="main-heading">inCard</h1>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={handleForm}>
            <label className="username-container">
              <p>Username</p>
              <input
                type="email"
                ref={nameRef}
                onClick={() => {
                  setShowUserError(false);
                }}
                placeholder="Enter your username..."
              />
              {showUserError ? (
                <p className="input-error">A username is required</p>
              ) : null}
            </label>
            <label>
              <p>Password</p>
              {showPassword ? (
                <div className="password-container">
                  <input
                    type="text"
                    onClick={() => {
                      setShowPasswordError(false);
                    }}
                    ref={passwordRef}
                    placeholder="Enter your password..."
                  />
                  <button
                    className="show-btn"
                    onClick={(e) =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    Hide
                  </button>
                </div>
              ) : (
                <div className="password-container">
                  <input
                    type="password"
                    ref={passwordRef}
                    onClick={() => {
                      if (showPasswordError) {
                        setShowPasswordError(false);
                      }
                    }}
                    placeholder="Enter your password..."
                  />
                  <button
                    className="show-btn"
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    Show
                  </button>
                </div>
              )}
              {showPasswordError ? (
                <p className="input-error">A password is required</p>
              ) : null}
            </label>
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
