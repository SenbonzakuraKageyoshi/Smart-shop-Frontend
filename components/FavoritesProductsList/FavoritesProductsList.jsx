import styles from './favorites-products-list.module.scss';
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import PaginationButton from '../PaginationButton/PaginationButton';
import { myAxios } from '../../utils/myAxios';

const ProductsCatalogList = () => {

  const favorites = useSelector(state => state.favorites);
  const user = useSelector(state => state.user);

  const [favoriteProducts, setFavoriteProducts] = useState(null);
  const [contentLength, setContentLength] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await myAxios.post(`/products/get-liked-products?&page=${page}`, {UserId: user.data.id}, {headers: {
        Authorization: 'Bearer ' + user.data.token
      }}).then(({data}) => {
        if(favoriteProducts){
          setFavoriteProducts(prev => [...prev, ...data.likedProducts]);
        }else{
          setFavoriteProducts(data.likedProducts);
        }
        setIsLoaded(true);
        setContentLength(data.contentLength);
      })
    };

    if(user.data){
      fetchFavorites();
    }
  }, [user.data, page])

  return (
    <section className="favoritesProducts">
      <h1 className={styles.listInfoName}>Избранное</h1>
      {
      favoriteProducts && favoriteProducts.length && isLoaded
      ?
      user.data && user.status === 'fulfilled' && favorites.data && favorites.status === 'fulfilled'
      ||
      !user.data && user.status === 'rejected' && !favorites.data && favorites.status === 'rejected'
      ?
      <>
      <ul className={styles.productsList}>
          {
          favoriteProducts.map(product => (
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
      {page !== contentLength ? <PaginationButton page={page} contentLength={contentLength} setPage={setPage} setIsLoaded={setIsLoaded}/> : null}
      </>
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
      !favoriteProducts && isLoaded
      ?
      <p>Нет избранных продуктов</p>
      :
      null
      }
    </section>
  )
}

export default ProductsCatalogList