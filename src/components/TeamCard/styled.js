import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export const StyledContainer = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
`
export const StyledBlock = styled.div`
	padding: 15px;
	min-height: 590px;
	flex-basis: 0;
	flex-grow: 1;
	border-radius: 20px;
	background: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	@media (max-width: 767px) {
		margin-top: 30px;
		min-height: 450px;
	} 
	
`
export const StyledBlockText = styled.p`
	font-size: 16px;
	color: ${({ textColor }) => defaultTheme.colors[textColor]};
	text-align: left!important;
	line-height: 21px;
	min-height: 130px;
	margin-bottom: 20px;
`

export const StyledIcon = styled.img`
	max-width: 100%;
	max-height: 100%;
`

export const StyledIconContainer = styled.div`
	height: 12vh;
	margin-bottom: 3vh;
`
export const StyledContainerBlocks = styled.div`
	min-height: 500px;
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	@media (max-width: 768px) {
		justify-content: space-evenly!important;
	}
`
export const StyledImg = styled.img`
	width: auto;
	max-width: 215px;
	@media (max-width: 768px) {
		max-width: 150px;	
	}
`
export const StyledImgContainer = styled.div`
	align-items: center;
	justify-content: center;
	img.colab {
		position: absolute;
		bottom: -8px;
		border-radius: 20px;
	} 
	@media (max-width: 768px) {
		img.colab {
			bottom: 0;
		}
	}
`