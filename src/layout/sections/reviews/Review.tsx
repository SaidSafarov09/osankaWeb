import { Slide } from "react-awesome-reveal";
import img1 from "../../../assets/images/reviews/1.png";
import img2 from "../../../assets/images/reviews/2.png";
import img3 from "../../../assets/images/reviews/3.png";
import img4 from "../../../assets/images/reviews/4.png";
import img5 from "../../../assets/images/reviews/5.png";
import img6 from "../../../assets/images/reviews/6.png";
import img7 from "../../../assets/images/reviews/7.png";
import img8 from "../../../assets/images/reviews/8.png";
import img9 from "../../../assets/images/reviews/9.png";
import img10 from "../../../assets/images/reviews/10.png";
import img11 from "../../../assets/images/reviews/11.png";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./Review_Styles";
import { TeamItem } from "./reviewitem/ReviewItem";

const teamItem = [
  { id: "team1", src: img1, name: "", text: "" },
  { id: "team2", src: img2, name: "", text: "" },
  { id: "team3", src: img3, name: "", text: "" },
  { id: "team4", src: img4, name: "", text: "" },
  { id: "team5", src: img5, name: "", text: "" },
  { id: "team6", src: img6, name: "", text: "" },
  { id: "team7", src: img7, name: "", text: "" },
  { id: "team8", src: img8, name: "", text: "" },
  { id: "team9", src: img9, name: "", text: "" },
  { id: "team10", src: img10, name: "", text: "" },
  { id: "team11", src: img11, name: "", text: "" },
];

export const Review: React.FC = () => {
  return (
    <S.Team>
      <Container>
        <SectionTitle>Отзывы</SectionTitle>
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
