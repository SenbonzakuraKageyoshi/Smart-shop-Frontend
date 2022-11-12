import styles from './products-catalog-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProductsCatalogList = ({listName, products, contentLength, isFavorites}) => {
    const favorites = useSelector(state => state.favorites);
    const user = useSelector(state => state.user);


  return (
    <>
    {
    favorites.data && favorites.status === "fulfilled" 
    && 
    user.data && user.status === "fulfilled"
    ||
    !favorites.data && favorites.status === "fulfilled"
    &&
    !user.data && user.status === "fulfilled"
    ?
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
    <ul className={styles.productsList}>
        {
        products && products.length
        ?
        isFavorites
        ?
        Object.keys(favorites.data).length
        ?
        products.map(product => (
            favorites.data[product.ProductId]
            ?
            <CatalogProduct 
            key={product.ProductId}
            id={product.ProductId} 
            name={product.Product.productName} 
            category={product.Product.productCategory} 
            price={product.Product.productPrice} 
            imageSrc={product.Product.imageSrc}
            isHit={product.Product.isHit}
            isNew={product.Product.isNew}
            isLiked={favorites.data[product.ProductId]}
            UserId={user.data.id}
            />
            :
            null
        ))
        :
        <p>Нет избранных продуктов</p>
        :
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
            isLiked={favorites.data[product.id]}
            UserId={user.data.id}
            />
        ))
        :
        !products.length || !Object.keys(favorites.data).length
        ?
        isFavorites ? <p>Нет избранных продуктов</p> : <p>Продукты не найдены</p>
        :
        !products
        ?
        <p>Нет данных</p>
        :
        null
        }
    </ul>
    </>
    :
    favorites.data && favorites.status === "rejected"
    &&
    user.data && user.status === "rejected"
    ||
    !favorites.data && favorites.status === "rejected"
    &&
    !user.data && user.status === "rejected"
    ?
    <p>error</p>
    :
    <p>загрузка</p>
    }
    </>
  )
}

export default ProductsCatalogList