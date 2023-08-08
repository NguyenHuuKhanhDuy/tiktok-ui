import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/5e37ff4da73ba2fad83dd7728cfee477~c5_300x300.webp?x-expires=1691632800&x-signature=50Y1YG79%2FBuNcVyWMdFjPyMy1zU%3D"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Huu Khanh Duy</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>kkduy1707</span>
            </div>
        </div>
    );
}

export default AccountItem;
