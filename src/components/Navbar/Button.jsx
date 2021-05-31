import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import "./Dropdown.css"
import Modal from "react-modal";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import {useDispatch,useSelector} from "react-redux"
import { setUser } from '../../Redux/Auth/auth.action';
function Button({ currentUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [click, setClick] = useState(false);
  const user = useSelector(state=>state.auth.User)
  const handleClick = () => setClick(!click);
  let dispatch = useDispatch();
  const handleSignIn = (e) => {
    e.preventDefault();
    setmodalIsOpen(false);

    auth
      .signInWithEmailAndPassword(email, password)

      .then((res) => { alert("User Logged In Sucessfully !")
      console.log(res.user)
      dispatch(setUser(res.user.displayName))
  })
      .catch((err) => {console.log(err);alert("Wrong credentials!")});
  };
  let short = ()=>{

    let name = user.split(' ');
    return name[0];
  }
  let handleSignout=()=>{
    setClick(!click);
      auth.signOut();
      localStorage.clear();
  }
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  
  return (
    <div>
      {currentUser && currentUser ? (
        <li>
          <button style={{borderRadius:"50px",background:"lightgrey"}} onClick={handleClick} className="btn">
           {short()}
          </button>
          </li>):(<li> 
        <button onClick={() => setmodalIsOpen(true)} className="btn">
          Sign In
        </button>
        </li>
      )}
          <ul
        className={click ? 'dropdown-menu':'dropdown-menu clicked' }
      >   
            <li>
              <p style={{margin:"0 26%",padding:"10px 0px"}}>{user}</p>
            </li>
            <li> 
              <Link
                className="dropdown-link"
                onClick={handleSignout}
                style={{margin:"0 30%",padding:"10px 0px"}}
              >
                Sign out
              </Link>
            </li>
      </ul> 
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
                className="Input"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
              className="Input"
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
                <Link style={{ color: "rgb(1,191,189)" }}>
                  {" "}
                  Terms of Service
                </Link> and{" "}
                <p style={{ color: "rgb(1,191,189)" }}>Privacy Policy.</p>
              </h6>
            </div>
            <div>
              <p>
                Want to start a fundraiser?{" "}
                <Link style={{ color: "rgb(1,191,189)" }}>Click here</Link>
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
                  width="20px"
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
                  width="20px"
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
