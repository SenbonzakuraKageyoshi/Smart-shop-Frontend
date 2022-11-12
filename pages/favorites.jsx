import ProductsCatalogList from '../components/ProductsCatalogList/ProductsCatalogList';
import { myAxios } from '../utils/myAxios';
import getToken from '../service/service';

export async function getServerSideProps({query}) {
  const { data } = await myAxios.post(`/products/get-liked-products?UserId=${query.UserId}&page=${query.page}`, null, {headers: {
    Authorization: 'Bearer ' + query.authorization
}});

return {
  props: {favorites: data.likedProducts, contentLength: data.contentLength}
}
};

const favorites = ({favorites, contentLength}) => {
  return (
    <section className="favorites">
        <div className="container">
        <ProductsCatalogList products={favorites} contentLength={contentLength} isFavorites={true}/>
        </div>
    </section>
  )
}

export default favorites