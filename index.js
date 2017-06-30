const { createStore } = require('redux');

const defaulState = { value: 0 };

const reducer = (state = defaulState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
};

const store = createStore(reducer);

console.log('TRUOC KHI DISPATCH: ' + store.getState().value);


store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'UP' });
store.dispatch({ type: 'DOWN' });

console.log('SAU KHI DISPATCH: ' + store.getState().value);

/*
    UP, DOWN
    Lam sao de tiep can gia tri cua state
    Lam sao thay doi duoc gia tri cua state
*/
