# *Live Session* #3 : Web Architecture & Submission 1

## Proyek Latihan

Proyek latihan yang akan dikembangkan selama *Live Session* ke-3 ini adalah proyek "Github Repo App" sebuah aplikasi yang menampilkan top repositories (repository dengan star terbanyak) dan top users (users) dengan follower terbanyak data akan diambil dari public search API yang disediakan github.

### Sumberdaya

#### Rest API Endpoint
Top Repositories by Star : https://github-leaderboard-api.vercel.app/repos/stars?

Top Users by Followers : https://github-leaderboard-api.vercel.app/repos/forks

### Struktur Proyek

- src → public: untuk menyimpan aset yang dapat diakses secara public seperti favicon, icons, gambar, video, atau font.
- src → styles: untuk menyimpan berkas styling seperti CSS.
- src → scripts: untuk menyimpan berkas JavaScript, termasuk entry point.
- src → scripts → data: untuk menyimpan berkas JavaScript yang mengatur pengelolaan / pengambilan data.
- src → scripts → routes: untuk menyimpan berkas JavaScript yang mengatur routing dengan hash routing.
- src → scripts → utils: untuk menyimpan berkas JavaScript yang berisi fungsi fungsi utilitas.
- src → scripts → views: untuk menyimpan berkas JavaScript yang berkaitan dengan tampilan dan DOM.
- src → templates: untuk menyimpan aset HTML.

### *Node Dependencies*
1. Webpack : Module bundler untuk meng-compile kode yang dibuat
2. babel : transpiler untuk versi javascript yang lebih lama
3. clean-webpack-plugin : membersihkan direktori distribusi setiap melakukan build 
4. copy-webpack-plugin : menyalin file assets statis ke direktori distribusi
5. html-webpack-plugin : untuk generate file html
6. css-loader & style-loade: loader css untuk webpack
7. http-server : untuk menjalankan http-server sederhana
8. babel-loader : loader babel di webpack
9. dst..

```bash
npm install @babel/core @babel/preset-env clean-webpack-plugin copy-webpack-plugin css-loader html-webpack-plugin http-server style-loader webpack webpack-cli webpack-dev-server webpack-merge
```
  
## *Learning Objectives*

Setelah sesi ketiga ini, peserta diharapkan dapat mempelajari:
- Membedakan arsitektur website Multi Page App (MPA) dan Single Page App (SPA).
- Mengimplementasikan routing system dengan hash pada aplikasi SPA.
- Membangun UI aplikasi dengan pendekatan mobile-first.
- Menerapkan standar-standar accessibility pada aplikasi web.

## Live Session Selanjutnya : *Progressive Web Application*