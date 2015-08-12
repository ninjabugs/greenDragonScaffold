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
            $scope.application = [
        /* applicant */
                { 
                    label: 'Applicant\'s Information',
                    type: 'title', 
                },
                {
                    label: 'Name',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'Address',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'City',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'Province',
                    size1: 'large-12 colums',
                    options: ['Alberta', 'British columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',  'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
                    type: 'drop',
                },
                { /* TODO HTML5 'dat bitch? */
                    label: 'Postal Code',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                { /* TODO HTML5 'dat bitch? */
                    label: 'Phone Number',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                { /* TODO HTML5 'dat bitch. */
                    label: 'Date of Birth',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                { /* TODO HTML5 'dat bitch. */
                    label: 'Email',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                { /* TODO second input needed */
                    label: 'ID Presented (2)',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
            /* Practitioner */
                { 
                    label: 'Health Practitioner\'s Information',
                    type: 'title', 
                },
                {
                    label: 'Name:',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'Practitioner Type:',
                    size1: 'large-12 colums',
                    options: ['MD', 'ND', 'TCM', 'Nurse Practitioner'],
                    type: 'drop',
                },
                {
                    label: 'Address',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'City',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                {
                    label: 'Province',
                    size1: 'large-12 colums',
                    options: ['Alberta', 'British columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',  'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'],
                    type: 'drop',
                },
                {
                    label: 'Postal Code',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
                { /* TODO HTML5 'dat bitch? */
                    label: 'Practitioner\'s Phone Number',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'text',
                },
            /* Optional */
                { 
                    label: 'Optional',
                    type: 'title', 
                },
                {
                    label: 'Are you currently taking any prescription pharmeceuticals?',
                    size1: 'large-12 colums',
                    options: ['No', 'Yes'],
                    type: 'drop',
                },
                {
                    label: 'If you answered "yes", please list your drug regimen and any side effects:',
                    size1: 'large-12 colums',
                    type: 'textarea',
                },
                {
                    label: 'How many years have you used cannabis as a medicine?',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'number',
                },
                {
                    label: 'How does cannabis affect your symptoms?',
                    size1: 'large-12 colums',
                    type: 'textarea',
                },
                {
                    label: 'How many grams of cannabis do you use per day?',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'number',
                },
                {
                    label: 'How many times do you use cannabis per day?',
                    size1: 'small-8',
                    size2: 'small-3 colums',
                    size3: 'small-9 colums',
                    type: 'number',
                },
                {
                    label: 'Does this dosage alleviate your symptoms?',
                    size1: 'large-12 colums',
                    options: [null, 'Yes', 'No'],
                    type: 'drop',
                },


            ];
        }
    };
});