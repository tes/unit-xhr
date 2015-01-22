function createMock(options) {
  options = options || {};
  var XMLHttpRequest = function() {};
  XMLHttpRequest.prototype.getAllResponseHeaders = options.getAllResponseHeaders || function() {};
  XMLHttpRequest.prototype.getResponseHeader = options.getResponseHeader || function() {};
  XMLHttpRequest.prototype.overrideMimeType = options.overrideMimeType || function() {};
  XMLHttpRequest.prototype.abort = options.abort || function() {};
  XMLHttpRequest.prototype.open = options.open || function() {};
  XMLHttpRequest.prototype.setRequestHeader = options.setRequestHeader || function() {};
  XMLHttpRequest.prototype.send = options.send || function() {};
  return XMLHttpRequest;
}

module.exports = {
  createMock: createMock
};
