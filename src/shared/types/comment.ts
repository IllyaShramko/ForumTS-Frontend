import { User } from "./user";
import { Post } from "./post";

export interface Comment {
    id: number
    body: string
    user: User
    createdAt: string
}