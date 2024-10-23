import { Jumbotron } from '../templates/jumbotron'
// TODO : Buat NotFoundPage
const NotFoundPage = {
  render() {
    this._setTitle()
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" tabindex="0">
            <h2 class="not-found">404</h2>
            <p class="not-found-desc">Halaman tidak ditemukan</p>
        </section>
    `
  },
  afterRender() {},
  _setTitle() {
    document.title = 'Halaman Tidak Ditemukan'
  },
}

export default NotFoundPage
