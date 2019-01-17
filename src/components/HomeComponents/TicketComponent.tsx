import * as React from 'react';
import boy from '../../assets/img/boy.svg';
import girl from '../../assets/img/girl.svg';
import './index.css';
import CButton from '../Button/CButton';

class Ticket extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      tickets: [
        {
          message: 'Reviewing PR, added charts',
          time: '2hrs ago',
          user: {
            gender: 'male',
            name: 'Rajesh PR'
          }
        },
        {
          message: 'Commited Role based authentication',
          time: '4hrs ago',
          user: {
            gender: 'male',
            name: 'Srikanth'
          }
        },
        {
          message: 'Dynamic Table component support needed from backend',
          time: '6hrs ago',
          user: {
            gender: 'female',
            name: 'Sankari'
          }
        },
        {
          message: 'Table row expand added',
          time: '8hrs ago',
          user: {
            gender: 'male',
            name: 'Mukundhan'
          }
        }
      ]
    };
  }

  public render() {
    return (
      <div className="shadow-container ticket-wrapper">
        <div className="ticket-wrapper-header">
          <div>
            <h4>Ticket Header</h4>
            <span>27 unresolved isssues</span>
          </div>
          <div>
            <CButton
              className="btn btn-md btn-primary"
              name="See All"
            />
          </div>
        </div>
        <div className="row ticket-content">
          <ul className="tickets">
            {this.state.tickets.map((ticket: any, index: number) => (
              <li className="ticket row" key={index}>
                <div className="col-lg-3 col-sm-3 col-md-3">
                  <img src={ticket.user.gender === 'male' ? boy : girl} />
                </div>
                <div className="col-lg-9 col-sm-9 col-md-9">
                  <div className="ticket-header">
                    <span className="user-name">{ticket.user.name}</span>
                    <span className="time"> {ticket.time}</span>
                  </div>
                  <p>{ticket.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Ticket;
