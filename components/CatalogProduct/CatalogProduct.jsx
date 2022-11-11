import styles from './catalog-product.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const CatalogProduct = ({id, name, category, price, imageSrc, isHit, isNew, isLiked}) => {
  return (
    <div className={styles.product}>
        <Image src={imageSrc} width={286} height={224} alt="product"/>
        <div className={styles.productInfo}>
            <h2 className={styles.productCatelogry}>{category}</h2>
            <h1 className={styles.productName}>{name}</h1>
            <div className={styles.productPrice}>
                <span className={styles.productPriceValue}>{price} ₽</span>
                <button className={isLiked ? styles.productAddToLikedActive : styles.productAddToLiked}>
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

export default CatalogProduct