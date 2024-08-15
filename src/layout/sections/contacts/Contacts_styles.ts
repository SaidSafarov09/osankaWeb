import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

const Contacts = styled.section`
	padding: 180px 0 100px;
	@media ${theme.media.tablet} {
		padding: 180px 0 65px;
	}
	@media ${theme.media.mobile} {
		padding: 180px 0 30px;
	}

	${FlexWrapper} {
		@media ${theme.media.tablet} {
			gap: 30px;
		}
		@media ${theme.media.mobile} {
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
`

const Image = styled.img`
	position: relative;
	z-index: 1;
	width: 100%;
	margin-bottom: 80px;
	@media ${theme.media.tablet} {
		margin-bottom: 60px;
	}
	@media ${theme.media.mobile} {
		margin-bottom: 40px;
	}
`

const IframeContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-bottom: 80px;

	filter: grayscale(1);
  @media ${theme.media.tablet} {
    margin-bottom: 60px;
  }
  
  @media ${theme.media.mobile} {
    margin-bottom: 40px;
  }
`;

export const S = { Contacts, Image, IframeContainer }
