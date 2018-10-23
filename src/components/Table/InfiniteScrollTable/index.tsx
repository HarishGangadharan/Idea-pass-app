import * as React from 'react';

import './InfiniteScroll.css';

interface IScrollProps {
  hasMore: boolean;
  enabled: boolean;
  onScroll: any;
  content: any;
}

const withInfiniteScroll = () =>
  class InfiniteScrollHoc extends React.Component<IScrollProps, object> {
    private readonly container: any;

    constructor(props: IScrollProps) {
      super(props);
      this.container = React.createRef();
    }

    public componentDidMount() {
      if (this.props.enabled) {
        this.container.current.querySelector('tbody').addEventListener('scroll', this.onScroll, false);
      }
    }

    public componentWillUnmount() {
      if (this.props.enabled) {
        this.container.current.querySelector('tbody').removeEventListener('scroll', this.onScroll, false);
      }
    }

    public render() {
      const { content, enabled } = this.props;
      return (
        <div
          ref={this.container}
          className={`${enabled ? 'scroll-container' : ''}`}
        >
          {content}
        </div>
      );
    }

    private onScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = this.container.current.querySelector('tbody');
      if (scrollHeight - scrollTop === clientHeight &&
        this.props.hasMore
      ) {
        this.props.onScroll();
      }
    }
  };

export default withInfiniteScroll;
