import {
  ContainerProductCard,
  Image,
  Title,
  Price,
  ContainerDescription,
  SubTitle,
  Logo,
  ContainerInput,
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
        <ContainerInput>
          <Logo
            src="https://s2.glbimg.com/upEfTf3ONPKEDzgsjJh8tKKrEGU=/0x0:607x607/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/S/h/cYAB4FR1yzB4AGYbpzsA/2020-03-17-novo-logo-mercado-livre.jpg"
            alt={data.products.image}
          />
          <SubTitle>Vendido por Mercado Livre</SubTitle>
        </ContainerInput>
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
