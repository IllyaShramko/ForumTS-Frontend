export interface TagListProps {
    selectedTags: number[],
    setSelectedTags: (tags: number[]) => void,
    toggleTag: (id: number) => void
}