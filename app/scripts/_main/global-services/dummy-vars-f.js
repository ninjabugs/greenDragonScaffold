/**
 * @ngdoc service
 * @name scaffold.DummyVars
 * @description
 * # DummyVars
 * Factory in the scaffold.
 */
angular.module('scaffold')
    .factory('DummyVars', function ()
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var dummy = {
            oneWord: 'test',
            shortString: 'Lorem ipsum dolor sit amet, deserunt principes per in, omnis saperet phaedrum cu ius. Has ex repudiare consectetuer. Ei per dico legendos erroribus. Luptatum intellegat scriptorem has in, et falli veniam primis nec, no ius accumsan lucilius voluptaria. Vim partem suscipit disputationi no, est sint verterem ne. Ut has iisque mentitum.',
            longString: 'Lorem ipsum dolor sit amet, deserunt principes per in, omnis saperet phaedrum cu ius. Has ex repudiare consectetuer. Ei per dico legendos erroribus. Luptatum intellegat scriptorem has in, et falli veniam primis nec, no ius accumsan lucilius voluptaria. Vim partem suscipit disputationi no, est sint verterem ne. Ut has iisque mentitum. Vis aeque iusto consul ut. Equidem impedit liberavisse in vix, argumentum consectetuer vim id. Eos utamur veritus inciderint ea, nec ne odio nibh, no appetere gubergren per. Qualisque neglegentur definitionem sea ut. Vix unum exerci maiorum te. Porro ullum nam ei, ei harum accumsan disputando usu. Nonumy graeci percipitur vim an, convenire adipiscing in duo, eirmod veritus mea et. Et sit saepe fastidii constituam, no elitr prompta vix. Cu cum stet nonumes voluptatibus. Verear appareat senserit ne est, ne error luptatum reprimique est. Brute facilisi adipisci mel at, impetus debitis id sed. Putant alterum pri ut, ius an quem mollis. Nam graecis disputationi ei, est vitae deleniti atomorum ut. Pri ne movet latine similique, nam pericula tractatos ut, nonumes gubergren ius te. Pri dictas corpora noluisse ad. Mel prima audiam vituperata te. Ut duo ponderum sensibus petentium, doming dissentiunt sit ne. Cu pri euripidis assentior, nam dicunt epicurei ponderum ne, per in quis molestie indoctum. Putant oblique oportere id pri.',
            number: 12345,
            shortArray: ['test1', 'test2', 'test3'],
            longArray: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test8', 'test9', 'test10',],
            simpleObject: {property1: 'property1 here', property2: ['test1', 'test2', 'test3']}
        };

        return dummy;
    });