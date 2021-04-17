import './App.css';
import { BrowseFundraiser } from './Components/BrowseFundraiser';
import React from "react";
import { Routes } from './Components/Routes';
//import { Link } from 'react-router-dom';
// const links =[
//   {
//     title:'Browse Fundraiser',
// to:'browserfunding'}]
function App() {
  return (
    <>
    <Routes/>
    {/* {openPaymentModal?
    (<div>
      <BrowseFundraiser  openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      <PaymentSimulation openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      </div>):
      (<div>
        <BrowseFundraiser  openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      </div>)  
} */}
</>
  )
  
 
}

export default App;
