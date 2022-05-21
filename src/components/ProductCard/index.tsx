import {
  ContainerProductCard,
  Image,
  Title,
  Price,
  ContainerDescription,
} from "./styles";

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
      <ContainerDescription>
        <Title>{data.products.title}</Title>
        <Price>R${data.products.price.replace("undefined", "00")}</Price>
      </ContainerDescription>
    </ContainerProductCard>
  );
};

export default ProductCard;
