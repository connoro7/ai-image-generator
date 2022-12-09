# Git: Getting Started and Fundamental Commands

<!-- TOC -->

- [Git: Getting Started and Fundamental Commands](#git-getting-started-and-fundamental-commands)
    - [Create a Github Account](#create-a-github-account)
    - [Install git](#install-git)
    - [Add global config settings](#add-global-config-settings)
        - [Setting up SSH instead of HTTPS](#setting-up-ssh-instead-of-https)
    - [git init: Initialize git in current folder](#git-init-initialize-git-in-current-folder)
    - [Core Git Commands](#core-git-commands)
        - [git --help: Print help pages for desired command](#git---help-print-help-pages-for-desired-command)
        - [git status: Check the status of all files in the local git-enabled directory](#git-status-check-the-status-of-all-files-in-the-local-git-enabled-directory)
        - [git log: View commit history of the current local git-enabled directory](#git-log-view-commit-history-of-the-current-local-git-enabled-directory)
        - [git fetch, merge, pull: How to Fetch & Merge OR Pull From a Remote Branch](#git-fetch-merge-pull-how-to-fetch--merge-or-pull-from-a-remote-branch)
        - [git branch: How to Create a new branch](#git-branch-how-to-create-a-new-branch)
            - [How to List all current branches local and remote](#how-to-list-all-current-branches-local-and-remote)
            - [How to Delete a Local Branch](#how-to-delete-a-local-branch)
        - [git checkout: How to Move to Another Local Branch](#git-checkout-how-to-move-to-another-local-branch)
        - [git diff: How to See the Changes You've Made](#git-diff-how-to-see-the-changes-youve-made)
        - [git add: How to Add a file to staging area](#git-add-how-to-add-a-file-to-staging-area)
        - [git commit: How to Commit all files currently in staging](#git-commit-how-to-commit-all-files-currently-in-staging)
        - [git reset: How to Uncommit Files You Just Committed](#git-reset-how-to-uncommit-files-you-just-committed)
        - [git push: How to Push all commits on HEAD to remote branch](#git-push-how-to-push-all-commits-on-head-to-remote-branch)
    - [Basic Workflow Summary](#basic-workflow-summary)
    - [Additional Resources](#additional-resources)

<!-- /TOC -->

## Create a Github Account

[https://github.com/join](https://github.com/join)

Make your GitHub username something professional, your username will show up on resumes, your LinkedIn, etc

## Install git

Open your terminal and type:

```sh
$ git -v
```

If git is not found, go here: [https://git-scm.com/downloads](https://git-scm.com/downloads)

or for Windows: [https://gitforwindows.org/](https://gitforwindows.org/)

or for Linux: `sudo apt install git-all`

## Add global config settings

Add your username to your global `git config` settings

```sh
$ git config —global -e 
# If you're unfamiliar with command line editors:
# type :q to quit without saving changes
# type :w to save changes
# type :wq to save and quit
# In case of emergency, ping someone in Slack ;) CLI editors are notoriously difficult to start using
```

If you aren't familiar with CLI editors, you can also add your credentials directly from the command line:

```sh
$ git config --global user.name "YOUR_USERNAME"
$ git config --global user.email "email@server.com"
$ git config --global --list # To check the info you just provided
```

### Setting up SSH instead of HTTPS

[About SSH w/ Git](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)

[Check for existing SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)

[Generate new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[Add a new SSH key to Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

[Verify SSH connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection)

[More about why we use `ed25519` "Elliptic Curve" AKA "Twisted Edwards Curve" cryptography](https://blog.g3rt.nl/upgrade-your-ssh-keys.html#generate-your-new-sexy-ed25519-key)

## `git init`: Initialize git in current folder

```sh
$ git init # creates a hidden folder in the current directory called `.git`
```

For this case, we'll be using the following aliases:

```sh
REMOTE=origin
REPO=https://github.com/connoro7/ai-image-generator.git
```

> or if you're using SSH:
> `REPO=git@github.com:connoro7/ai-image-generator.git`

```sh
$ git remote add $REMOTE $REPO
$ git remote -v
$ git fetch --all --prune -v
$ git pull $REMOTE master
```

## Core Git Commands

### `git --help`: Print help pages for desired command

```sh
$ git COMMAND -h
# OR 
$ git COMMAND --help
```

> Example:
>
> ```sh
> $ git log -h
> # outputs:
> usage: git log [<options>] [<revision-range>] [[--] <path>...]
>   or: git show [<options>] <object>...
>
>    -q, --quiet           suppress diff output
>    --source              show source
>    --use-mailmap         use mail map file
>    --mailmap             alias of --use-mailmap
>    --clear-decorations   clear all previously-defined decoration filters
>    --decorate-refs <pattern>
>                          only decorate refs that match <pattern>
>    --decorate-refs-exclude <pattern>
>                          do not decorate refs that match <pattern>
>    --decorate[=...]      decorate options
>    -L <range:file>       trace the evolution of line range <start>,<end> or function :<funcname> in <file>
> ```

### `git status`: Check the status of all files in the local git-enabled directory

```sh
$ git status
# or with my preferred options:
$ git status -s -b   # -s for concise, -b for branch information
```

### `git log`: View commit history of the current local git-enabled directory

```sh
# Try all of these out! Each set of options has their own uses and niche
$ git log # basic logging
$ git log --decorate --abbrev-commit --pretty=oneline -10 # basic logging, but more readable
$ git log --decorate --abbrev-commit --graph # tree-graph logging
$ git log --decorate --abbrev-commit --graph --pretty=oneline # tree-graph logging, but more readable
```

### `git fetch, merge, pull`: How to Fetch & Merge OR Pull From a Remote Branch

> In short `fetch + merge === pull`
>
> In this case, we'll be fetching & merging / pulling from our remote `master` branch to our local working branch BRANCH-NAME

```sh
# To fetch, you can use:
$ git fetch --all --prune -v
# Normally when fetch, I just use:
$ git fetch origin master:master -v
# To merge changes from origin:master to your current branch BRANCH-NAME:
$ git checkout BRANCH-NAME
$ git merge master

# Usually I'll just use pull to do all of that work in one motion:
$ git checkout BRANCH-NAME
$ git pull origin master
```

### `git branch`: How to Create a new branch

> ❗️ Avoid working in `master` - you can safely work in a separate branch to avoid committing directly to `master`, thereby raining havoc and hellfire upon your coworkers.

```sh
$ git branch BRANCH-NAME
$ git checkout BRANCH-NAME
$ git pull origin master
```

#### How to List all current branches (local and remote)

```sh
$ git branch -a
```

#### How to Delete a Local Branch

```sh
$ git branch -d BRANCH-NAME # Deletes a local branch. Safe to use, will not delete a branch with uncommitted changes
$ git branch -D BRANCH-NAME # Force-deletes a local branch. Unsafe to use, will delete a branch with uncommitted changes
```

### `git checkout`: How to Move to Another Local Branch

```sh
$ git checkout BRANCH-NAME
```

### `git diff`: How to See the Changes You've Made

```sh
$ git diff
$ git diff --staged # Only display changes for files that are currently staged for commit
```

### `git add`: How to Add a file to staging area

```sh
# After you've made your changes...
$ git add testFile.js # adding a single file
# OR
$ git add --all # adding all files
```

### `git commit`: How to Commit all files currently in staging

```sh
$ git commit -m "MESSAGE DESCRIBING WHAT YOU\'VE DONE" # Don't forget to escape special characters: \' \" \` etc. 
```

### `git reset`: How to Uncommit Files You Just Committed

```sh
$ git reset HEAD~1
# Then make your changes and commit those files again
```

### `git push`: How to Push all commits on HEAD to remote branch

```sh
$ git push origin BRANCH-NAME
# Click the link in the output text that pops up to create a PR (Pull Request)
```

> Please do not push directly to master with `git push origin master`, this will break things
> Pushing to BRANCH-NAME allows us to keep PRs siloed and makes code reviews


## Basic Workflow Summary

1. Init repo

2. `fetch`/`merge` or `pull` from `origin:master`

`$ git pull origin master`

3. Create new local branch

`$ git branch BRANCH-NAME`

4. Checkout new local branch

`$ git checkout BRANCH-NAME`

5. Make your changes

```js
// make changes to your code goes here
```

6. Save your files like you would normally (`Ctrl + S` or `Cmd + S`)

7. Check the status of your working directory

`$ git status`
`$ git diff`

8. Add changed files to staging

`$ git add --all` or `$ git add FILENAME.js`

9. Commit staged files

`$ git commit -m "COMMIT MESSAGE"`

10. Push staged files to origin:BRANCH-NAME

`$ git push origin BRANCH-NAME`

11. `Ctrl+Click`/`Cmd+Click` the link in the `push` output message to create a `PR` (Pull Request) directly on Github


## Additional Resources

- [Git SCM](https://git-scm.com/docs/) Git Documentation
- [Oh Shit Git](https://ohshitgit.com) Break glass in case of emergency
- [error: gpg failed to sign the data fatal: failed to write commit object](https://stackoverflow.com/questions/39494631/gpg-failed-to-sign-the-data-fatal-failed-to-write-commit-object-git-2-10-0) Common SSH key error, I usually have to open this page every ~6 months
- [Learn the Basics of Git in Under 10 Minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)
- [Walkthrough of Basic Git Commands](https://dev.to/connoro7/git-basics-5el1)
- [Merging Local Git Branches](https://dev.to/connoro7/merging-local-git-branches-4bc5)
