import { Fade, Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Contact } from "../../components/contact/Contact";
import { Icon } from "../../components/icon/Icon";
import { OperatingMode } from "../../components/operatingMode/OperatingMode";
import { S } from "./Footer_Styles";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <Slide>
            <NavLink to={"/Delote-Beauty/home"}>
              <Icon
                idIcon="logoIcon"
                width="60"
                height="60"
                viewBox="0 0 60 60"
              />
            </NavLink>
          </Slide>
          <Slide>
            <Contact />
          </Slide>
          <Slide>
            <OperatingMode />
          </Slide>
          <Slide>
            <S.Section>
              <S.Title>
                <a href="https://www.instagram.com/os.anka_?igsh=MWQyNDBhM295NHUyYQ==">
                  Мы в Instagram
                </a>
              </S.Title>
              <S.Title>
                <a href="https://t.me/+fX8OyupEqC84MTMy">Мы в Telegram</a>
              </S.Title>
              <a href="https://www.instagram.com/os.anka_?igsh=MWQyNDBhM295NHUyYQ==">
                <Icon
                  idIcon="instagramIcon"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                />
              </a>
            </S.Section>
          </Slide>
        </FlexWrapper>
        <Fade>
          <S.Copyright>OsAnka 2017 - {currentYear}</S.Copyright>
        </Fade>
      </Container>
    </S.Footer>
  );
}
