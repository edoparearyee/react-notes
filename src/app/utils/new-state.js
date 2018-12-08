export default function newState(state, data) {
  return {
    ...state,
    ...data,
  };
}
