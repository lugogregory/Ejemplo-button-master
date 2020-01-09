// @flow
import * as React from 'react';
import styled from 'styled-components';
import './Input.css';

export const Wrapper = styled.div<{ colorFocus: string | undefined }>`
  input:focus {
    border: 1px solid ${props => (props.colorFocus ? props.colorFocus : '#e2e2e2')};
  }

  .form-label {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 12px;
    color: #555555;
  }
  
  .form-label-error {
    color: red;
  }

  .form-error {
    border-color: red !important;
  }

`;

type Props = {
  label?: string,
  name: string,
  fontSize?: number,
  scope?:string,
  type?: string,
  colorlabel?: string,
  value?: string,
  colorFocus?: string,
  onChange: (name: string, value: string) => any,
  error?: string,
  placeholder?: string,
  width?: number,
  resize?: boolean,
  height?: number,
  required?: boolean,
  disabled?: boolean,
  maxlength?: number,
};
const Input = ({
  label,
  name,
  fontSize,
  scope,
  type = 'text',
  value,
  colorFocus,
  colorlabel,
  onChange,
  error = '',
  placeholder,
  width,
  resize,
  height,
  required = false,
  disabled = false,
  maxlength,
}: Props) => {
  
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const _value = event.currentTarget.value;
    onChange(name, _value);
  };

  return (
    
    <Wrapper colorFocus={colorFocus}>
      <div style={ width ? (resize ? {width: width + '%'} : {width: width + 'px'} ) : {opacity: 1} } >
        {
          label ? 
            <label
            className={`form-label${error !== '' ? ' form-label-error' : ''}`}
            htmlFor={`form-input-${name}`}
            style={{color: colorlabel, fontSize: fontSize}}
            >
              {label}
              {required && ' *'}
            </label> : ''
        }
        <input
          id={`form-input-${name}`}
          className={error !== '' ? 'form-error' : ''}
          style={{
            height: height || 'inherit',
            backgroundColor: disabled ? 'rgba(0,0,0,0.04)' : 'white',
          }}
          name={name}
          type={type}
          data-beeds-f-test={scope + name}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete="off"
          disabled={disabled}
          maxLength={maxlength}
        />
      </div>
    </Wrapper>
  );
};

export default Input;
