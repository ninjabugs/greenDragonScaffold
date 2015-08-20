/**
 * @ngdoc service
 * @name scaffold.Apform
 * @description
 * # Apform
 * Service in the scaffold.
 */
angular.module('scaffold')
    .service('Apform', function ()
    {
        'use strict';

        // AngularJS will instantiate a singleton by calling "new" on this function
        /*
         *	alpha: /^[a-zA-Z]+$/
         *  alpha_numeric /^[a-zA-Z0-9]+$/
         *  phone \d{3}[\-]\d{3}[\-]\d{4}
         *  postal [A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]
         */

        var patt = {
        	alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            phone: /^\d{3}[\-]\d{3}[\-]\d{4}$/,
            postal: /^[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$/,
        };

        var api = {
        	submit: function() {
        		alert("submitted!");
        	}
        };

        return [patt, api];
    });