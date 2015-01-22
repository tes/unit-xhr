'use strict';

var expect = require('expect.js');
var unitXhr = require('../index');

describe('Mock XHR', function() {

    describe('Can create mock object', function () {

      it('that allows mock functions to be supplied', function() {

         var output = {};
         var options = {
            getAllResponseHeaders: function() { output.getAllResponseHeaders = true; },
            getResponseHeader: function() { output.getResponseHeader = true; },
            overrideMimeType: function() { output.overrideMimeType = true; },
            abort: function() { output.abort = true; },
            open: function() { output.open = true; },
            setRequestHeader: function() { output.setRequestHeader = true; },
            send: function() { output.send = true; }
          }

          var mockConstructor = unitXhr.createMock(options);
          var mock = new mockConstructor();

          mock.getAllResponseHeaders();
          mock.getResponseHeader();
          mock.overrideMimeType();
          mock.abort();
          mock.open();
          mock.setRequestHeader();
          mock.send();

          expect(output.getAllResponseHeaders).to.be(true);
          expect(output.getResponseHeader).to.be(true);
          expect(output.overrideMimeType).to.be(true);
          expect(output.abort).to.be(true);
          expect(output.open).to.be(true);
          expect(output.setRequestHeader).to.be(true);
          expect(output.send).to.be(true);

      });

    it('that has default functions for each method', function() {

         var output = {};

          var mockConstructor = unitXhr.createMock();
          var mock = new mockConstructor();

          mock.getAllResponseHeaders();
          mock.getResponseHeader();
          mock.overrideMimeType();
          mock.abort();
          mock.open();
          mock.setRequestHeader();
          mock.send();

      });

    });
});
