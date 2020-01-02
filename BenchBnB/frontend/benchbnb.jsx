import React from "react";
import ReactDOM from "react-dom";

// for testing

import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    //for testing
    window.login = SessionApiUtil.login
    window.logout = SessionApiUtil.logout
    window.signup = SessionApiUtil.signup

    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});