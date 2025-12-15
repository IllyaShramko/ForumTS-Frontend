import { Author } from "./author";

export interface Product {
    id: number,
    title: string,
    image: string,
    description: string,
    tags: number[],
    author: Author,
    likes: number
}
