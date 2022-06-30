module.exports = {
	apps: [{
		name: 'SudoBot',
		script: 'index.js',
		watch: true,
		ignore_watch: ['node_modules'],
		env: {
			'TZ': 'Australia/NSW',
		},
	}],
};