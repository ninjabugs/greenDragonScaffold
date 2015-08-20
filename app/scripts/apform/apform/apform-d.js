'use strict';

/**
* @ngdoc directive
* @name scaffold.directive:apform
* @description
* # apform
*/
angular.module('scaffold')
.directive('apform', function ()
{
    return {
        templateUrl: 'scripts/apform/apform/apform-d.html',
        
        restrict: 'EA',
        scope: {

        },
        link: function (scope, el, attrs)
        {

        },
        controller: function ($scope, Apform, DummyVars)
        {
            $scope.dummy = DummyVars;
            $scope.api = Apform[1];
            $scope.patt = Apform[0];
            $scope.application = [
        /* applicant */
        /* notes: required: false = no required property
         *        alpha: /^[a-zA-Z]+$/
         *        alpha_numeric /^[a-zA-Z0-9]+$/
         *        phone \d{3}[\-]\d{3}[\-]\d{4}
         *        postal [A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]
         */
                { 
                    label: 'Applicant\'s Information',
                    type: 'title', 
                },
                {
                    label: 'Name',
                    model: 'clientName',
                    required: true,
                    pattern: $scope.patt.alpha,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'Address',
                    model: 'clientAddress',
                    required: true,
                    pattern: $scope.patt.alpha_numeric,
                    error: 'Valid with letters and numbers only',
                    type: 'text',
                },
                {
                    label: 'City',
                    model: 'clientCity',
                    required: true,
                    pattern: $scope.patt.alpha,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'Province',
                    model: 'clientProvince',
                    options: ['Alberta', 'British columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',  'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
                    required: true,
                    type: 'drop',
                },
                {
                    label: 'Postal Code',
                    model: 'clientPostalCode',
                    required: true,
                    pattern: $scope.patt.postal,
                    error: 'Valid with A0A 0A0 format only, including space',
                    type: 'text',
                },
                {
                    label: 'Phone Number',
                    model: 'clientPhone',
                    required: true,
                    pattern: $scope.patt.phone,
                    error: 'valid with 123-456-7890 format only, incding dash',
                    type: 'text',
                },
                {
                    label: 'Date of Birth',
                    model: 'clientDateOfBirth',
                    required: true,
                    type: 'date',
                },
                {
                    label: 'Email',
                    model: 'clientEmail',
                    required: true,
                    type: 'email',
                },
                {
                    label: 'ID Presented (1)',
                    model: 'clientID1',
                    required: true,
                    pattern: $scope.patt.alpha_numeric,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'ID Presented (2)',
                    model: 'clientID2',
                    required: true,
                    pattern: $scope.patt.alpha_numeric,
                    error: 'Valid with letters only',
                    type: 'text',
                },
            /* Practitioner */
                { 
                    label: 'Health Practitioner\'s Information',
                    type: 'title', 
                },
                {
                    label: 'Name:',
                    model: 'doctorName',
                    required: true,
                    pattern: $scope.patt.alpha_numeric,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'Practitioner Type:',
                    model: 'doctorType',
                    options: ['MD', 'ND', 'TCM', 'Nurse Practitioner'],
                    required: true,
                    type: 'drop',
                },
                {
                    label: 'Address',
                    model: 'doctorAddress',
                    required: true,
                    pattern: $scope.patt.alpha_numeric,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'City',
                    model: 'doctorCity',
                    required: true,
                    pattern: $scope.patt.alpha,
                    error: 'Valid with letters only',
                    type: 'text',
                },
                {
                    label: 'Province',
                    model: 'doctorProvince',
                    options: ['Alberta', 'British columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',  'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
                    required: true,
                    type: 'drop',
                },
                {
                    label: 'Postal Code',
                    model: 'doctorPostalCode',
                    required: true,
                    pattern: $scope.patt.postal,
                    error: 'Valid with A0A 0A0 format only, including space',
                    type: 'text',
                },
                {
                    label: 'Practitioner\'s Phone Number',
                    model: 'doctorPhone',
                    required: true,
                    pattern: $scope.patt.phone,
                    error: 'valid with 123-456-7890 format only, incding dash',
                    type: 'text',
                },
            /* Optional */
                { 
                    label: 'Optional',
                    type: 'title', 
                },
                {
                    label: 'Are you currently taking any prescription pharmeceuticals?',
                    model: 'pharmeceuticals',
                    required: false,
                    options: ['No', 'Yes'],
                    type: 'drop',
                },
                {
                    label: 'If you answered "yes", please list your drug regimen and any side effects:',
                    model: 'pharmeSideEffects',
                    required: false,
                    type: 'textarea',
                },
                {
                    label: 'How many years have you used cannabis as a medicine?',
                    model: 'yearsUsing',
                    required: false,
                    type: 'number',
                },
                {
                    label: 'How does cannabis affect your symptoms?',
                    model: 'cannabisSideEffects',
                    required: false,
                    type: 'textarea',
                },
                {
                    label: 'How many grams of cannabis do you use per day?',
                    model: 'gramsPerDay',
                    required: false,
                    type: 'number',
                },
                {
                    label: 'How many times do you use cannabis per day?',
                    model: 'timesPerDay',
                    required: false,
                    type: 'number',
                },
                {
                    label: 'Does this dosage alleviate your symptoms?',
                    model: 'symptomAlleviate',
                    required: false,
                    options: ['Yes', 'No'],
                    type: 'drop',
                },


            ];
        }
    };
});