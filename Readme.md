# MgSpy

Simple spy function for unit testing

## Install
`npm install mgspy`

## Usage
```javascript
const makeSpy = require('mgspy');

// Tested function
function tested(callMe) {
  callMe("test");
}

it("Should call 'callMe' with one argument", () => {
  const mockCallMe = makeSpy();
  tested(mockCallMe);

  expect(mockCallMe.called).to.equal(true);
  expect(mockCallMe.lastArguments.length).to.equal(1);
  expect(mockCallMe.lastArguments[0]).to.equal("test");
})
```
