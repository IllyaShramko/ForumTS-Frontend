import { useEffect, useState } from 'react'
import styles from './tags-list.module.css'
import { TagListProps } from './tags.types'
import { Tag } from '../../shared/types'
import { data } from 'react-router-dom'


export function SelectTags({selectedTags, setSelectedTags, toggleTag}: TagListProps){
    const [tags, setTags] = useState<Tag[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    console.log("Selected Tags:", selectedTags)
    useEffect(() => {
        async function getTags() {
            try {
                setLoading(true)
                console.log("Fetching tags...")
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
            } finally {
                setLoading(false)
            }
        }
        getTags()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <p>{error}</p>
    }
    
    return (
        <div className={styles.selectTags}>
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
    )
}