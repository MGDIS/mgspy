/**
 * Create a spy function which tracks it's last execution
 * @param {any} toBeReturned : any value that the spy should return
 */
function makeSpy(toBeReturned) {
  return function spy() {
    spy.called = true;
    spy.lastArguments = arguments;
    return toBeReturned;
  };
}
