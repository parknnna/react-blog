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
import UserPage from "views/UserPage.js";
import i from "views/Icons.js";
import projectBoard from "components/project/projectBoard";




var dashRoutes = [
  {
    path: "/dashboard",
    name: "Main",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/License",
    name: "License",
    icon: "design_app",
    component: License,
    layout: "/admin",
  },  
  {
    path: "/extended-tables",
    name: "notice board",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/projectBoard",
    name: "projects",
    icon: "files_paper",
    component: projectBoard,
    layout: "/admin",
  },
  {
    path: "/i",
    name: "i",
    icon: "files_paper",
    component: i,
    layout: "/admin",
  },
];
export default dashRoutes;
