import { ReactNode } from 'react';
import styles from './css/style.module.scss';

type ButtonProps = {
    children: ReactNode;
    type: "button" | "submit" | "reset" | undefined ;
    onClickFunc: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, type, onClickFunc } = props;
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClickFunc}
        >
            {children}
        </button>

    )
}