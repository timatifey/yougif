import {useTheme} from 'next-themes'
import styles from "./theme-changer.module.scss";

const ThemeChanger = () => {
    const {theme, setTheme} = useTheme();

    function handleToggle() {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <div>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    onChange={handleToggle}
                />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}

export default ThemeChanger;
