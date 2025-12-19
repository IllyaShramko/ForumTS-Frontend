import { useEffect, useState } from "react";
import { PostCard } from "./post-card/PostCard";
import styles from './post-list.module.css';
import { ProductListProps } from "./post.types";
import { Tag } from "../../shared/types";




export function PostList({ filteredPosts }: ProductListProps) {

    const [tags, setTags] = useState<Tag[]>([])
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        async function getTags() {
            try {
                const response = await fetch("http://localhost:8000/tags", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data: Tag[] = await response.json()

                setTags(data)
            } catch (error) {
                console.error(error)
                if (error instanceof Error) {
                    setError(error.message)
                }
            } 
        }
        getTags()
    }, [])

    return <div className={styles.postList}>
        <div className={styles.content}>
            {filteredPosts?.map(post => 
                <PostCard 
                    title={post.name}
                    description={post.description}
                    author={post.createdBy}
                    imageUrl={post.imageUrl}
                    tags={post.tags?.map(tagId => {
                        const tag = tags.find(t => t.id === tagId)
                        return tag ? tag.name : ""
                    })}
                    likes={post.likes.length}
                ></PostCard>)}
        </div>        
    </div>
}