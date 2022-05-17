import api from "../../services/api.ts";
import { useEffect, useState } from "react";
import { Image, Input, ContainerInput, Button } from "./styles";
import ProductCard from "../../components/ProductCard/index.tsx";
import "../../App.css";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [inputProduct, setInputProduct] = useState("");

  async function search() {
    try {
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
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <ContainerInput>
          <Input onChange={(value) => setInputProduct(value.target.value)} />
          <Button>
            <p onClick={search}>Buscar</p>
          </Button>
        </ContainerInput>
        {products && products.map((item) => <ProductCard products={item} />)}
      </header>
    </div>
  );
};

export default Home;
