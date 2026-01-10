import { Link } from 'react-router-dom'
import styles from './post-card.module.css'
import { User } from '../../../shared/types'
import { IMAGES } from '../../../shared/images'
import { PostTag } from '../../../shared/types/tag'

interface PostCardProps {
    id: string | number,
    name: string,
    imageUrl?: string,
    description: string,
    tags: PostTag[],
    createdBy: User,
    likes: number[]
}

export function PostCard(props: PostCardProps) {
    const {id, name, imageUrl, description, tags, createdBy, likes} = props

    return (
        <div className={styles.postLink}>
            <Link to={`/posts/${id}`} className={styles.post}>
                <div className={styles.postInformation}>
                    <p className={styles.title}>{name}</p>
                    <div>
                        <img className={styles.postImage} src={imageUrl} alt={name}/>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.tags}>
                        {tags?.map((tag, index) => (
                            <span key={index} className={styles.tag}>#{tag.tag.name}</span>
                        ))}
                    </div>
                </div>
                
                <div className={styles.line}></div>

                <div className={styles.postFooter}>
                    <div className={styles.author}>
                        <img 
                            className={styles.authorAvatar} 
                            src={createdBy?.avatar || IMAGES.defAvatar} 
                            alt="avatar"
                        />
                        <span className={styles.authorName}>
                            {createdBy?.firstName} {createdBy?.secondName}
                        </span>
                    </div>
                    <div className={styles.likes}>
                        <span>{likes.length} likes</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}