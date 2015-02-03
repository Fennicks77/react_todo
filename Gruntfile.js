module.exports = function(grunt){
	grunt.initConfig({
		jshint: {
			js: ['Gruntfile.js'],
			jsx: ['scripts/**/*.jsx']
		},

		react: {
			dynamic_mappings: {
				files: [{
					expand: true,
					cwd: './scripts',
					src: ['**/*.jsx'],
					dest: './build',
					ext: '.js'
				}]
			}
		},

		connect: {
			server: {
				keepalive: true,
				hostname: 'localhost',
				path: './'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jsxhint');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-contrib-connect');
};
