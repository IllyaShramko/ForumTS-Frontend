import styles from "./footer.module.css"
export function Footer() {
    return (
        <footer className={styles.footer}>
            <h5>Посилання:</h5>
            <div>
                <a href="https://github.com/">GitHub (Open Source)</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://discord.com/">Discord</a>
            </div>
        </footer>
    )
}