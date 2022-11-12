import ProductsCatalogList from "../components/ProductsCatalogList/ProductsCatalogList";
import { myAxios } from "../utils/myAxios";

export async function getStaticProps() {
    const { data: hitProducts } = await myAxios.get('/products/get-products?page=1');

  return {
    props: {hitProducts}
  }
};

const Home = ({hitProducts}) => {
  return (
    <section className="home">
      <div className="container">
        <ProductsCatalogList listName="Хиты продаж" products={hitProducts}/>
      </div>
    </section>
  )
}

export default Home