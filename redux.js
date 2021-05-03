export function createStore(updater) {
    let state;

    function doUpdate(data) {
        updater(state, data);
    }

    function getState() {
        return state;
    }

    return {
        doUpdate,
        getState,
    }
}
