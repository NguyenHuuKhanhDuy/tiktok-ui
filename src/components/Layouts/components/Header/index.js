import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '~/components/Layouts/components/Search';
import routes from '~/config/routes';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                },
                {
                    code: 'fr',
                    title: 'Français',
                    type: 'language',
                },
                {
                    code: 'es',
                    title: 'Español',
                    type: 'language',
                },
                {
                    code: 'de',
                    title: 'Deutsch',
                    type: 'language',
                },
                {
                    code: 'it',
                    title: 'Italiano',
                    type: 'language',
                },
                {
                    code: 'ja',
                    title: '日本語',
                    type: 'language',
                },
                {
                    code: 'ko',
                    title: '한국어',
                    type: 'language',
                },
                {
                    code: 'ru',
                    title: 'Русский',
                    type: 'language',
                },
                {
                    code: 'ar',
                    title: 'العربية',
                    type: 'language',
                },
                {
                    code: 'zh',
                    title: '中文 (简体)',
                    type: 'language',
                },
                {
                    code: 'nl',
                    title: 'Nederlands',
                    type: 'language',
                },
                {
                    code: 'pt',
                    title: 'Português',
                    type: 'language',
                },
                {
                    code: 'tr',
                    title: 'Türkçe',
                    type: 'language',
                },
                {
                    code: 'pl',
                    title: 'Polski',
                    type: 'language',
                },
                {
                    code: 'sv',
                    title: 'Svenska',
                    type: 'language',
                },
                {
                    code: 'fi',
                    title: 'Suomi',
                    type: 'language',
                },
                {
                    code: 'da',
                    title: 'Dansk',
                    type: 'language',
                },
                {
                    code: 'nb',
                    title: 'Norsk',
                    type: 'language',
                },
                {
                    code: 'hu',
                    title: 'Magyar',
                    type: 'language',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keybroad shortcut',
    },
];
function Header() {
    const currentUser = 1;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@thuytien',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    //HandleLogic
    const handleMenuChange = (MenuItem) => {};

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo')} to={routes.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
