import styles from './toolbar.module.scss';
import Image from 'next/image';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';
import { useDispatch } from 'react-redux';

const Toolbar = () => {

    const dispatch = useDispatch();

  return (
    <div className={styles.toolbarWrapper}>
        <div className={styles.toolbar}>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/home-icon.svg" alt="home" width={24} height={24}/>
            <span>Главная</span>
        </div>
        <div className={styles.toolbarItem} onClick={() => dispatch(changeOpenedStatus({payload: {isOpened: true, componentName: 'MobileCatalog'}}))}>
            <Image src="/images/svg/menu-icon.svg" alt="menu" width={24} height={24}/>
            <span>Каталог</span>
        </div>
        <div className={styles.toolbarItem}>
            <Image src="/images/svg/cart-icon.svg" alt="cart" width={24} height={24}/>
            <span>Корзина</span>
        </div>
        <div className={styles.toolbarItem} onClick={() => dispatch(changeOpenedStatus({payload: {isOpened: true, componentName: 'MobileNavigation'}}))}>
            <Image src="/images/svg/more-icon.svg" alt="more" width={24} height={24}/>
            <span>Еще</span>
        </div>
        </div>
    </div>
  )
}

export default Toolbar