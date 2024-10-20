// TODO : Siapkan Sidebar 
const SidebarInitiator = {
  init({ showButton, closeButton, sidebar, overlay }) {
  
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
