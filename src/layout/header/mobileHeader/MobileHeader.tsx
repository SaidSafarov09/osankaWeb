import { useState } from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Burger } from "../../../components/burger/Burger";
import { Icon } from "../../../components/icon/Icon";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/menu/Menu";
import { S } from "./MobileHeader_Styles";

export interface INavItem {
  id: string;
  link: string;
  text: string;
}

const NavDate: INavItem[] = [
  { id: "LeftNav1", link: "/", text: "Главная" },
  { id: "LeftNav2", link: "/team", text: "Массажисты" },
  { id: "RightNav1", link: "/price", text: "Цены" },
  { id: "RightNav2", link: "/reviews", text: "Отзывы" },
  { id: "RightNav3", link: "/contacts", text: "Контакты" },
  {
    id: "RightNav3",
    link: "/recomendation",
    text: "Рекомендации",
  },
  {
    id: "RightNav3",
    link: "https://t.me/+fX8OyupEqC84MTMy",
    text: "Мы в Telegram",
  },
  {
    id: "RightNav3",
    link: "https://wa.me/message/SXWX25TYQBLZC1",
    text: "Мы в WhatsApp",
  },
  {
    id: "RightNav3",
    link: "https://n835315.yclients.com/",
    text: "Записаться",
  },

  {
    id: "RightNav3",
    link: "tel:+79870007191",
    text: "+7 (987) 000-71-91",
  },
];

export const MobileHeader: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <S.MobileHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.Link>
            <a href="https://www.instagram.com/os.anka_?igsh=MWQyNDBhM295NHUyYQ==">
              <Icon
                idIcon="instagramIcon"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              />
            </a>
          </S.Link>
          <Menu
            navItems={NavDate}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          />
          <Logo />
          <Burger isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
        </FlexWrapper>
      </Container>
    </S.MobileHeader>
  );
};
