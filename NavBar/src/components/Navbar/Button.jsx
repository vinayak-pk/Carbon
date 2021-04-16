import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Button.css";
import Modal from "react-modal";
import { auth } from "../../firebase";
import { connect } from "react-redux";

function Button({ currentUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    setmodalIsOpen(false);

    auth
      .signInWithEmailAndPassword(email, password)

      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <div>
      {currentUser && currentUser ? (
        <li>
          <button onClick={() => auth.signOut()} className="btn">
            Sign Out
          </button>
        </li>
      ) : (
        <button onClick={() => setmodalIsOpen(true)} className="btn">
          Sign In
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className="modalauthBox"
      >
        <form>
          <button onClick={() => setmodalIsOpen(false)} className="modalclose">
            X
          </button>
          <div>
            <h1 style={{ textAlign: "center" ,color:"grey" }}>Login</h1>
          </div>
          <div className="left-Content_modal">
            <div>
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignIn} className="signBtn">
              Sign In
            </button>
            <p style={{ color: "rgb(1,191,189)" }}>Login via OTP</p>
            <div>
              <h6>
                By continuing you agree to our
                <a style={{ color: "rgb(1,191,189)" }}>
                  {" "}
                  Terms of Service
                </a> and{" "}
                <p style={{ color: "rgb(1,191,189)" }}>Privacy Policy.</p>
              </h6>
            </div>
            <div>
              <p>
                Want to start a fundraiser?{" "}
                <a style={{ color: "rgb(1,191,189)" }}>Click here</a>
              </p>
            </div>
          </div>
          <div className="middle-Content_modal">
            <h1 style={{ color: "grey", fontWeight: "500",fontSize:"medium" }}>OR</h1>
          </div>
          <div className="right-Content_modal">
            <div className="google_facebook_Butn">
              <button
                style={{
                  backgroundColor: "rgb(53,108,198)",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                  width="30px"
                  src="https://ketto.gumlet.io/assets/images/login/google.png?w=240&dpr=1.0"
                  alt="gmail"
                />
                Sign in With Google
              </button>

              <button
                style={{
                  backgroundColor: "rgb(66,103,178)",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <img
                style={{ margin:"auto"}}
                  width="30px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPwov60381HTsOCduYJ-Sh0YZkgqPNuFesQ&usqp=CAU"
                  alt="fb"
                />
                Continue With Facebook
              </button>
            </div>
          </div>
        </form>
        <div></div>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(Button);
