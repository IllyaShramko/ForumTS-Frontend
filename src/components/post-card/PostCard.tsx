import styles from './product-card.module.css'

interface Author {
    name: string,
    surname: string,
    avatar: string
}

interface PostCardProps {
    title: string,
    image: string,
    description: string,
    tags: string[],
    author: Author,
    likes: number
}

export function PostCard(props: PostCardProps) {
    const {title, image, description, tags, author, likes} = props

    return <div className={styles.product}>
        <div className={styles.postInformation}>
            <p className={styles.title}>{title}</p>
            <img className={styles.postImage} src={image} alt="cat"/>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
                {tags.map((tag, index) => <span key={index} className={styles.tag}>#{tag}</span>)}
            </div>
        </div>
        <div className={styles.postFooter}>
            <div className={styles.authorAndLikes}>
                <div className={styles.author}>
                    <img className={styles.authorAvatar} src={author.avatar} alt="avatar"/>
                    <span className={styles.authorName}>{author.name} {author.surname}</span>
                </div>
                <div className={styles.likes}>
                    <span>{likes} likes</span>
                </div>
            </div>
        </div>
    </div>
}