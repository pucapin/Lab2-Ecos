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
            <div class="section">
            </div>
                    `;

        const section = this.shadowRoot.querySelector('.section');
        getPosts().then(data => {
            data.forEach(item => {
                const newCard = this.ownerDocument.createElement('post-card');
                newCard.setAttribute('img', item.img);
                newCard.setAttribute('title', item.title);
                newCard.setAttribute('desc', item.desc);
                section?.appendChild(newCard);
            })
        })
    }

}

export { PostRender };