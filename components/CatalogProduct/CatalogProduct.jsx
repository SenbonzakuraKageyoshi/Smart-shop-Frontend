import React from 'react';
import styles from './catalog-product.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../service/service';
import { removeFavorite, addFavorite } from '../../redux/favorites/favoritesSlice';
import { changeOpenedStatus } from '../../redux/popup/popupSlice';

const CatalogProduct = React.memo(({id, name, category, price, imageSrc, isHit, isNew, isLiked, UserId}) => {

    const dispatch = useDispatch();

    const onFavoriteHandler = () => {
        if(isLiked && UserId){
            removeFromFavorite({ProductId: id, UserId}).then(() => dispatch(removeFavorite(id)));
        }else if(!isLiked && UserId){
            addToFavorite({ProductId: id, UserId}).then(() => dispatch(addFavorite(id)));
        }else if(!isLiked && !UserId){
            dispatch(changeOpenedStatus())
        }
    }

    return (
        <div className={styles.product}>
            <Image src={imageSrc} width={286} height={224} alt="product"/>
            <div className={styles.productInfo}>
                <h2 className={styles.productCatelogry}>{category}</h2>
                <h1 className={styles.productName}>{name}</h1>
                <div className={styles.productPrice}>
                    <span className={styles.productPriceValue}>{price} ₽</span>
                    <button className={isLiked ? styles.productAddToLikedActive : styles.productAddToLiked} onClick={onFavoriteHandler}>
                        <Image src="/images/svg/add-to-favorite.svg" width={20} height={18} alt="favorite"/>
                    </button>
                </div>
                <div className={styles.productActions}>
                    <button className={styles.productBuy}>Купить в 1 клик</button>
                    <button className={styles.productAddToCart}>
                        <Image src="/images/svg/add-to-cart.svg" width={21} height={40} alt="cart"/>
                    </button>
                </div>
            </div>
        </div>
      )
    }
);

export default CatalogProduct