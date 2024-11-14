import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import NotFoundPage from './pages/not-found';
 
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
 
    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = window.location.hash.slice(1) || '/';
    let page = routes[url];
    if(page == undefined){
      page = NotFoundPage
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
 
export default App;