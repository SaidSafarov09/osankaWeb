import { Slide } from "react-awesome-reveal";
import services1 from "../../../assets/images/coursec/1.jpg";
import services2 from "../../../assets/images/coursec/2.jpg";
import services3 from "../../../assets/images/coursec/3.jpg";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./Services_Styles";
import { ServicesItem } from "./servicesItem/ServicesItem";

// const LI = styled.li`
//   list-style: disc;
//   margin-left: 20px;
// `;

const data = [
  {
    id: "services1",
    src: services1,
    text: (
      <>
        <div>
          В нашей студии вы можете
          <br />
          приобрети абонементы на
          <br />
          курсы массажа:
          <br />
          <br />
          <p>
            При оформлении курса из 5<br />
            сеансов, вы получаете
            <br />- 5% скидку
          </p>
        </div>
      </>
    ),
  },
  {
    id: "services3",
    src: services3,
    text: (
      <>
        <div>
          <p>
            При оформлении курса из 7<br />
            сеансов, вы получаете
            <br />- 10% скидку
          </p>
        </div>
      </>
    ),
  },
  {
    id: "services2",
    src: services2,
    text: (
      <>
        <div>
          <p>
            При оформлении курса из 10
            <br />
            сеансов, вы получаете
            <br />- 15% скидку
          </p>
        </div>
      </>
    ),
  },
];
export const Cources: React.FC = () => {
  return (
    <S.Services>
      <Container>
        <SectionTitle>Наши курсы</SectionTitle>
        <S.ServicesContainer>
          {data.map((item) => (
            <Slide key={item.id}>
              <ServicesItem item={item} />
            </Slide>
          ))}
        </S.ServicesContainer>
      </Container>
    </S.Services>
  );
};
