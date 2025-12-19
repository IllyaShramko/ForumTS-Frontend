import { User } from "./user";

export interface Post {
    id: number,
    name: string,
    imageUrl?: string,
    description: string,
    tags: number[],
    createdBy: User,
    likes: number[]
}
