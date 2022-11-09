import styles from './header.module.scss';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';

const Header = React.memo(() => {

  const [catalogOpened, setCatalogOpened] = useState(false);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="container">
        <div className={styles.headerTopContent}>
          <div className={styles.headerTopMain}>
            <Link href="/">
              <div className="logo">
                <Image src="/images/svg/logo.svg" width={184} height={60} alt="logo"/>
              </div>
            </Link>
            <div className={styles.headerContacts}>
              <Link href="tel:78126605054" legacyBehavior>
                <a className={styles.telephone}>+7 (812) 660-50-54</a>
              </Link>
              <Link href="tel:79581119503" legacyBehavior>
                <a className={styles.telephone}>+7 (958) 111-95-03</a>
              </Link>
              <div className={styles.workingTime}>Пн-вс: с 10:00 до 21:00</div>
            </div>
          </div>
          {
          !user.data && !user.status
          ?
          <div className={styles.headerTopActions}>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/favorites.svg" width={20} height={18} alt="favorites"/>
            </div>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/cart.svg" width={21} height={20} alt="cart"/>
            </div>
            <div className={styles.authButton} onClick={() => dispatch(changeOpenedStatus())}>Войти</div>
          </div>
          :
          !user.data && user.status === 'fulfilled'
          ?
          <div className={styles.headerTopActions}>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/favorites.svg" width={20} height={18} alt="favorites"/>
            </div>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/cart.svg" width={21} height={20} alt="cart"/>
            </div>
            <div className={styles.authButton} onClick={() => dispatch(changeOpenedStatus())}>Войти</div>
          </div>
          :
          !user.data && user.status === 'rejected'
          ?
          <div className={styles.headerTopActions}>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/favorites.svg" width={20} height={18} alt="favorites"/>
            </div>
            <div className={styles.headerTopActionsItem} onClick={() => dispatch(changeOpenedStatus())}>
              <Image src="/images/svg/cart.svg" width={21} height={20} alt="cart"/>
            </div>
            <div className={styles.authButton} onClick={() => dispatch(changeOpenedStatus())}>Войти</div>
          </div>
          :
          !user.data && user.status === 'pending' 
          ?
          <div className={styles.authButton}>Загрузка</div>
          :
          user.data && user.status === 'fulfilled'
          ?
          <div className={styles.headerTopActions}>
            <Link href="/favorites">
              <div className={styles.headerTopActionsItem}>
                <Image src="/images/svg/favorites.svg" width={20} height={18} alt="favorites"/>
              </div>
            </Link>
            <Link href="/cart">
              <div className={styles.headerTopActionsItem}>
                <Image src="/images/svg/cart.svg" width={21} height={20} alt="cart"/>
              </div>
            </Link>
            <Link href="/profile">
              <div className={styles.headerTopActionsItem}>
                <Image src="/images/svg/profile.svg" width={21} height={20} alt="cart"/>
              </div>
            </Link>
          </div>
          :
          null
          }
        </div>
      </div>
      <div className={styles.headerBottom}>
          <div className="container">
            <div className={styles.headerBottomContent}>
              <div className={catalogOpened ? styles.catalogButtonActive : styles.catalogButton} onClick={() => setCatalogOpened(prev => !prev)}>
                <Image src="/images/svg/catalog-icon.svg" width={32} height={32} alt="catalog-icon"/>
                <span>Каталог товаров</span>
              </div>
              <nav className={styles.headerBottomNav}>
                <ul className={styles.headerBottomNavMenuList}>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>О компании</a>
                    </Link>
                  </li>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>Акции</a>
                    </Link>
                  </li>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>Рассрочка 0|0|18</a>
                    </Link>
                  </li>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>Сервис и гарантия</a>
                    </Link>
                  </li>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>Опт/дропшиппинг</a>
                    </Link>
                  </li>
                  <li className={styles.headerBottomNavMenuListItem}>
                    <Link href="/asd" legacyBehavior>
                      <a className={styles.headerBottomNavMenuListLink}>Контакты</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              {catalogOpened ? <CatalogMenu /> : null}
            </div>
          </div>
      </div>
    </div>
  )
});

export default Header