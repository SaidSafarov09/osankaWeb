import { Fade } from "react-awesome-reveal";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Contact } from "../../../components/contact/Contact";
import { OperatingMode } from "../../../components/operatingMode/OperatingMode";
import { S } from "./Contacts_styles";
export const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Container>
        <SectionTitle>Контакты</SectionTitle>
        <S.IframeContainer>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3379d3167b318311f9a8a3a1c2d488a59c70872430a4d835ca6195ec91b2dc6&amp;source=constructor"
            width="100%"
            height="576"
          ></iframe>
        </S.IframeContainer>
        <FlexWrapper
          align="flex-start"
          justify="space-around"
          wrap="wrap"
          gap="20"
        >
          <Fade>
            <Contact />
          </Fade>
          <Fade>
            <OperatingMode />
          </Fade>

          {/* <Fade>
						<Contact />
					</Fade>
					<Fade>
						<OperatingMode />
					</Fade> */}
        </FlexWrapper>
      </Container>
    </S.Contacts>
  );
};
