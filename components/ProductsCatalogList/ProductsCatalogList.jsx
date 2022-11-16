import styles from './products-catalog-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const ProductsCatalogList = ({listName, products, contentLength}) => {

    const favorites = useSelector(state => state.favorites);
    const user = useSelector(state => state.user);

    console.log(user)

  return (
    <>
    <div className={styles.listInfo}>
        {
        listName
        ? 
        <>
        <h1 className={styles.listInfoName}>{listName}</h1>
        <Link href="/catalog" legacyBehavior>
            <a className={styles.listLink}>
                <span>Все товары</span>
                <Image src="/images/svg/list-link.svg" width={13} height={8} alt="list-link"/>
            </a>
        </Link>
        </>
        :
        null
        }
    </div>
    {
    products
    ?
    !user.data && user.status === 'pending' || !favorites.data && favorites.status === 'pending'
    ?
    <Loader />
    :
    user.data && user.status === 'fulfilled' && favorites.data && favorites.status === 'fulfilled'
    ||
    !user.data && user.status === 'rejected' && !favorites.data && favorites.status === 'rejected'
    ?
    <ul className={styles.productsList}>
        {
        products.map(product => (
            <CatalogProduct 
            key={product.id}
            id={product.id} 
            name={product.productName} 
            category={product.productCategory} 
            price={product.productPrice} 
            imageSrc={product.imageSrc}
            isHit={product.isHit}
            isNew={product.isNew}
            isLiked={favorites.data && Object.keys(favorites.data).length ? favorites.data[product.id] : false}
            UserId={user.data ? user.data.id : null}
            />
        ))
        }
    </ul>
    :
    !user.data && user.status === 'pending' || !favorites.data && favorites.status === 'pending'
    ?
    <Loader />
    :
    user.data && user.status === 'fulfilled' && !favorites.data && favorites.status === 'rejected'
    ?
    <p>Error</p>
    :
    <Loader />
    :
    <p>Продукты не найдены</p>
    }
    </>
  )
}

export default ProductsCatalogList