
import styles from "./css/header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.iconDiv}>
                <img className="icon" src="images/ts.svg" alt="ForumTS Icon" />
                <h1>ForumTS</h1>
            </div>
            <div className={styles.searchDiv}>
                <img src="images/search.svg" alt="Search Icon"/>
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
                        <img className={styles.userAvatar} src="images/profile.svg" alt="User Avatar" />
                    </button>
                    <button>
                        <img className={styles.languageImg} src="images/ua.png"/>
                    </button>
                </div>
            </div>
        </header>
    )
}