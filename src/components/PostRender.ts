import { getPosts } from "../utils/GetPosts";
class PostRender extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();

    }

    render() {
        if (!this.shadowRoot) {
            return;
        }
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/PostRender.css">
            <div id="load"><div class="spinner"></div></div>
            <div class="section">
            </div>
                    `;

        const section = this.shadowRoot.querySelector('.section');
        const loadArea = this.shadowRoot.getElementById('load')
        getPosts().then(data => {
            if(section && loadArea) {

            if(data.length === 0) {
                loadArea.innerHTML = ``;
                section.innerHTML = `<p>No posts yet :O</p>`
            }
            data.forEach(item => {
                const newCard = this.ownerDocument.createElement('post-card');
                newCard.setAttribute('img', item.img);
                newCard.setAttribute('title', item.title);
                newCard.setAttribute('desc', item.desc);
                newCard.setAttribute('id', item.id.toString())
                loadArea.innerHTML = ``;
                section?.appendChild(newCard);
                
            })
            }
        })
    }

}

export { PostRender };