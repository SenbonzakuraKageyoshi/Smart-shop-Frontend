import styles from './mobile-navigation.module.scss';
import Image from 'next/image';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import Link from 'next/link';

const MobileNavigation = () => {

    const dispatch = useDispatch();

    const navigationItems = useMemo(() => {
      return [
        {id: 0, name: 'О компании', href: '/asd'},
        {id: 1, name: 'Акции', href: '/asd'},
        {id: 2, name: 'Рассрочка 0|0|18', href: '/asd'},
        {id: 3, name: 'Сервис и гарантия', href: '/asd'},
        {id: 4, name: 'Опт/дропшиппинг', href: '/asd'},
        {id: 5, name: 'Контакты', href: '/asd'},
      ];
    }, []);

  return (
    <div className={styles.mobileNavigationContent}>
        <div className={styles.mobileCatalogContent}>
        <header className={styles.popupHeader}>
            <div className={styles.popupTitle}>Еще</div>
            <button className={styles.closePopupButton} onClick={() => dispatch(changeOpenedStatus({payload: {isOpened: false, componentName: null}}))}>
                <Image src="/images/svg/close-popup.svg" width={48} height={48} alt="close"/>
            </button>
        </header>
        <nav className={styles.headerBottomNav}>
            <ul className={styles.headerBottomNavMenuList}>
                {navigationItems.map((item) => (
                  <li className={styles.headerBottomNavMenuListItem} key={item.id}>
                    <Link href={item.href} legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>{item.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default MobileNavigation