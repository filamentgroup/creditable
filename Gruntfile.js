module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON( "package.json" ),
		qunit: {
			all: [ "test/**/*.html" ]
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks( "grunt-contrib-qunit" );

	// Default task(s).
	grunt.registerTask( "test", [ "qunit" ] );
	grunt.registerTask( "default", [ "qunit" ] );

};