import { S } from "../Price_Styles";
import { PriceItem2 } from "../priceItem/PriceItem2";
export type PriceListType = { mode?: string };
export const PriceList2: React.FC<PriceListType> = (props: PriceListType) => {
  return (
    <S.List mode={props.mode}>
      <PriceItem2 />
    </S.List>
  );
};
