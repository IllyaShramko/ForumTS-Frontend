import styles from './tags-list.module.css'
import { TagListProps } from './tags.types'
import { useGetTags } from '../../hooks'

export function SelectTags({selectedTags, setSelectedTags, toggleTag}: TagListProps){
    const { tags, isLoading, error } = useGetTags()
    if (isLoading) {
        return <div>Loading tags...</div>
    }
    if (error) {
        return <div>Error to fetch tags</div>
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