import api from "../../services/api";
import { useEffect, useState } from "react";
import { Image, Input, ContainerInput, Button, Logo } from "./styles";
import ProductCard from "../../components/ProductCard";
import "../../App.css";
import ReactLoading from "react-loading";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [inputProduct, setInputProduct] = useState("");
  const [loading, setLoading] = useState(false);

  async function search() {
    try {
      setLoading(true);
      await api
        .post("/products", {
          product: inputProduct,
        })
        .then(function (response) {
          setProducts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo src="https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-1-1.png" />
        <ContainerInput>
          <Input onChange={(value) => setInputProduct(value.target.value)} />
          <Button onClick={search}>
            {loading ? (
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={30}
                width={30}
              />
            ) : (
              <p>Buscar</p>
            )}
          </Button>
        </ContainerInput>
        {products && products.map((item) => <ProductCard products={item} />)}
      </header>
    </div>
  );
};

export default Home;
