import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import SidebarInitiator from '../utils/sidebar-initiator';
import NotFoundPage from './pages/NotFoundPage';

class App {
  constructor({ showButton, closeButton, sidebar, overlay, content }) {
    this._showButton = showButton;
    this._closeButton = closeButton;
    this._sidebar = sidebar;
    this._overlay = overlay;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    SidebarInitiator.init({
      showButton: this._showButton,
      closeButton: this._closeButton,
      sidebar: this._sidebar,
      overlay: this._overlay,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url];
    if (!page){
      page = NotFoundPage;
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();

  }
}

export default App;
