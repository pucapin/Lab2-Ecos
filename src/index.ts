import { PostCard } from "./components/PostCard";
import { PostRender } from "./components/PostRender";
import { MainPage } from "./pages/MainPage";
import { CreatePostPage } from "./pages/CreatePostPage";
customElements.define('post-card', PostCard);
customElements.define('post-render', PostRender);
customElements.define('main-page', MainPage);
customElements.define('create-post', CreatePostPage);