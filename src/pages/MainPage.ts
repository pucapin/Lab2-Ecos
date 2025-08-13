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

            <div class="main" id="main-p">
            <div class="top">
                <h1>Posts</h1>
                <button id="open-new">+ New Post</button>
            </div>
            <post-render></post-render>

            </div>`;
            const openNew = this.shadowRoot.getElementById('open-new');
            openNew?.addEventListener('click', () => {
                const mainP = this.shadowRoot?.getElementById('main-p');
                if(mainP) {
                mainP.innerHTML = `<create-post></create-post>`
                }
            })
        }
    
    }

    export {MainPage};