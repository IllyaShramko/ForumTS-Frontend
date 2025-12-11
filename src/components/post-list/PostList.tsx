import { PostCard } from "../post-card/PostCard";
import styles from './product-list.module.css';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import { useEffect, useState } from "react";

const posts = [
    {
        id: 1,
        title: "Product 1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg",
        description: "This is a description for product 1",
        tags: [1, 2],
        author: {
            name: "John",
            surname: "Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png"
        },
        likes: 10
    },
    {
        id: 2,
        title: "Product 2",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg",
        description: "This is a description for product 2",
        tags: [3, 1, 2],
        author: {
            name: "John",
            surname: "Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png"
        },
        likes: 5
    },
    {
        id: 3,
        title: "Product 3",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg",
        description: "This is a description for product 2",
        tags: [1],
        author: {
            name: "John",
            surname: "Doe",
            avatar: "https://www.w3schools.com/howto/img_avatar.png"
        },
        likes: 2
    },
]
const tags = [
    {id: 1, name: "Cats",},
    {id: 2, name: "Dogs",},
    {id: 3, name: "Computers",},
]


export function ProductList() {
    const [searchValue, setSearchValue] = useState<string>("")
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedTag, setSelectedTag] = useState<"All" | number>("All")

    useEffect( () => {
        const foundPosts = posts.filter( post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        if (isNaN(+selectedTag)) {
            setFilteredPosts(foundPosts)
            return;
        }
        const newFilteredPosts = foundPosts.filter( post => {
            return post.tags.includes(+selectedTag)
        })
        setFilteredPosts(newFilteredPosts)

    }, [searchValue, selectedTag])
    return <div className={styles.postList}>
        <div className={styles.filtersBlock}>
            <div className={styles.searchBar}>
                <input 
                    value={searchValue} 
                    onChange={event => {
                        setSearchValue(event.target.value)
                    }} 
                    type="text"
                    placeholder="Find posts" />
                <SearchIcon className={styles.searchIcon}></SearchIcon>
            </div>
            <div className={styles.selectCategories}>
                
                <label><input
                    value={"All"}
                    type="radio"
                    onChange={event => {setSelectedTag("All")}}
                    checked={selectedTag === "All"}
                    />
                    All
                </label>
                {tags.map((tag) => {
                    return (
                        <label key={tag.id} className={styles.selectedCategory} >
                            <input
                                type="radio"
                                onChange={event => {
                                    setSelectedTag(tag.id)
                                }}
                                checked={selectedTag === tag.id}
                                />
                            {tag.name}
                        </label>
                    )
                })}
            </div>
        </div>
        <div className={styles.content}>
            {filteredPosts.map(post => 
                <PostCard 
                    title={post.title}
                    description={post.description}
                    author={post.author}
                    image={post.image}
                    tags={post.tags.map(tagId => {
                        const tag = tags.find(t => t.id === tagId)
                        return tag ? tag.name : ""
                    })}
                    likes={post.likes}
                ></PostCard>)}
        </div>
        
    </div>
}