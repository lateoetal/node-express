console.log('Before');
getUser(1, function(user) {
    getRepositories(user.gitHubUsername, (repo) => {
        console.log('Repo', repo);
    });
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'vuk'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting a repository from GitHub...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}