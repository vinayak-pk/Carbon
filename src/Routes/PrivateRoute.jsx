import React from "react"
import { Route } from "react-router-dom"
import { useSelector } from 'react-redux';
import { InitForm } from '../Components/Crowdfunding/pages/detailspage';
export function PrivateRoute({children, exact, path}){
    const isAuth = useSelector(state=>state.auth.isAuth)

    return isAuth?<Route exact path={path}><InitForm/></Route>: <Route exact path={path}>{children}</Route>
}