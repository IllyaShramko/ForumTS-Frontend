import { useEffect, useState } from "react";
import styles from './comments.module.css';
import { useGetCommentsByPostId } from "../../hooks";
import { CommentsProps } from "./comment.types";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

export function Comments({ postId }: CommentsProps) {
    const [content, setContent] = useState<string>("");
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setContent("")
        console.log(content)
    };
    return <div className={styles.commentsSection}>
            <form onSubmit={handleSubmit}>
                <ReactQuill 
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    className={styles.quillEditor}
                />
                <button className={styles.submitButton} type="submit" style={{ marginTop: '10px' }}>
                    Опублікувати коментар
                </button>
            </form>
            <div className={styles.commentsList}>
                <h2>Немає коментарів... Почніть бесіду</h2>
            </div>
        </div>
}