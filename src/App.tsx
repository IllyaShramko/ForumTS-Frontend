import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import styles from "./css/app.module.css"

export function App() {
    return (
        <div className={styles.body}>   
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    )
}