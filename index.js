import { createStore } from './redux.js'

function reducer(state, action) {
    if (action.type === 'count') {
        return { ...state, counter: action.payload.counter };
    }

    return state;
}

function listener() {
    console.log(store.getState());
}

const store = createStore(reducer);

store.subscribe(listener);

store.dispatch({
    type: 'count',
    payload: {
        counter: 1
    }
});
