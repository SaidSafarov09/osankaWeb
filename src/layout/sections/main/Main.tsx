import Typewriter from "typewriter-effect";
import { S } from "./Main_styles";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <S.TitleWrapper>
        <S.Text>Студия массажа</S.Text>
        <S.MainTitle>
          <Typewriter
            options={{
              strings: ["«Os.Anka»"],
              autoStart: true,
              loop: true,
            }}
          />
        </S.MainTitle>
      </S.TitleWrapper>
      <S.ScrollDown href="#about">Прокрутите вниз</S.ScrollDown>
    </S.Main>
  );
};
