import styles from './favorites-products-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

const ProductsCatalogList = ({products, contentLength}) => {
    
  const favorites = useSelector(state => state.favorites);
  const user = useSelector(state => state.user);

  return (
    <>
    {
    products && products.length
    ?
    user.data && user.status === 'fulfilled' && favorites.data && favorites.status === 'fulfilled'
    ||
    !user.data && user.status === 'rejected' && !favorites.data && favorites.status === 'rejected'
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
    <Loader />
    :
    user.data && user.status === 'fulfilled' && !favorites.data && favorites.status === 'rejected'
    ?
    <p>Error</p>
    :
    <Loader />
    :
    <p>Нет избранных продуктов</p>
    }
    </>
  )
}

export default ProductsCatalogList