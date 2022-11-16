import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from '../components/Loader/Loader';
import { Provider } from 'react-redux';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => {

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return(
    <Provider store={store}>
      <Layout>
        {loading ? <Loader /> : <Component {...pageProps} />}
      </Layout>
    </Provider>
  );
}

export default MyApp
