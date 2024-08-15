import { Slide } from "react-awesome-reveal";
import img1 from "../../../assets/images/teams/1.jpg";
import img2 from "../../../assets/images/teams/2.jpg";
import img3 from "../../../assets/images/teams/3.jpg";
import img4 from "../../../assets/images/teams/4.jpg";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Team_Styles";
import { TeamItem } from "./teamItem/TeamItem";

const teamItem = [
  { id: "team1", src: img1, name: "Елена Васильевна", text: "Массажист" },
  { id: "team2", src: img2, name: "Елена Васильевна", text: "Массажист" },
  { id: "team3", src: img3, name: "Елена Васильевна", text: "Массажист" },
  { id: "team4", src: img4, name: "Елена Васильевна", text: "Массажист" },
];

export const Team: React.FC = () => {
  return (
    <S.Team>
      <Container>
        <SectionTitle>Наши массажисты</SectionTitle>
        <S.TeamWrapper>
          {teamItem.map((item) => (
            <Slide key={item.id}>
              <TeamItem item={item} />
            </Slide>
          ))}
        </S.TeamWrapper>
      </Container>
    </S.Team>
  );
};
