export default {
  addRequest(state, payload) {
    state.requests.push(payload);
    console.log(state);
  },
  setRequests(state, payload) {
    state.requests = payload;
  }
};