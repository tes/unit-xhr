# Simplest possible mock for XMLHttpRequest

In your tests (assuming you already have a window global mocked up):

```
var assert = require('assert');
var unitXhr = require('unit-xhr');
window.XMLHttpRequest = unitXhr.createMock({send: sendFn});
function sendFn(data) {
  assert(data.text, 'Raah');
}
```

Somewhere in your code under test, leave completely as normal:

```
var request = new window.XMLHttpRequest();
request.send({text:'Raah'});
```

The above examples assume you are using a pseudo window global, clearly you can also pass this mock constructor into your code as well vs register it as a global.
