import { PostCard } from "./post-card/PostCard";
import styles from './post-list.module.css';
import { ProductListProps } from "./post.types";



export function PostList({ filteredPosts }: ProductListProps) {
    return <div className={styles.postList}>
        <div className={styles.content}>
            {filteredPosts?.map(post => 
                <PostCard 
                    id={post.id}
                    name={post.name}
                    description={post.description}
                    createdBy={post.createdBy}
                    imageUrl={post.imageUrl}
                    tags={post.tags}
                    likes={post.likes}
                ></PostCard>)}
        </div>        
    </div>
}