import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

export default function Child2() {

    let [state, dispatch] = useReducer(CounterReducer,1)
    console.log(state)
    return (
        <div>
            <h2>Child 2 Counter Reducer</h2>
            <h2>Counter Value is {state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>Reducer Increment</button>
        </div>
    )
}
