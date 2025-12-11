import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/home/HomePage';
import { PostsPage } from './pages/posts/PostsPage';

export function App() {
    
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/posts' element={<PostsPage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}