import React, {Component} from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {increment, decrement, reset} from './action';

class Counter extends Component{
    render(){
        const{counter, increment, decrement, reset} = this.props
        return (
            <div className='App'>
                <div>Counter {counter}</div>
                <div><button onClick={increment}>Increment</button></div>
                <div><button onClick={decrement}>Decrement</button></div>
                <div><button onClick={reset}>Reset</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counter: state
    }
}

const mapDispatcherToProps = (dispatch) => {
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatcherToProps) (Counter);