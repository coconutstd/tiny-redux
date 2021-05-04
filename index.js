import { createStore } from './redux.js'

const COUNTER = 'count';
const FETCH = 'fetch';

const middleware1 = (store) => (dispatch)  => (action) => {
    console.log('mid 1');
    dispatch(action);
}

const middleware2 = (store) => (dispatch)  => (action) => {
    console.log('mid 2');
    dispatch(action);
}

function reducer(state, action) {
    if (action.type === COUNTER) {
        return { ...state, counter: action.payload.counter };
    }

    return state;
}

function listener() {
    console.log(store.getState());
}

function actionCreator(type, payload) {
    return {
        type,
        payload,
    }
}

const store = createStore(reducer, [middleware1, middleware2]);

store.subscribe(listener);

store.dispatch(actionCreator(COUNTER, { counter: 2}));

function counter(data) {
    store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 1});
