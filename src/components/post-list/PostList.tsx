import { PostCard } from "./post-card/PostCard";
import styles from './post-list.module.css';
import { ICONS } from "../../shared/icons";
import { useEffect, useState } from "react";

const posts = [
    {
        id: 1,
        title: "Product 1",
        image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
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
    {
        id: 4,
        title: "Sunset Over the Hills",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=3000",
        description: "A warm sunset falling behind quiet green hills. This moment captures the soft colors of evening light and the peaceful atmosphere you feel when nature slowly prepares to fall asleep.",
        tags: [4],
        author: {
            name: "Emily",
            surname: "Stone",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        likes: 18
    },
    {
        id: 5,
        title: "Street Food Delight",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=3000",
        description: "A vibrant street food dish full of flavors, spices, and fresh ingredients. The aroma alone makes you want to try it, and the mix of textures creates the perfect balance between crispy and tender.",
        tags: [5],
        author: {
            name: "Carlos",
            surname: "Mendoza",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        likes: 27
    },
    {
        id: 6,
        title: "Futuristic Workspace",
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=3000",
        description: "A clean and minimalistic workstation featuring modern technology and ergonomic design. Perfect for developers, designers, and anyone who enjoys working in a calm, well-organized environment.",
        tags: [6, 3],
        author: {
            name: "Sophie",
            surname: "Nguyen",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        likes: 40
    },
    {
        id: 7,
        title: "Color Splash Abstract",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=3000",
        description: "A bold and expressive abstract artwork created with dynamic brush strokes and bright color splashes. It reflects emotion, movement, and a sense of freedom in every layered detail.",
        tags: [7],
        author: {
            name: "Liam",
            surname: "Harris",
            avatar: "https://randomuser.me/api/portraits/men/61.jpg"
        },
        likes: 12
    }
]
const tags = [
    {id: 1, name: "Cats"},
    {id: 2, name: "Dogs"},
    {id: 3, name: "Computers"},
    {id: 4, name: "Nature"},
    {id: 5, name: "Food"},
    {id: 6, name: "Tech"},
    {id: 7, name: "Art"},
];



export function PostList() {
    const [searchValue, setSearchValue] = useState<string>("")
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    
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
            post.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (selectedTags.length > 0) {
            foundPosts = foundPosts.filter(post =>
                post.tags.some(tagId => selectedTags.includes(tagId))
            );
        }

        setFilteredPosts(foundPosts);
    }, [searchValue, selectedTags]);

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
            <div className={styles.selectCategories}>
                <label>
                    <input
                        type="checkbox"
                        checked={selectedTags.length === 0}
                        onChange={() => setSelectedTags([])}
                    />
                    All
                </label>
                {tags.map(tag => (
                    <label key={tag.id}>
                        <input
                            type="checkbox"
                            checked={selectedTags.includes(tag.id)}
                            onChange={() => toggleTag(tag.id)}
                        />
                        {tag.name}
                    </label>
                ))}

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