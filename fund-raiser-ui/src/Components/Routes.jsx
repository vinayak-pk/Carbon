import React from "react"
import { Route } from "react-router-dom"
import { BrowseFundraiser } from './BrowseFundraiser';

export function Routes(){
    return(
        <div>
            <Route exact path="/fundraisers">
                <BrowseFundraiser/>
            </Route>
            <Route exact path="/fundraisers/category/">
                <BrowseFundraiser/>
            </Route>
            <Route exact path="/fundraisers/category/:val">
                <BrowseFundraiser/>
            </Route>
        </div>
    )
}

