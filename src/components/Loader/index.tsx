import * as React from 'react';
import loader from '../../assets/img/loader.gif';

import './loader.css';

interface ILoaderProps {
  imageStyle?: any,
  loading: boolean
}

export default class Loader extends React.Component<ILoaderProps> {
  constructor(props: ILoaderProps) {
    super(props);
  }

  public render() {
    const { imageStyle } = this.props;
    return (
      <div className={true ? 'loader-main' : 'display-none'}>
          <img style={imageStyle} src={loader} />
      </div >
    );
  }
}
