const round = (number) => Math.round(number + 100) / 100;

const monitorReducerEnhancer =
  (createStore) => (reducer, initialState, enhancer) => {
    const monitorReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      return newState;
    };

    return createStore(monitorReducer, initialState, enhancer);
  };

export default monitorReducerEnhancer;
