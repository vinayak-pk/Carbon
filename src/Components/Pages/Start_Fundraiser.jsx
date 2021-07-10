import React, { useState } from "react";
import "../../App.css";
import { auth } from "../../firebase";
import Modal from "react-modal";
import styles from "./Start_Fund.module.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Start_Fundraiser() {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const history = useHistory();

  const locate = () => {
    history.push("/");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    locate();
    setmodalIsOpen(false);

    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(function(result){
          return result.user.updateProfile({
            displayName: displayName
          })
        })
        .then((user) => alert("User Signed In Sucessfully !")
       )
        .catch((err) => console.log(err))
    } else {
      alert("Password do not match");
    }
  };
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className={styles.modalauthBox}
      >
        <form>
          <div>
            <h3
              style={{
                textAlign: "center",
                color: "black",
                borderBottom: "1px solid grey",
              }}
            >
              Start your fundraiser
            </h3>
          </div>
          <div className={styles.dropdown}>
            <label for="funds">Purpose of raising funds:</label>
            <select className={styles.option} name="funds" id="funds">
              <option value="Medical">Medical Treatment</option>
              <option value="NGO">NGO / Charity</option>
              <option value="Other">Other Cause</option>
            </select>
          </div>
          <div className={styles.inputDiv}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
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
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="passwordConfirmation"
                placeholder="Confirm Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link style={{ color: "rgb(1,191,189) " }}>Login</Link>
            </p>
            <button className={styles.signBtn} onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
