
import TopRepoPage  from "../views/pages/TopRepoPage";
import TopUserPage from "../views/pages/TopUserPage";

// TODO : Siapkan Routes
const routes = {
  "/": new TopRepoPage(),
  "/top-repo": new TopRepoPage(),
  "/top-user": new TopUserPage(),

};

export default routes;
