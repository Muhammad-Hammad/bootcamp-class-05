const CounterReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action){
        case 'INCREMENT':
            return state + 1
    }
}
export default CounterReducer;