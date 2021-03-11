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
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import License from "views/License.js";

import i from "components/story/storyBoard";
import projectBoard from "components/project/projectBoard";





var dashRoutes = [
  {
    path: "/dashboard",
    name: "Main",
    icon: "emoticons_satisfied",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/License",
    name: "License & Awards",
    icon: "design_app",
    component: License,
    layout: "/admin",
  },  
  {
    path: "/projectBoard",
    name: "projects",
    icon: "loader_gear",
    component: projectBoard,
    layout: "/admin",
  },
  {
    path: "/story",
    name: "story",
    icon: "design_image",
    component: i,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "notice board",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
];
export default dashRoutes;
