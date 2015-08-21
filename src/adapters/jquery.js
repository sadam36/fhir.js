// Generated by CoffeeScript 1.9.3
(function() {
    var mkFhir = require('../fhir');

    $ = jQuery;

    var adapter = {
        http: function(q) {
            var ret = $.Deferred();
            var opts = {
                type: args.method,
                url: args.url,
                headers: args.headers,
                dataType: "json",
                contentType: "application/json",
                data: args.data || args.params
            };
            $.ajax(opts)
              .done(function(data, status, xhr) {ret.resolve({data: data, status: status, headers: xhr.getResponseHeader, config: q});})
              .fail(function(err) {ret.reject({error: err, data: err, config: q});});
            return ret;
        }
    };

    module.exports = function(config) {
      return mkFhir(config, adapter);
    };

}).call(this);
