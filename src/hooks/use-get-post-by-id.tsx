import { useState, useEffect } from "react"
import { Post } from "../shared/types"
import { API_URL } from "../shared/api"


interface UseGetPostByIdParams{
    id: number
}

interface UseGetPostByIdContract{
    post: Post | null
    isLoading: boolean
    error:  string | null
}
export function useGetPostById({id}: UseGetPostByIdParams): UseGetPostByIdContract {
    const [isLoading, setIsLoading] = useState<boolean>(false)  
    const [error, setError] = useState<string | null>(null)
    const [post, setPost] = useState<null | Post>(null)
    

    async function getPostById({id}: UseGetPostByIdParams) {
        try {
            const response = await fetch(`${API_URL}/posts/${id}`) 
            if(response.ok){
                const data: Post  = await response.json()
                setPost(data)
            } else{
                if (response.status === 404){
                    setPost(null)
                }
            }
            setIsLoading(true)
        } catch (error) {
            console.error(error)
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(isNaN(id)){
            return
        }
        getPostById({id})
    }, [id])

    return {
        isLoading, error, post
    }
    
}