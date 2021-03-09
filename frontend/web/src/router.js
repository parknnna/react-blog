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
import tableList from "views/TableList";
import boardInsert from "components/Board/BoardInsert";
import boardUpdateForm from "components/Board/BoardUpdateForm";
import projectInsert from "components/project/insert"
import projectBoard from "components/project/projectBoard";
import projectGet from "components/project/projectGet";
import PDF from "components/project/PDF"
import storyInsert from "components/story/insert"
import story from "components/story/storyget"


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
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: tableList,
    layout: "/admin",
  },
  {
    path: "/boardInsert",
    name: "boardInsert",
    icon: "files_paper",
    component: boardInsert,
    layout: "/admin",
  },
  {
    path: "/boardUpdateForm/:no",
    name: "boardUpdateForm",
    icon: "files_paper",
    component: boardUpdateForm,
    layout: "/admin",
  },
  {
    path: "/projectInsert",
    name: "projectInsert",
    icon: "files_paper",
    component: projectInsert,
    layout: "/admin",
  },
  {
    path: "/projectBoard",
    name: "projects",
    icon: "files_paper",
    component: projectBoard,
    layout: "/admin",
  },{
    path: "/projectGet/:no",
    name: "projectGet",
    icon: "files_paper",
    component: projectGet,
    layout: "/admin",
  },
  {
    path: "/PDF/:file",
    name: "projectGet",
    icon: "files_paper",
    component: PDF,
    layout: "/admin",
  },
  {
    path: "/storyInsert",
    name: "storyInsert",
    icon: "files_paper",
    component: storyInsert,
    layout: "/admin",
  },
  {
    path: "/storyget/:no",
    name: "story",
    icon: "files_paper",
    component: story,
    layout: "/admin",
  },
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
