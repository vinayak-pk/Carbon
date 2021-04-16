import React from "react"
import {Route} from "react-router-dom"
import { InitForm } from './crowdfunding/pages/detailspage';
import { PatientInfo } from './crowdfunding/pages/details2';
import { PatientDesc } from "./crowdfunding/pages/detailsdesc";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const Routes = ()=>{
   return (
       <div>
           <Route path="/new/fundraiser">
               <InitForm/>
           </Route>
           <Route path="/new/medical/advance">
               <PatientInfo/>
           </Route>
           <Route path="/new/medical/desc">
                <PatientDesc/>
           </Route>
       </div>
   )
}