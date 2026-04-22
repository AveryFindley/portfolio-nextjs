import styles from "./navigation.module.css";

export default function Nav() {
    return (
        <div className={styles.nav}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/designs">Designs</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    )
}