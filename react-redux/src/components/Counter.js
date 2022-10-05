// import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  
  const incrementHandler = () => {
    // dispatch({type: 'INCREMENT'}) 
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    // dispatch({type: 'INCREASE', amount: 5})
    // dispatch(counterActions.increase(5))
    dispatch(counterActions.increase({amount: 5}))
  }
  const decrementHandler = () => {
    // dispatch({type: 'DECREMENT'})
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    // dispatch({type: 'TOGGLE'})
    dispatch(counterActions.toggleCounter())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler ()  {
//     this.props.increment()
//   }
//   decrementHandler ()  {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {};
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
