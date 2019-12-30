// @flow
import * as React from 'react';
import styled from 'styled-components';

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    
  /* elevation2 */
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  &:focus {
    outline: none;
  }
  
  &:active {
    /* elevation10 */
    box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
      0px 10px 14px 1px rgba(0, 0, 0, 0.14),
      0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
`;

const Wrapper = styled(ButtonBase) <{ 
  fontColor: string,
  fontHoverColor: string,
  backgroundColor: string,
  borderColor: string,
  backgroundHoverColor: string,
  borderHoverColor: string,
  transparent: boolean, 
  shape: string, 
  size: string,
  disabled: boolean,
  iconPosition: number 
 }>`
    flex-direction: ${props => (props.iconPosition === 1 || props.iconPosition === 3  ? 'row' : 'column')};
    padding: ${props => (props.shape === 'circle' ? '15px 15px' : props.size === 'large' ? '16px 40px' : props.size === 'small' ? '10px 20px' : '12px 30px')};
    font-size: ${props => (props.size === 'large' ? '14px' : props.size === 'small' ? '11px' : '12px')};
    color: ${props => props.fontColor};
    border: ${props => props.borderColor !== '' ? `1px solid ${props.borderColor}` : 'none'};
    background-color: ${props => !props.transparent ? props.backgroundColor : 'transparent' };
    border-radius: ${props => (props.shape === 'round' ? '24px' : props.shape === 'circle' ? '50%' : '3px')};
    filter: ${props => props.disabled ? 'opacity(50%)' : '' };
    cursor: ${props => props.disabled ? 'no-drop' : 'pointer' };

    &:hover {
      color: ${props => props.fontHoverColor !== '' && !props.disabled ? props.fontHoverColor : '' };
      border: ${props => props.borderHoverColor !== '' && !props.disabled ? `1px solid ${props.borderHoverColor}` : props.borderColor !== '' ? `1px solid ${props.borderColor}` : 'none' };
      background-color: ${props => props.backgroundHoverColor !== '' && !props.disabled ? props.backgroundHoverColor : !props.transparent ? props.backgroundColor : 'transparent' };
      filter: ${props => (props.backgroundHoverColor === '') && !props.disabled ? 'brightness(85%)' : '' }; 
    }

`;

type Props = {
  children?: string | any,
  onClick?: any,
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | any,
  IconWidth?: number,
  IconHeight?: number,
  iconPosition?: number, // 0:top 1:left 2:bottom 3:right
  paddingIconToText?: number,
  fontColor?: string,
  fontHoverColor?: string,
  fillColor?: string,
  fillHoverColor?: string,
  backgroundColor?: string,
  borderColor?: string,
  backgroundHoverColor?: string,
  borderHoverColor?: string,
  transparent?: boolean, 
  shape?: string, // normal, round, circle
  size?: string, // large, default, small
  disabled?: boolean,
};

const Button = ({
  children,
  onClick,
  Icon,
  IconWidth,
  IconHeight,
  iconPosition = 1,
  paddingIconToText = 0,
  fontColor = '#cbcbcb',
  fontHoverColor = '',
  fillColor = '#cbcbcb',
  fillHoverColor = '',
  backgroundColor = '#333645',
  borderColor = '',
  backgroundHoverColor = '',
  borderHoverColor = '',
  transparent = false, 
  shape = 'normal',
  size = 'default',
  disabled = false,
  
}: Props) => {

  const [hover, setHover] = React.useState(false);
  const onEnter = () => {
    setHover(true);
  }
  const onLeave = () => {
    setHover(false);
  }

  return (
    <Wrapper onMouseEnter={() => onEnter()} onMouseLeave={() => onLeave()}
      onClick={onClick}
      fontColor={fontColor}
      fontHoverColor={fontHoverColor}
      backgroundColor = {backgroundColor}
      borderColor = {borderColor}
      backgroundHoverColor = {backgroundHoverColor}
      borderHoverColor = {borderHoverColor}
      transparent = {transparent}
      shape = {shape}
      size = {size}
      disabled={disabled}
      iconPosition = {iconPosition}
    >
      {
        Icon ? <Icon style={{ fill: hover ? fillHoverColor !== '' ? fontHoverColor : fillColor : fillColor, 
                              width: IconWidth ? IconWidth : 'auto',
                              height: IconHeight ? IconHeight : 'auto',
                              paddingTop: iconPosition === 2 ? paddingIconToText : 0,
                              paddingRight: iconPosition === 1 ? paddingIconToText : 0,
                              paddingBottom: iconPosition === 0 ? paddingIconToText : 0,
                              paddingLeft: iconPosition === 3 ? paddingIconToText : 0
                              }} /> : ''
      }
     {children}
    </Wrapper>
  );
};

export default Button;
