import * as React from 'react';
// => List of icons https://feathericons.com/
import * as Icons from 'react-feather';
import { LocalizeContextProps, Translate } from 'react-localize-redux';
import './style.css';

interface IconProps {
  name: any;
  label?: string;
  classname?: string;
  params?: any,
  display?: string;
  size?: number;
  title?: string;
  onClick?: (object?: any) => any;
}

class BaseIcon extends React.PureComponent<IconProps> {
  public render() {
    const {
      name,
      label,
      onClick,
      params,
      classname,
      size,
      display,
      title
    } = this.props;
    const Icon = Icons[name];
    return (
      <Translate>
        {({ translate }: LocalizeContextProps) => {
          const translated = label
            ? translate(
                label,
                {...params},
                { onMissingTranslation: this.onMissingTranslation }
              ).toString()
            : '';
          return (
            <span
              className={`base-icon ${classname || ''}`}
              style={{ display: display || 'flex' }}
              title={translated}
            >
              <Icon
                size={size || '15'}
                onClick={onClick}
                className="cursor-pointer"
              />
              &nbsp;
              <span className="icon-label" title={title || ''}>
                {translated}
              </span>
            </span>
          );
        }}
      </Translate>
    );
  }

  // fallback translation message
  private onMissingTranslation = (options: any) => {
    return options.translationId;
  }
}

export default BaseIcon;
