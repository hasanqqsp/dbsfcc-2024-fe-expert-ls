
import DetailPage from '../views/pages/DetailPage';
import TopRepoPage  from '../views/pages/TopRepoPage';
import TopUserPage from '../views/pages/TopUserPage';


const routes = {
  '/': new TopRepoPage(),
  '/top-repo': new TopRepoPage(),
  '/top-user': new TopUserPage(),
  '/repositories/:owner/:name': new DetailPage(),

};

export default routes;
