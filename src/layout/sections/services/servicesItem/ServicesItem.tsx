import { S } from "../Services_Styles";

type ServicesItemPropsType = { id: string; src: string; text: any };
export const ServicesItem: React.FC<{ item: ServicesItemPropsType }> = (props: {
  item: ServicesItemPropsType;
}) => {
  return (
    <S.ServicesItem>
      <S.ImageWrapper>
        <S.Image src={props.item.src} alt={props.item.text} />
      </S.ImageWrapper>
      <S.Text>{props.item.text}</S.Text>
    </S.ServicesItem>
  );
};
