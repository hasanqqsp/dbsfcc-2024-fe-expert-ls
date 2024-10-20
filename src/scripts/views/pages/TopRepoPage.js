import "../../../styles/top-repo.css"

// TODO : Buat Top Repo Page
export default class TopRepoPage {
    render(){
       
    }

    _hideLoading() {
        this.loadingIndicator.style.display = "none"
      }
    
    _showLoading() {
        this.loadingIndicator.style.display = "block"
    }

    _setTitle(){
        document.title = 'Top Repositories'
    }

    async afterRender(){

    }
}