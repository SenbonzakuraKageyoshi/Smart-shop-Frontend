import Header from "../Header/Header";
import Head from "next/head";
import AuthPopup from "../AuthPopup/AuthPopup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "../../redux/user/userSlice";
import { getToken } from "../../service/service";
import { fetchFavorites } from "../../redux/favorites/favoritesSlice";

const Layout = ({children}) => {

  const { isOpened } = useSelector(state => state.popup);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(getToken()){
      const token = getToken()
      dispatch(fetchMe(token)).then(({payload}) => dispatch(fetchFavorites({userId: payload.id, token})))
    };
  }, []);

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