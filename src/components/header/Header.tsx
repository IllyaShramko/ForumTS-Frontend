import styles from "./header.module.css"
import logoSvg, { ReactComponent as LogoIcon } from '../../assets/svg/ts.svg'
import profileSvg, { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import languageUa from '../../assets/images/ua.png'
import { Link } from "react-router-dom"


export function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.iconDiv}>
                <LogoIcon className={styles.icon}></LogoIcon>
                <h1>ForumTS</h1>
            </a>
            <div className={styles.otherDiv}>
                <div className={styles.navLinks}>
                    <Link to="/" className={styles.link}>Головна</Link>
                    <Link to="/posts" className={styles.link}>Всі пости</Link>
                    <button className={styles.link}>+ Створити пост</button>
                </div>
                <div className={styles.userActions}>
                    <button>
                        <ProfileIcon className={styles.userAvatar}></ProfileIcon>
                    </button>
                    <button>
                        <img className={styles.languageImg} src={languageUa}/>
                    </button>
                </div>
            </div>
        </header>
    )
}