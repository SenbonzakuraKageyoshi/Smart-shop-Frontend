import styles from './mobile-catalog.module.scss';
import Image from 'next/image';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';
import { useDispatch } from 'react-redux';
import CatalogMenu from '../CatalogMenu/CatalogMenu';

const MobileCatalog = () => {

  const dispatch = useDispatch();

  return (
    <div className={styles.mobileCatalogContent}>
        <header className={styles.popupHeader}>
            <div className={styles.popupTitle}>Каталог</div>
            <button className={styles.closePopupButton} onClick={() => dispatch(changeOpenedStatus({payload: {isOpened: false, componentName: null}}))}>
                <Image src="/images/svg/close-popup.svg" width={48} height={48} alt="close"/>
            </button>
        </header>
        <CatalogMenu />
    </div>
  )
}

export default MobileCatalog