import styles from './Header.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
            <h1 className={styles.title}>MovieAl</h1>
            </div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.item}>Home</li>
                    <li className={styles.item}>Tranding</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
