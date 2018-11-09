import * as React from 'react';
import { Clock, MoreHorizontal, Pocket, Share2 } from 'react-feather';
import img from './layer1.png';

class Component1 extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    // You can render any custom fallback UI
    return (
      <div className="shadow-container mb-20">
        <div className="row pt-10">
          <div className="col-md-4 text-center">
            <img src={img} />
          </div>
          <div className="col-md-8">
            <h3 className="m-0 pb-10">Anniversary celebration 2018</h3>
            <p>
              Being the savage's bowsman, that is, the person who pulled the
              bow-oar in his boat (the second one from forward),
              it was my cheerful duty to attend upon him while taking that
              hard-scrabble scramble upon the dead whale's back.
              You have seen Italian organ-boys holding a
              dancing-ape by a long cord
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="row icon-list">
            <div className="col-md-6 icon">
              <Clock size="20" className="cursor-pointer"/>
              <span>23 October 2018, 10:00AM</span>
            </div>
            <div className="col-md-6 text-right">
              <span className="icon">
                <Share2 size="20" className="cursor-pointer"/>
                <span>Share</span>
              </span>
              <span className="icon">
                <Pocket size="20" className="cursor-pointer"/>
                <span>Saved</span>
              </span>
              <span className="icon">
                <MoreHorizontal size="20" className="cursor-pointer"/>
                <span>More</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Component1;
