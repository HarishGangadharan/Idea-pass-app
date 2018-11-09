import * as React from 'react';
// => List of icons https://feathericons.com/
import * as Icons from 'react-feather';
import './style.css';

interface IconProps {
  name: any;
  label?: string;
  classname?: string;
  display?: string;
  size?: number;
  onClick?: (object?: any) => any;
}

class BaseIcon extends React.PureComponent<IconProps> {
  public render() {
    const {name, label, onClick, classname, size, display} = this.props;
    const Icon = Icons[name];
    return (
      <span className={`base-icon ${classname || ''}`} style={{'display' : display || 'flex'}}>
       <Icon size={size || '15'} onClick={onClick} className="cursor-pointer"/>&nbsp;
       {label}
      </span>
    );
  }
}

export default BaseIcon;
