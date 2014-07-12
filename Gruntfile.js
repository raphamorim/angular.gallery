/*globals module: true */
module.exports = function(grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({
		concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                        "assets/js/angular/angular.js",
                        "assets/js/angular/angular-route.js",
                        "assets/js/app.js",
                        "assets/js/services.js",
                        "assets/js/controllers.js",
                        "assets/js/filters.js",
                        "assets/js/directives.js"
                    ],
                dest: 'assets/js/angularGallery.js',
            }
		}
    });

	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.registerTask("default", ["concat"]);
};
