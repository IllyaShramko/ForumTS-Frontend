import { useEffect, useState } from "react";
import { PostList } from "../../components/post-list/PostList";
import styles from './posts.module.css';
import { ICONS } from "../../shared/icons";
import { SelectTags } from "../../components/select-tags";
import { Post } from "../../shared/types";

export function PostsPage() {
    const [searchValue, setSearchValue] = useState<string>("")
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch("http://localhost:8000/posts", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                const data: Post[] = await response.json()
                setPosts(data)
            } catch (error) {
                console.error(error)
            } 
        }
        getPosts()
    }, [])  
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
    const [selectedTags, setSelectedTags] = useState<number[]>([])
    
    function toggleTag(id: number) {
        setSelectedTags(prev => {
            if (prev.includes(id)) {
                return prev.filter(tag => tag !== id); 
            }
            return [...prev, id]; 
        });
    }

    useEffect(() => {
        let foundPosts = posts.filter(post =>
            post.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (selectedTags.length > 0) {
            foundPosts = foundPosts.filter(post =>
                post.tags.some(tagId => selectedTags.includes(tagId))
            );
        }

        setFilteredPosts(foundPosts);
    }, [posts, searchValue, selectedTags]);

    return <div className={styles.postList}>
        <div className={styles.filtersBlock}>
            <h2 className={styles.searchText}>Пошук за назвою:</h2>
            <div className={styles.searchBar}>
                <ICONS.SearchIcon className={styles.searchIcon}></ICONS.SearchIcon>
                <input 
                    value={searchValue} 
                    onChange={event => {
                        setSearchValue(event.target.value)
                    }} 
                    type="text"
                    placeholder="Знайдіть що вам потрібно..." />
            </div>
            <h2 className={styles.filtersTitle}>Популярні теги:</h2>
            <SelectTags selectedTags={selectedTags} setSelectedTags={setSelectedTags} toggleTag={toggleTag}></SelectTags>
        </div>
        <PostList filteredPosts={filteredPosts}></PostList>      
    </div>
}