import FavoritesProductsList from '../components/FavoritesProductsList/FavoritesProductsList';
import { myAxios } from '../utils/myAxios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AuthProtect from '../components/AuthProtect/AuthProtect';
import Loader from '../components/Loader/Loader';

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
        {data ? <FavoritesProductsList products={data.likedProducts} contentLength={data.contentLength} /> : <Loader />}
        </div>
      </section>
    </AuthProtect>
  )
}

export default favorites