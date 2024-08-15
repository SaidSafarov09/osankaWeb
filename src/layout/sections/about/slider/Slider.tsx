import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "../About_Styles";
const Slide1: React.FC = () => {
  return (
    <>
      <S.Slide>
        <S.Text>
          Наша философия: Хочешь жить- умей вертеться , хочешь жить комфортно -
          научись расслабляться. <br />
          <br />
          Порой , чтобы стало легче нашему телу, надо прожить эмоцию. <br />
          <br />
          Для здорового тела НУЖНО заниматься профилактикой, а не замазыванием
          болевых факторов.
          <br />
          <br />
          <span style={{ color: "#CDAA7D" }}>Дальше →</span>
        </S.Text>
      </S.Slide>
    </>
  );
};
const Slide2: React.FC = () => {
  return (
    <>
      <S.Slide>
        <S.Text>
          Основные задачи студий массажа Os.anka :<br /> Помощь при патологиях
          мышц, неврологических расстройствах, фасциальных зажимах,гипотрофии
          связок и сухожилий, а уже из самого массажа вытекают приятные бонусы в
          виде улучшения тургора кожи, цвета кожи, эластичности сосудов,
          хорошего сна и настроения , коррекции фигуры!
          <br />
          <br /> В наших студиях массажа вы сможете получить ожидаемый результат
          и улучшение структуры вашего мышечного корсета и других систем
          организма.
        </S.Text>
      </S.Slide>
    </>
  );
};
const SlideItems = [<Slide1 />, <Slide2 />];

export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <AliceCarousel mouseTracking items={SlideItems} disableButtonsControls />
    </S.Slider>
  );
};
