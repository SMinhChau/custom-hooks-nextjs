"use client";

import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-center w-6/12 h-3/5">
        <form className="container w-full flex items-center flex-col py-6">
          <div className="container-center flex-col w-3/4 m-2 h-full">
            <label htmlFor="username" className="form-label">
              UserName
            </label>

            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="form-input"
            />
          </div>

          <div>
            <button type="submit" className="btn-submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
