/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import board from "components/Board/BoardGet";
import boardDelte from "components/Board/BoardDelete";
export var dashRoutes = [
  {
    path: "/board/:no",
    name: "board",
    component: board,
    layout: "/admin",
  },
  {
    path: "/boardDelete/:no",
    name: "boardDelte",
    component: boardDelte,
    layout: "/admin",
  }
];

export function Router (){
  return(
    <Switch>
      {dashRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  )
}
