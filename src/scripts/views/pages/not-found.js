const NotFoundPage = {
    async render() {
      return `<main class="not-found-container">
      <p class="not-found-404">404</p>
      <h2 class="not-found">Halaman Tidak Ditemukan</h2>
      </main>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default NotFoundPage;