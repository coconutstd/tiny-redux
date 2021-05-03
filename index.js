import { createStore } from './redux.js'

function updater(state, data) {
    state = data;
}

const store = createStore(updater);

store.doUpdate({ counter: 1});

// 왜 undefined가 나올까?
console.log(store.getState());
