class PostCard extends HTMLElement{
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
            <link rel="stylesheet" href="css/PostCard.css">
            <div class="card">
                <h2>${this.getAttribute('title')}</h2>
                <p>${this.getAttribute('desc')}</p>
                <img src="${this.getAttribute('img')}" alt="" class="imgF">
                <button id="delete-btn">Delete</button>
            </div>`;
        }
    
    }

    export {PostCard};