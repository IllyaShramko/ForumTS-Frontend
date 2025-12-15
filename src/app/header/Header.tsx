import styles from "./header.module.css"
import { ICONS } from "../../shared/icons"
import { IMAGES } from "../../shared/images"
import { Link } from "react-router-dom"


export function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.iconDiv}>
                <ICONS.LogoIcon className={styles.icon}></ICONS.LogoIcon>
                <h1>ForumTS</h1>
            </a>
            <div className={styles.searchDiv}>
                <ICONS.SearchIcon></ICONS.SearchIcon>
                <input className={styles.searchBar} type="text" placeholder="Search..." />
            </div>
            <div className={styles.otherDiv}>
                <div className={styles.navLinks}>
                    <Link to="/" className={styles.link}>Головна</Link>
                    <Link to="/posts" className={styles.link}>Всі пости</Link>
                    <button className={styles.link}>+ Створити пост</button>
                </div>
                <div className={styles.userActions}>
                    <button>
                        <ICONS.ProfileIcon className={styles.userAvatar}></ICONS.ProfileIcon>
                    </button>
                    <button>
                        <img className={styles.languageImg} src={IMAGES.languageUa}/>
                    </button>
                </div>
            </div>
        </header>
    )
}