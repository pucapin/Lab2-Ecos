class MainPage extends HTMLElement{
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    } 
      
        connectedCallback() {
        this.render();

        }

        render() {
            if(!this.shadowRoot) {
                return;
            }
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/MainPage.css">

            <div class="main">
            <div class="top">
                <h1>Posts</h1>
                <button>+ New Post</button>
            </div>
            <post-render></post-render>

            </div>`;
        }
    
    }

    export {MainPage};