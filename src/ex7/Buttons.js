import { useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export const Buttons = () => {

    const [redBtnActive, setRedBtnActive] = useState(false);
    const [greenBtnActive, setGreenBtnActive] = useState(false);
    const [yellowBtnActive, setYellowBtnActive] = useState(false);
    const [brownBtnActive, setBrownBtnActive] = useState(false);
    const navigate = useNavigate();

    return (
    <div>
        <div className={classNames(styles.container, {
            [styles.greenButton]: greenBtnActive,
            [styles.redButton]: redBtnActive,
            [styles.yellowButton]: yellowBtnActive,
            [styles.brownButton]: brownBtnActive,
        })} />

        <button onClick={() => {
            navigate("./mouse-move", { replace: true});
        }}>Navigate to Mouse Move</button>

        <button onClick={() => {
            setRedBtnActive(!redBtnActive);
            setGreenBtnActive(false);
            setYellowBtnActive(false);
            setBrownBtnActive(false);
        }}>Button Red</button>
        <button onClick={() => {
            setGreenBtnActive(!greenBtnActive);
            setYellowBtnActive(false);
            setRedBtnActive(false);
            setBrownBtnActive(false);
        }}>Button Green</button>
        <button onClick={() => {
            setYellowBtnActive(!yellowBtnActive);
            setGreenBtnActive(false);
            setBrownBtnActive(false);
            setRedBtnActive(false);
        }}>Button Yellow</button>
        <button onClick={() => {
            setBrownBtnActive(!brownBtnActive);
            setGreenBtnActive(false);
            setRedBtnActive(false);
            setYellowBtnActive(false);
        }}>Button Brown</button>
    </div>
    );
};