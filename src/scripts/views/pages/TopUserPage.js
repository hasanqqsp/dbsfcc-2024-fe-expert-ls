import "../../../styles/top-user.css"

// TODO : Buat Top User Page
export default class TopUserPage {
    render(){

    }

    _hideLoading() {
        this.loadingIndicator.style.display = "none"
      }
    
    _showLoading() {
        this.loadingIndicator.style.display = "block"

    }

    _setTitle(){
        document.title = 'Top Users'
    }

    async afterRender(){
        
    }
}