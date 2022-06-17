/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git is a version control system that allows individuals and teams to send snapshots of their code to a online folder that tracks the changes between the snapshots, allows the individual or team to backtrack if necessary. These snapshots are put into a repository.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'Github is an internet provider for software development and version control using git. Github is where the repository is located that git sends snapshots of the code you add.'

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = 'Git init is the first step in setting up a local repository. This command, when executed, initializes a local repository inside of the folder you are in.'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = 'The git clone command creates a copie of an exisiting repository to be used at another file location.'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = `The git status command displays the state of the current working directory. It lets you see which changes have been staged, which haven't and which files aren't being tracked by git.`

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = `The git add command adds the files to be tracked by git. This must always be done in order to commit and push the code.`
let gitAddCode = `git add -A`

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = `The git commit command creates a snapshot of the files that are currently being tracked. Adding the -m allows you to add a message to be sent with the files in a "message" format.`
let gitCommitCode = `git commit -m "initial commit"`


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = `The git push command is used to send a local repository, made by 'git init', to a remote repository, like one made on GitHub.`