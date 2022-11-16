import Header from "../Header/Header";
import Head from "next/head";
import AuthPopup from "../AuthPopup/AuthPopup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "../../redux/user/userSlice";
import { getToken } from "../../service/service";
import { fetchFavorites } from "../../redux/favorites/favoritesSlice";
import { setFavoritesError } from "../../redux/favorites/favoritesSlice";
import { setUserError } from "../../redux/user/userSlice";

const Layout = ({children}) => {

  const { isOpened } = useSelector(state => state.popup);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(!user.data && user.status !== 'fulfilled' && getToken()){
        // Если нет данных и статус завершен, но есть токен,
        // то попытайся получить данные о юзере, в случае успеха получи данные о лайках,
        // если безуспешно, то установи статус ошибки для юзера и лайков,
        // это будет говорить о том, что юзер пытался войти, но что-то пошло не так,
        // в первую очередь неверный токен
        try {
          await dispatch(fetchMe(getToken()))
          .then((data) => {
            if(!data.error){
              return dispatch(fetchFavorites({userId: data.payload.id, token: data.payload.id}))
            }else{
              throw new Error()
            }
          });
        } catch (error) {
          dispatch(setFavoritesError());
          dispatch(setUserError());
        };
      }else if(user.data){
        dispatch(fetchFavorites({userId: user.data.id, token: user.data.token}));
      }else if(!user.data && !getToken()){
        // это будет говорить о том, что юзер даже не пытался войти,
        dispatch(setFavoritesError());
        dispatch(setUserError());
      }
    };

    fetchData();
  }, [user.data]);

  return (
    <>
    <Head>
        <title>Smart</title>
    </Head>
    <Header />
    {children}
    {isOpened ? <AuthPopup /> : null}
    </>
  )
}

export default Layout