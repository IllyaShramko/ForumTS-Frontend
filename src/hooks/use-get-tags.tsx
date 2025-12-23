import { useEffect, useState } from "react"
import { Tag } from "../shared/types"

interface UseGetTags{
    isLoading: boolean
    tags: Tag[]
    error: string | null
}

export function useGetTags(): UseGetTags {
    const [tags, setTags] = useState<Tag[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        async function getTags() {
            try {
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
                setIsLoading(false)
            }
        }
        getTags()
    }, [])

    return { isLoading, tags, error }
}