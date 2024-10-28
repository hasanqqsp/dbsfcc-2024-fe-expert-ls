const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener("click", () => {
            drawer.classList.toggle("open");
        });

        document.addEventListener("click", (event) => {
            if (!drawer.contains(event.target) &&
            !button.contains(event.target) &&
             drawer.classList.contains("open")) {
          this._closeDrawer(event, drawer);
            }
        });
    },
   
    _toggleDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.toggle('open');
    },
   
    _closeDrawer(event, drawer) {
      event.stopPropagation();
      drawer.classList.remove('open');
    },
  };
   
  export default DrawerInitiator;