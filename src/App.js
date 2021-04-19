import React from "react";
import Modal from "react-modal";
import "./App.css";
import { connect } from "react-redux";
import { auth } from "./firebase";
import AllRouter from "./Routes/AllRoutes";
import { ChatBot } from './components/pages/Chat';
import { clearCurrentUser, setCurrentUser } from "./Redux/Auth/auth.action";
Modal.setAppElement("#root");

function App({ currentUser, clearCurrentUser, setCurrentUser }) {
  React.useEffect(() => {
    let unsubscribefromAuth = null;

    unsubscribefromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        clearCurrentUser();
      }
    });
    return () => unsubscribefromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);
  return <>
  <AllRouter />; <ChatBot/>
  </>
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),

  clearCurrentUser: () => dispatch(clearCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
