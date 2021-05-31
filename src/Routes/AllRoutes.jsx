import React from "react";
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Services from "../Components/Pages/Services";
import SignUp from "../Components/Pages/SignUp";
import {BrowseFundraiser} from "../Components/BrowseFundraiser";
import Home from "../Components/Pages/Home";
import HowItWorks from "../Components/Pages/How It Works";
import StartFundaraiser from "../Components/Pages/Start_Fundraiser";
import MedicalTreatment from "../Components/Pages/Medical_Treatment";
import { PatientInfo } from "../Components/Crowdfunding/pages/details2"
import {PrivateRoute} from "./PrivateRoute";
import { Layout } from '../Components/Details/layout';
function AllRouter() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/how_it_works" component={HowItWorks} />
        <PrivateRoute path="/new/fundraiser"><StartFundaraiser/></PrivateRoute>
        <Route path="/new/medical/advance">
           <PatientInfo/>
        </Route> 
        <Route path="/sign-up" component={SignUp} />
        <Route path="/Medical_Treatment" component={MedicalTreatment} />
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
