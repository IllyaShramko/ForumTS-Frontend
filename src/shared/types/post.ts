import { User } from "./user";
import { PostTag } from "./tag";

export interface Post {
    id: number,
    name: string,
    imageUrl?: string,
    description: string,
    tags: PostTag[],
    createdBy: User,
    likes: number[]
}
