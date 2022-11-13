import styles from './favorites-products-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const ProductsCatalogList = ({products, contentLength}) => {
    
    const favorites = useSelector(state => state.favorites);
    const user = useSelector(state => state.user);

  return (
    <>
    {
    products && products.length
    ?
    user.data && user.status === 'fulfilled' && favorites.data && favorites.status === 'fulfilled'
    ?
    <ul className={styles.productsList}>
        {
        products.map(product => (
            Object.keys(favorites.data).length
            ?
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
            :
            <p>Нет избранных продуктов</p>
        ))
        }
    </ul>
    :
    !user.data && user.status === 'pending' || !favorites.data && favorites.status === 'pending'
    ?
    <p>wait</p>
    :
    !user.data && user.status === 'rejected' || !favorites.data && favorites.status === 'rejected'
    ?
    <p>Error</p>
    :
    <p>wait</p>
    :
    <p>Нет избранных продуктов</p>
    }
    </>
  )
}



export default ProductsCatalogList