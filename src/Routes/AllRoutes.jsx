import React from "react";
// import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "../components/pages/Services";
import SignUp from "../components/pages/SignUp";
import Navbar from "../components/Navbar/Navbar";
import {BrowseFundraiser} from "../components/BrowseFundraiser";
import Home from "../components/pages/Home";
import How_It_Works from "../components/pages/How It Works";
import Start_Fundraiser from "../components/pages/Start_Fundraiser";
import Medical_Treatment from "../components/pages/Medical_Treatment";
import { PatientInfo } from "../components/crowdfunding/pages/details2"
import {PrivateRoute} from "./PrivateRoute";
import { Layout } from '../components/Details/layout';
function AllRouter() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/how_it_works" component={How_It_Works} />
        <PrivateRoute path="/new/fundraiser"><Start_Fundraiser/></PrivateRoute>
        <Route path="/new/medical/advance">
           <PatientInfo/>
        </Route>
        <Route path="/sign-up" component={SignUp} />
        <Route path="/Medical_Treatment" component={Medical_Treatment} />
        <Route path="/fundraiser/:id">
            <Layout/>
        </Route>
        <Route exact path="/fundraisers">
                <BrowseFundraiser/>
            </Route>
            <Route exact path="/fundraisers/category/">
                <BrowseFundraiser/>
            </Route>
            <Route exact path="/fundraisers/category/:val">
                <BrowseFundraiser/>
            </Route>
      </Switch>
    </div>
  );
}

export default AllRouter;
