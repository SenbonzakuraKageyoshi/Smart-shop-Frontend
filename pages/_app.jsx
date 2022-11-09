import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => {
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp