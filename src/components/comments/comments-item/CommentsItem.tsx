import styles from './comments-item.module.css';
import { Comment } from '../../../shared/types/comment';

interface CommentsItemProps {
    postId: number;
}

export function CommentsItem({ postId }: CommentsItemProps) {
    return <div className={styles.commentItem}>
        <p>Hello</p>
    </div>
}