import { Post } from "../types/Post";

export async function getPosts(): Promise<Post[]> {
    try {
        const res = await fetch('http://localhost:5000/posts');
        const data: Post[] = await res.json();
        console.log(data)
        return data;
    } catch (error) { 
        console.log(error);
        return [];
    }
} 
