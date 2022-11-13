import ProductsCatalogList from '../components/ProductsCatalogList/ProductsCatalogList';
import { myAxios } from '../utils/myAxios';
import { getToken } from '../service/service';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthProtect from '../components/AuthProtect/AuthProtect';

const favorites = () => {

  const user = useSelector(state => state.user)

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await myAxios.post(`/products/get-liked-products?&page=1`, {UserId: user.data.id}, {headers: {
        Authorization: 'Bearer ' + user.data.token
      }}).then(({data}) => setData(data))
    };

    if(user.data){
      fetchFavorites();
    }
  }, [user.data])

  return (
    <AuthProtect>
      <section className="favorites">
        <div className="container">
        {data ? <ProductsCatalogList products={data.likedProducts} contentLength={data.contentLength} isFavorites={true}/> : <p>wait</p>}
        </div>
      </section>
    </AuthProtect>
  )
}

export default favorites