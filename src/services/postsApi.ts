import { buildUrl, sendRequest } from '../services/instance';

interface Post {
    _id: string;
    title: string;
    text: string;
    tags: string[];
    viewsCount: number;
    imageUrl?: string;
    createdAt: Date;
    user: {
        _id: string;
        fullName: string;
        avatarUrl: string;
    };
}


export const getPosts = () => {
  return sendRequest<Post[]>(buildUrl('posts'));
}

export const getTags = () => {
  return sendRequest<string[]>(buildUrl('posts/tags'));
}

export const getOnePost = (id: string) => {
  return sendRequest<Post>(buildUrl('posts', id));
}
