import { getPosts } from "../utils/GetPosts";

class CreatePostPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) {
      return;
    }
    this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/MainPage.css">
        <form id="postForm">
        <label>
          Title:
          <input type="text" name="title" id="input-title"/>
        </label>
        <label>
          Image URL:
          <input type="text" name="image" id="input-url"/>
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" id="input-desc"/>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
            `;
           
    const form = this.shadowRoot.getElementById('postForm') as HTMLFormElement;
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
         const imgInput = this.shadowRoot?.getElementById('input-url') as HTMLInputElement
            const titleInput = this.shadowRoot?.getElementById('input-title') as HTMLInputElement
            const descInput = this.shadowRoot?.getElementById('input-desc') as HTMLInputElement
            const img = imgInput.value
            const title = titleInput.value;
            const desc = descInput.value;

        getPosts().then(data => {
            const postId = data.length + 1;
            fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                'img': img,
                'title': title,
                'desc': desc,
                'id': postId
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))

        })

    });

    const viewPosts = this.shadowRoot.getElementById("view-p");
    viewPosts?.addEventListener("click", () => {
      const mainV = this.shadowRoot?.getElementById("main-view");
      if (mainV) {
        mainV.innerHTML = ``;
      }
    });
  }
}

export { CreatePostPage };
