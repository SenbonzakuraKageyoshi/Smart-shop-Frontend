import styles from './products-catalog-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProductsCatalogList = ({listName, products}) => {

    const favorites = useSelector(state => state.favorites);

  return (
    <>
    {
    favorites.data && favorites.status === "fulfilled" || !favorites.data && favorites.status === "fulfilled"
    ?
    <>
    <div className={styles.listInfo}>
        <h1 className={styles.listInfoName}>{listName}</h1>
        <Link href="/catalog" legacyBehavior>
            <a className={styles.listLink}>
                <span>Все товары</span>
                <Image src="/images/svg/list-link.svg" width={13} height={8} alt="list-link"/>
            </a>
        </Link>
    </div>
    <ul className={styles.productsList}>
        {products.map(product => (
            <CatalogProduct 
            key={product.id}
            id={product.id} 
            name={product.productName} 
            category={product.productCategory} 
            price={product.productPrice} 
            imageSrc={product.imageSrc}
            isHit={product.isHit}
            isNew={product.isNew}
            isLiked={favorites.data[product.id]}
            />
        ))}
    </ul>
    </>
    :
    favorites.data && favorites.status === "rejected" || !favorites.data && favorites.status === "rejected"
    ?
    <p>error</p>
    :
    <p>загрузка</p>
    }
    </>
  )
}

export default ProductsCatalogList