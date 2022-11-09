import Header from "../Header/Header";
import Head from "next/head";
import AuthPopup from "../AuthPopup/AuthPopup";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMe } from "../../redux/user/userSlice";
import { getToken } from "../service/service";

const Layout = ({children}) => {

  const { isOpened } = useSelector(state => state.popup);
  const dispatch = useDispatch();

  useEffect(() => {
    if(getToken()){
      dispatch(fetchMe(getToken()));
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