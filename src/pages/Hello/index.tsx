import * as React from 'react';
import HelloChild from '../../components/HelloChild';

class Hello extends React.Component {
  public render() {
    return (
      <HelloChild />
    );
  }
}

export default Hello;
