import Header from "../Header/Header";
import Head from "next/head";
import AuthPopup from "../AuthPopup/AuthPopup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "../../redux/user/userSlice";
import { getToken } from "../../service/service";
import { fetchFavorites } from "../../redux/favorites/favoritesSlice";
import { setError } from "../../redux/favorites/favoritesSlice";

const Layout = ({children}) => {

  const { isOpened } = useSelector(state => state.popup);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if(!user.data && user.status !== 'fulfilled' && getToken()){
        try {
          await dispatch(fetchMe(getToken()))
            .then(({payload}) => dispatch(fetchFavorites({userId: payload.id, token})))
            .catch(() => dispatch(setError()))
        } catch (error) {
          dispatch(setUndefinedStatus());
        }
      }else if(user.data){
        dispatch(fetchFavorites({userId: user.data.id, token: user.data.token}));
      }else if(!user.data && !getToken()){
        dispatch(setUndefinedStatus());
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