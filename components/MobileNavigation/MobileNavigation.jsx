import styles from './mobile-navigation.module.scss';
import Image from 'next/image';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';
import { useDispatch } from 'react-redux';

const MobileNavigation = () => {

    const dispatch = useDispatch();

  return (
    <div className={styles.mobileNavigationContent}>
        <div className={styles.mobileCatalogContent}>
        <header className={styles.popupHeader}>
            <div className={styles.popupTitle}>Еще</div>
            <button className={styles.closePopupButton} onClick={() => dispatch(changeOpenedStatus({payload: {isOpened: false, componentName: null}}))}>
                <Image src="/images/svg/close-popup.svg" width={48} height={48} alt="close"/>
            </button>
        </header>
    </div>
    </div>
  )
}

export default MobileNavigation