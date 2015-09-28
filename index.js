function createMock(options) {
  options = options || {};
  var XMLHttpRequest = function() {};
  XMLHttpRequest.prototype.getAllResponseHeaders = options.getAllResponseHeaders || function() {};
  XMLHttpRequest.prototype.getResponseHeader = options.getResponseHeader || function() {};
  XMLHttpRequest.prototype.overrideMimeType = options.overrideMimeType || function() {};
  XMLHttpRequest.prototype.abort = options.abort || function() {};
  XMLHttpRequest.prototype.open = options.open || function() {};
  XMLHttpRequest.prototype.setRequestHeader = options.setRequestHeader || function() {};
  XMLHttpRequest.prototype.send = function() {
    if (!options.send) { return; }
    // Pass all the callers args through to the callback, with 'this' appended.
    // Allows tests to control onreadystatechange, among other things
    var args = Array.prototype.slice.call(arguments);
    args.push(this);
    options.send.apply(null, args);
  };

  return XMLHttpRequest;
}

module.exports = {
  createMock: createMock
};
