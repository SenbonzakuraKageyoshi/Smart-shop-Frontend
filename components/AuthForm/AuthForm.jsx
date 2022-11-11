import styles from './auth-form.module.scss';
import { useForm } from 'react-hook-form';
import { useMemo, useState, useCallback } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';
import { fetchLogin, fetchRegister } from '../../redux/user/userSlice';
import { saveToken } from '../../service/service';

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true);

    const dispatch = useDispatch();
    
    const inputs = useMemo(() => {
        return [
            {id: 1, label: 'Имя', name: 'userName', maxLength: {value: 16, message: 'Имя не должно быть более 16-ти символов'}, minLength: {value: 2, message: 'Имя не должно быть менее 2-х символов'}},
            {id: 2, label: 'Эл. почта', name: 'userEmail', maxLength: {value: null, message: null}, minLength: {value: null, message: null}},
            {id: 3, label: 'Номер телефона', name: 'userNumber', maxLength: {value: 11, message: 'Телефон должен содержать не более 11-ти символов'}, minLength: {value: 11, message: 'Телефон должен содержать не менее 11-ти символов'}},
            {id: 4, label: 'Пароль', name: 'userPassword', maxLength: {value: null, message: null}, minLength: {value: 5, message: 'Пароль должен содержать не менее 6-ти символов'}},
        ];
    }, []);

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'all' });

    const onSubmitHandler = useCallback((data) => {
        if(isLogin){
            dispatch(fetchLogin(data)).then(({payload}) => {
                saveToken(payload.token);
                dispatch(changeOpenedStatus());
            });
        }else{
            dispatch(fetchRegister(data)).then(({payload}) => {
                saveToken(payload.token);
                dispatch(changeOpenedStatus());
            });
        }
    }, [])

  return (
    <>
    <div className={styles.popupContent}>
        <header className={styles.popupHeader}>
            <div className={styles.popupTitle}>{isLogin ? 'Вход' : 'Регистрация'}</div>
            <button className={styles.closePopupButton} onClick={() => dispatch(changeOpenedStatus())}>
                <Image src="/images/svg/close-popup.svg" width={48} height={48} alt="close"/>
            </button>
        </header>
        <div className={styles.popupMain}>
            <form className="authForm" onSubmit={handleSubmit(onSubmitHandler)}>
                {
                isLogin
                ?
                <>
                <div className={styles.authFormItem}>
                    <label className={styles.authFormItemLabel}>{inputs[1].label}</label>
                    <input type="text" className={styles.authFormInput} name={inputs[1].name} {...register(`${inputs[1].name}`, {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: inputs[1].maxLength, minLength: inputs[1].minLength})}/>
                    <div className={styles.errorMessage}>{errors[inputs[1].name] && <p>{errors[inputs[1].name].message}</p>}</div>
                </div>
                <div className={styles.authFormItem}>
                    <label className={styles.authFormItemLabel}>{inputs[3].label}</label>
                    <input type="text" className={styles.authFormInput} name={inputs[3].name} {...register(`${inputs[3].name}`, {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: inputs[3].maxLength, minLength: inputs[3].minLength})}/>
                    <div className={styles.errorMessage}>{errors[inputs[3].name] && <p>{errors[inputs[3].name].message}</p>}</div>
                </div>
                </>
                :
                inputs.map((input) => (
                    <div className={styles.authFormItem} key={input.id}>
                        <label className={styles.authFormItemLabel}>{input.label}</label>
                        <input type="text" className={styles.authFormInput} name={input.name} {...register(`${input.name}`, {required: {value: true, message: 'Поле обязательно к заполнению'}, maxLength: input.maxLength, minLength: input.minLength})}/>
                    <div className={styles.errorMessage}>{errors[input.name] && <p>{errors[input.name].message}</p>}</div>
                </div>
                ))
                }
                <button className={styles.authFormButton}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
            </form>
            <div className={styles.formTypeSwitcher} onClick={() => setIsLogin(prev => !prev)}>{isLogin ? 'Зарегистрироваться' : 'Войти'}</div>
        </div>
    </div>
    </>
  )
}

export default AuthForm