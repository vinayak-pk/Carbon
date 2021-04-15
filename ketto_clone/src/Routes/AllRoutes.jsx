import React from 'react';
// import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from '../components/pages/Services';
import SignUp from '../components/pages/SignUp';
import Navbar from '../components/Navbar/Navbar';
import Browse_Fundraisers from '../components/pages/Browse_Fundraisers';
import Home from '../components/pages/Home';
import How_It_Works from '../components/pages/How It Works';
import Start_Fundraiser from '../components/pages/Start_Fundraiser';
import Medical_Treatment from '../components/pages/Medical_Treatment';


function AllRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/browse_fundraisers' component={Browse_Fundraisers} />
        <Route path='/services' component={Services} />
        <Route path='/how_it_works' component={How_It_Works} />
        <Route path='/start_fundraiser' component={Start_Fundraiser} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Medical_Treatment' component={Medical_Treatment} />
      </Switch>
    </Router>
  );
}

export default AllRouter;