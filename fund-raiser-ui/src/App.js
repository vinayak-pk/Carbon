import './App.css';
import { BrowseFundraiser } from './Components/BrowseFundraiser'
import { PaymentSimulation }from './Components/PaymentSimulation'
//import { Link } from 'react-router-dom';
// const links =[
//   {
//     title:'Browse Fundraiser',
// to:'browserfunding'}]
function App() {
  return (
    <div>
      <PaymentSimulation />
    </div>
  );
}

export default App;
