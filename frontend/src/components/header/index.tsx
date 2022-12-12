import styles from "./header.module.scss";
import ThemeChanger from "../theme-changer";

function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_container__logo}>YouGIF</div>
            <ThemeChanger />
        </div>
    );
}

export default Header;
