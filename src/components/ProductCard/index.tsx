import { ContainerProductCard, Image } from "./styles";

interface IProduct {
  products: {
    image: string;
    title: string;
    price: string;
  };
}

const ProductCard: React.FC<IProduct> = (data) => {
  return (
    <ContainerProductCard>
      <Image src={data.products.image} alt={data.products.image} />
      <p>{data.products.title}</p>
    </ContainerProductCard>
  );
};

export default ProductCard;
