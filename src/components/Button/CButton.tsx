import * as React from 'react';

interface CButtonProps {
  id?: string,
  className: string,
  disabled?: any,
  onClick?: any,
  aria_label?: string,
  name: string,
  type?: string
}
const CButton = (props:CButtonProps) => {
    return (
        <button
          id={props.id}
          className={props.className}
          disabled={props.disabled}
          onClick={props.onClick}
          aria-label={props.aria_label}
          type={props.type}
        >
          {props.name}
        </button>
    );
  }

export default CButton;
