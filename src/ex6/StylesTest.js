import styles from './styles.module.css';
import classNames from 'classnames';

export const StylesTest = () => {
    return <div className={classNames({
        [styles.Container]: true,
    })}>Test</div>
}