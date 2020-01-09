import * as React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
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

export interface ButtonProps {
  children?: any,
  onClick?: any,
  Icon?: any ,
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
}

const Wrapper = styled(ButtonBase)<{ 
  fontColor: string | undefined,
  fontHoverColor: string | undefined,
  backgroundColor: string | undefined,
  borderColor: string | undefined,
  backgroundHoverColor: string | undefined,
  borderHoverColor: string | undefined,
  transparent: boolean | undefined, 
  shape: string | undefined, 
  size: string | undefined,
  disabled: boolean | undefined,
  iconPosition: number  | undefined
 }> `
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


export default class Button extends React.Component<ButtonProps, any> {
  constructor(props: ButtonProps ) {
    super(props);
    this.state = {
      hover: false,
    }
       
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }

  static defaultProps = {
    iconPosition : 1,
    paddingIconToText : 0,
    fontColor : '#cbcbcb',
    fontHoverColor : '',
    fillColor : '#cbcbcb',
    fillHoverColor : '',
    backgroundColor : '#333645',
    borderColor : '',
    backgroundHoverColor : '',
    borderHoverColor : '',
    transparent : false, 
    shape : 'normal',
    size : 'default',
    disabled : false
  }

  onEnter() {
    this.setState({ hover: true });
  }

  onLeave() {
    this.setState({ hover: false });    
  }


  render() {
    
    return (
      <Wrapper onMouseEnter={() => this.onEnter()} onMouseLeave={() => this.onLeave()}
        onClick={this.props.onClick}
        fontColor={this.props.fontColor}
        fontHoverColor={this.props.fontHoverColor}
        backgroundColor = {this.props.backgroundColor}
        borderColor = {this.props.borderColor}
        backgroundHoverColor = {this.props.backgroundHoverColor}
        borderHoverColor = {this.props.borderHoverColor}
        transparent = {this.props.transparent}
        shape = {this.props.shape}
        size = {this.props.size}
        disabled={this.props.disabled}
        iconPosition = {this.props.iconPosition}
      >
        {
          this.props.Icon ? <this.props.Icon style={{ fill: this.state.hover ? this.props.fillHoverColor !== '' ? this.props.fontHoverColor : this.props.fillColor : this.props.fillColor, 
                                width: this.props.IconWidth ? this.props.IconWidth : 'auto',
                                height: this.props.IconHeight ? this.props.IconHeight : 'auto',
                                paddingTop: this.props.iconPosition === 2 ? this.props.paddingIconToText : 0,
                                paddingRight: this.props.iconPosition === 1 ? this.props.paddingIconToText : 0,
                                paddingBottom: this.props.iconPosition === 0 ? this.props.paddingIconToText : 0,
                                paddingLeft: this.props.iconPosition === 3 ? this.props.paddingIconToText : 0
                                }} /> : ''
        }
       {this.props.children}
      </Wrapper>
    );
  
  }

}