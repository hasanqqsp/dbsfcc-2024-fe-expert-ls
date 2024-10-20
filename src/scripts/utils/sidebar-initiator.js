// TODO : Siapkan Sidebar 
const SidebarInitiator = {
  init({ showButton, closeButton, sidebar, overlay }) {
    showButton.addEventListener("click", (event) => {
      this._toggleSidebar(event, sidebar, overlay);
    });

    closeButton.addEventListener("click", (event) => {
      this._closeSidebar(event, sidebar, overlay);
    });
    overlay.addEventListener("click", (event) => {
      this._closeSidebar(event, sidebar, overlay);
    });
    sidebar.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        this._closeSidebar(event, sidebar, overlay);
      });
    });
    window.addEventListener("resize",(event) => {
      this._closeSidebar(event, sidebar, overlay);
    })
  },

  _toggleSidebar(event, sidebar, overlay) {
    event.stopPropagation();
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
  },

  _closeSidebar(event, sidebar, overlay) {
    event.stopPropagation();
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  },
};

export default SidebarInitiator;
