import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from '../pages/home/HomePage';
import { PostsPage } from '../pages/posts/PostsPage';

export function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/posts' element={<PostsPage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}