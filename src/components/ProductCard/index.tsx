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
        <Price>
          {data.products.price.includes(",")
            ? data.products.price.replace(/\n/g, "")
            : `${data.products.price.replace("\n", "")},00`}
        </Price>
      </ContainerDescription>
    </ContainerProductCard>
  );
};

export default ProductCard;
