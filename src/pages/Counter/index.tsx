import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { decrement, decrementAsync, increment, incrementAsync } from '../../actions/counter';
import { IState } from '../../reducers';
import CButton from '../../components/Button/CButton';

interface IStateProps {
  count: number,
  isLoading: boolean
}

interface IDispatchProps {
  decrement: () => void,
  decrementAsync: () => void,
  increment: () => void,
  incrementAsync: () => void,
}

const Counter = (props: RouteComponentProps<any> & IStateProps & IDispatchProps) => (
  <div className="container justify-content-center align-items-center">
    <div className="row justify-content-around align-items-center">
      <div className="col-sm-4 col-lg-2 align-items-center justify-content-between">
        <CButton
          className="btn btn-outline-primary mb-2"
          name="Decrement"
          onClick={props.decrement}
          disabled={props.isLoading}
          aria_label="Sub"
        />
        <CButton
          className="btn btn-outline-primary"
          name="Decrement Async"
          onClick={props.decrementAsync}
          disabled={props.isLoading}
          aria_label="Sub"
        />
      </div>
      <div className="col-sm-4 col-lg-2 align-items-center justify-content-between">
        <div>Counter: {props.count}</div>
      </div>
      <div className="col-sm-4 col-lg-2 align-items-center justify-content-between">
        <CButton
          className="btn btn-outline-primary mb-2"
          name="Increment"
          onClick={props.increment}
          disabled={props.isLoading}
          aria_label="Add"
        />
        <CButton
          className="btn btn-outline-primary"
          name="Increment Async"
          onClick={props.incrementAsync}
          disabled={props.isLoading}
          aria_label="Add"
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state: IState) => ({
  count: state.counter.count,
  isLoading: state.counter.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  decrement: () => dispatch(decrement()),
  decrementAsync: () => dispatch(decrementAsync()),
  increment: () => dispatch(increment()),
  incrementAsync: () => dispatch(incrementAsync())
});

export default connect<IStateProps, IDispatchProps, RouteComponentProps<any>, IState>(mapStateToProps, mapDispatchToProps)(Counter);
