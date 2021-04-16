import './App.css';
import { BrowseFundraiser } from './Components/BrowseFundraiser';
import { PaymentSimulation }from './Components/PaymentSimulation';
import React from "react";
//import { Link } from 'react-router-dom';
// const links =[
//   {
//     title:'Browse Fundraiser',
// to:'browserfunding'}]
function App() {
  
  const [openPaymentModal, setOpenPaymentModal] = React.useState(false);
  return (
    openPaymentModal?
    (<div>
      <BrowseFundraiser  openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      <PaymentSimulation openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      </div>):
      (<div>
        <BrowseFundraiser  openPaymentModal = {openPaymentModal} setOpenPaymentModal = {setOpenPaymentModal}/>
      </div>)  
  );
}

export default App;
