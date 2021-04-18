import React from "react";
import { Route } from "react-router-dom";
import { Comment } from "./Comment_Box/Comment";
export const Routes = () => {
  return (
    <Route to="/" exact>
      {Comment}
    </Route>
  );
};
