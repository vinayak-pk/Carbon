import React from "react"
import {Route} from "react-router-dom"
import { InitForm } from './crowdfunding/pages/detailspage';
export const Routes = ()=>{
   return (
       <div>
           <Route path="/new/fundraiser">
               <InitForm/>
           </Route>
       </div>
   )
}