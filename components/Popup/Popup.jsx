import styles from './popup.module.scss';
import AuthForm from '../AuthForm/AuthForm';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import MobileCatalog from '../MobileCatalog/MobileCatalog';

const Popup = ({componentName}) => {
  return (
    <div className={styles.popup}>
      {
      componentName === 'AuthForm'
      ?
      <AuthForm />
      :
      componentName === 'MobileNavigation'
      ?
      <MobileNavigation />
      :
      componentName === 'MobileCatalog'
      ?
      <MobileCatalog />
      :
      null
      }
    </div>
  )
}

export default Popup