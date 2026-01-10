import { useState, useEffect } from 'react';
import { Comment } from '../shared/types';
import { API_URL } from '../shared/api';

interface UseGetCommentsByPostIdParams {
    postId: number;
}
interface UseGetCommentsByPostIdContract {
    comments: Comment[] | null;
    isLoading: boolean;
    error: string | null;
}
export function useGetCommentsByPostId({ postId }: UseGetCommentsByPostIdParams): UseGetCommentsByPostIdContract {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [comments, setComments] = useState<Comment[] | null>(null);
    // async function getCommentsByPostId({ postId }: UseGetCommentsByPostIdParams) {
    //     try {
    //         const response = await fetch(`${API_URL}/posts/${postId}/comments`);
    //         if (response.ok) {
    //             const data: Comment[] = await response.json();
    //             setComments(data);
    //         } else {
    //             if (response.status === 404) {
    //                 setComments(null);
    //             }
    //         }
    //         setIsLoading(true);
    //     } catch (error) {
    //         console.error(error);
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         }
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     if (isNaN(postId)) {
    //         return;
    //     }
    //     getCommentsByPostId({ postId });
    // }, [postId]);
    return {
        isLoading,
        error,
        comments,
    };
}