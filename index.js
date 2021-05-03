import { createStore } from './redux.js'

function reducer(state, data) {
    if (data.type === 'count') {
        return { ...state, counter: data.payload.counter };
    }

    return state;
}

const store = createStore(reducer);

store.dispatch({
    type: 'count',
    payload: {
        counter: 1
    }
});
