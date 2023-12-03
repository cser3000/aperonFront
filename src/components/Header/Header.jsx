import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h2>
                    Апейрон
                </h2>
            </div>
            <div className={styles.checkbox}>
                <label>
                    <input type="checkbox"/>
                    <span>смена темы</span>
                </label>
            </div>
        </header>
    )
}

export default Header