import Link from 'next/link'

import styles from '../styles/header.module.scss';

const Header = () => {
    return (
        <div className={styles.headers}>
            <p className={styles.title}>MY ACTIVITIES</p>
        </div>
    )
}

export default Header;