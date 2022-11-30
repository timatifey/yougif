import {ChangeEvent, FormEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {setLink} from "../../app/form-data/formDataSlice";
import styles from "./link-form.module.scss";
import {incrementStage} from "../../app/stage/stageSlise";

function LinkForm() {
    const [value, setValue] = useState<string>('Ссылка на видео Youtube');
    const dispatch = useDispatch();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue((e.target as HTMLInputElement).value);
    }

    function handleSubmit(e: FormEvent) {
        if (value) {
            dispatch(setLink(value));
            dispatch(incrementStage());
            e.preventDefault();
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.form__label}>
                1. Вставьте ссылку на YouTube видео:
                <input className={styles.form__input} type="text" value={value} onChange={handleChange}/>
            </label>
            <button className={styles.form__button}
                    type="button"
                    onSubmit={handleSubmit}
                    onClick={handleSubmit}>
                Супер
            </button>
        </form>
    );
}

export default LinkForm;
