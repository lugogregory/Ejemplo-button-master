import React from 'react';
import ICO_ERROR from './assets/ICO_ERROR.svg';
import ICO_AVISOS from './assets/ICO_AVISOS.svg';
import ICO_INFORMATIVO from './assets/ICO_INFORMATIVO.svg';
import ICO_OK from './assets/ICO_OK.svg';
import styled from 'styled-components';

export const MessageBase = styled.div`
  display: flex;
  font-size: 12px;
  position: relative;
  border-radius: 3px;
  border: 1px solid #ffa39e;
  background-color: #fff1f0;
  color: black;
  padding: 0 8px;
  align-items: center;
  justify-content: left;
  vertical-align: middle;

    > img {
        width: 18px;
        height: 18px;
        min-width: 18px;
    }

    > p {
        margin: 0;
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;        
        line-height: 20px
    }

`;

const Wrapper = styled(MessageBase) <{ 
    fontSize: number | undefined,
    border: string ,
    backgroundColor: string,
    height: number | undefined,
    width: number | undefined,
    display: string | undefined,
    position: string | undefined,
    top: number | undefined,
    right: number | undefined,
    opacity: number | undefined,
    widthImg: number | undefined,
    heightImg: number | undefined,
   }>`
      font-size: ${props => (props.fontSize ? props.fontSize + 'px' : '12px')};
      border: ${props => props.border};
      background-color: ${props => props.backgroundColor};
      height: ${props => (props.height ? props.height : 'auto')}px;
      width: ${props => (props.width ? props.width : 'auto')}px;
      display: ${props => (props.display ? props.display : 'flex')};
      position: ${props => (props.position ? props.position : 'relative')};
      top: ${props => (props.top ? props.top + 'px' : 'auto')};
      right: ${props => (props.right ? props.right + 'px': 'auto')};
      opacity: ${props => (props.opacity ? props.opacity : 100)}%;

      > img {
        width: ${props => (props.widthImg ? props.widthImg + 'px' : '18px')};
        height: ${props => (props.heightImg ? props.heightImg + 'px' : '18px')};
      }
`;
  

type Props = {
    message: string,
    fontSize?: number,
    typeId?: number,
    width?: number,
    height?: number,
    display?: string,
    position?: string,
    top?: number,
    right?: number,
    opacity?: number,
    widthImg?: number,
    heightImg?: number
};

export default class MessageBoxClass extends React.Component<Props, any> {

    constructor(props: Props ) {
        super(props);
        this.state = {
          border: '1px solid #ffa39e',
          backgroundColor: '#fff1f0',
          ICO: ICO_ERROR,
        };
    }

    static defaultProps = {
        message: '',
        typeId: 1,
    }

    componentDidMount(){
        switch(this.props.typeId){
                case 1:
                    this.setState({border:'1px solid #ffa39e', backgroundColor: '#fff1f0', ICO: ICO_ERROR});
                    break;
                case 2:
                    this.setState({border:'1px solid #b7eb8f', backgroundColor: '#f6ffed', ICO: ICO_OK});
                    break;
                case 3:
                    this.setState({border:'1px solid #91d5ff', backgroundColor: '#e6f7ff', ICO: ICO_INFORMATIVO});
                    break;
                case 4:   
                    this.setState({border:'1px solid #ffe58f', backgroundColor: '#fffbe6', ICO: ICO_AVISOS});
                    break;
                default:
                    this.setState({border:'1px solid #ffa39e', backgroundColor: '#fff1f0', ICO: ICO_ERROR});
            }
    }

    render() {
            return(
                <Wrapper
                    border={this.state.border}
                    backgroundColor={this.state.backgroundColor}
                    fontSize={this.props.fontSize}
                    height= {this.props.height} 
                    width = {this.props.width} 
                    display= {this.props.display} 
                    position = {this.props.position}
                    top={this.props.top}
                    right={this.props.right} 
                    opacity= {this.props.opacity}
                    widthImg= {this.props.widthImg}
                    heightImg= {this.props.heightImg} 
                >
                    <img src= {this.state.ICO} alt='icon info'/>
                    <p>{this.props.message}</p>
                </Wrapper>
            )
        
    }
}