import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
// import { Dispatch } from 'redux';
import { decrement, increment } from '../actions/counter';
import { IState } from '../reducers';


interface IStateProps {
  count: number
}

interface IDispatchProps {
  increment: () => void
  decrement: () => void
}

const Counter = (props: RouteComponentProps<any> & IStateProps & IDispatchProps) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

const mapStateToProps = (state: IState) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch: any) => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
})

export default connect<IStateProps, IDispatchProps, RouteComponentProps<any>>(mapStateToProps, mapDispatchToProps)(Counter)
