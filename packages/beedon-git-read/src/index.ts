import {execFile} from 'child_process';

export function getGitCommits() {
	const gitLogStream = execFile('git', ['log'], {
		maxBuffer: Infinity
	});

	gitLogStream.stdout.on('data', function(data) {
		console.log('onData3');
	});
}
