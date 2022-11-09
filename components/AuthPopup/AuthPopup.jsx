import styles from './auth-popup.module.scss';
import AuthForm from '../AuthForm/AuthForm';

const AuthPopup = () => {

  return (
    <div className={styles.popup}>
        <div className={styles.popupContent}>
            <AuthForm />
        </div>
    </div>
  )
}

export default AuthPopup