import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetPostById } from "../../hooks"
import { useEffect, useState } from "react"
import { PostCard } from "../../components/post-list/post-card/PostCard"
import styles from './post.module.css'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


export function PostPage() {
    const {id} = useParams<{id: string}>()
    const currentId = Number(id)
    const {post, isLoading, error} = useGetPostById({id: currentId})
    const navigate = useNavigate()
    const [content, setContent] = useState<string>("");

    useEffect( () => {
        if (isNaN(currentId)) {
            navigate("/")
        }
    } ,[currentId])

    if(isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error occured. Try again later. <p>{error}</p></div>
    }
    if (!post) {
        navigate('/posts')
        return null;
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log(content);
    };
    return <div className={styles.postPage}>
        <div>
            <PostCard 
                id={post.id}
                name={post.name}
                description={post.description}
                createdBy={post.createdBy}
                imageUrl={post.imageUrl}
                tags={post.tags}
                likes={post.likes}
            />        
        </div>
        <div className={styles.commentsSection}>
            <form onSubmit={handleSubmit}>
                <ReactQuill 
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                />
                <button type="submit" style={{ marginTop: '10px' }}>
                    Отправить данные
                </button>
            </form>
        </div>
    </div>
    }

