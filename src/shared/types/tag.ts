export interface Tag {
    id: number,
    name: string,
}
export interface PostTag {
    postId: number,
    tagId: number,
    tag: Tag
}