import React, { useContext} from 'react'
import counterContext from './CounterContext'

export default function Child() {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
           <h2>Child 1 Counter Context</h2>
            <h2>Counter Value is {counterValue[0]}</h2>
            <button onClick={()=>counterValue[1](++counterValue[0])}>Increment</button>
        </div>
    )
}
