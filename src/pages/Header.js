import styles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png';
import heart from '../../public/icons/heart.png';
import search from '../../public/icons/search-normal.png';
import shopping from '../../public/icons/shopping-bag.png';
import menuIcon from '../../public/icons/menu.png';
import closeIcon from '../../public/icons/close.png';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.topStrip}>
                <span>Lorem ipsum dolor</span>
            </div>

            <div className={styles.navbar}>
                <div
                    className={styles.hamburgerMenu}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Image
                        src={isMenuOpen ? closeIcon : menuIcon}
                        alt="menu"
                        width={24}
                        height={24}
                    />
                </div>

                <div className={styles.logo}>
                    <Image src={logo} alt="Logo" width={36} height={36} />
                </div>
                <h1 className={styles.logoText}>LOGO</h1>

                <div className={styles.icons}>
                    <Image src={search} alt="search" width={15} height={15} />
                    <Image src={heart} alt="heart" width={15} height={15} />
                    <Image src={shopping} alt="cart" width={15} height={15} />
                </div>
            </div>

            <div className={isMenuOpen ? styles.navbarMenu2 : styles.navbarMenu}>
                <nav className={styles.navLinks}>
                    <a href="#">SHOP</a>
                    <a href="#">SKILLS</a>
                    <a href="#">STORIES</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT US</a>
                </nav>
            </div>
        </header>
    );
}