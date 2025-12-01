import styles from "./header.module.css"
import logoSvg, { ReactComponent as LogoIcon } from '../../assets/svg/ts.svg'
import searchSvg, { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import profileSvg, { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import languageUa from '../../assets/images/ua.png'


export function Header() {
    return (
        <header className={styles.header}>
            <a href="/" className={styles.iconDiv}>
                <LogoIcon className={styles.icon}></LogoIcon>
                <h1>ForumTS</h1>
            </a>
            <div className={styles.searchDiv}>
                <SearchIcon ></SearchIcon>
                <input className={styles.searchBar} type="text" placeholder="Search..." />
                <button className={styles.seacrhBtn}>{">"}</button>
            </div>
            <div className={styles.otherDiv}>
                <div className={styles.navLinks}>
                    <a href="#" className={styles.link}>Головна</a>
                    <a href="#" className={styles.link}>Всі пости</a>
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