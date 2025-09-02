#: git.sh

# Git is disributed version cotrol system.
# It has both CLI and GUI.
# Git now it the indistry standard.

## Advatages . . . . .
# Developers can work on the project at the same time.
# Can revert the changes.


## GitHub markdown . . . . .
# This great resource for writing README.md files in github.   https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


## Basic Usage . . . . . 
git init                                         # Initlize a new git repository.
git status                                       # View the staged/unstaged/other info files or directories.  | What's happening?
git add <file>                                   # Adds <file> to the staging area So git can track them.
git restore --staged <file>                      # Remove <file> from staging area.
git commit -m "massage"                          # Update the local repository with staged files.
git log                                          # Logs all commits and thier meta data.
git branch                                       # View all branchs existed on the repository.
git remote --verbose                             # View remote repositories attached to the locale repository.
git push <remote-repo> <branch>                  # Update remote repository with commited changes.
git pull <remote-repo> <branch>                  # sync local repo to remote repo. (fetch + merge)

git config --list                                # List the git config.
git config --global <attribute>                  # View the value of the attribute. --show-origin |e.g.  git config --global user.name
git config --global <attribute> "value"          # Set a value to attribute.                      |e.g.  git config --global user.name "example@gmail.com"
git config --global --edit                       # Open config on a file to edit.


## Public keys . . . . .
ssh-keygen -t rsa -b 4096 -C "email"             # Generate a public/private key with type RSA and 4096 bits It will ask for a password.
cat <path/to/public/key.pub>                     # Getting the public key.
shh -T git@github.com                            # Test and authenticat SHH connection.


## SSH connection . . . . .
git remote add origin <SHH-link>                 # Store SHH link in origin variable.  | Your pubic key must be added to github.
git push -u <origin> <branch>                    # Ordinary push. -u or --up-stream => (pull + push)


## Branching & merging . . . . .
git branch <branch-name>                         # Create new branch.
git checkout <branch-name>                       # Move head to <branch-name>.
git checkout -b <branch-name>                    # Create a branch and move to it.
git branch -d <branch-name>                      # Delete a branch. (safe delete) -D for Hard delete.
git branch -m <branch-new-name>                  # Rename a branch.
 

## Stashs . . . . .
git stash                                        # Stash (save) changes to the stash stack now you can do what ever you want.
git stash save "message"                         # Stash with message. (prefered) 
git stash list                                   # View the stash stack.
git stash show stash@{<stash-number>}            # Show the stash.
git stash pop                                    # Drop the last stashed files from stash stack to project directory.
git stash pop stash@{<stash-number>}             # Drop spesific stach.
git stash drop                                   # Deletes last stash.   | add stash@{<stash-number>}
git stash clear                                  # Clear all stash stack.  Remove all stashs. 



## Undo-ing . . . . .
#|> reset  --> Rewrites history. The commits after the reset point disappear from the branch.
#|> revert --> Preserves history. Nothing is deleted; the timeline stays linear and intact.
# >> MODES <<           :> works for reset and revert.
#> --soft               -> keeps staged files.
#> --hard               -> removes staged files.
#> --mixed (default)    -> unstages staged files.
git revert 
git reset <commit-hash>                  # Moves the HEAD pointer to <commit-hash> and REMOVES commits after it.
git revert <commit-hash>                 # Moves the HEAD pointer to <commit-hash> without removing commits after it.
git push <origin> <branch> --force       # Needed force to update remote repository.


## Tags . . . . .
git tag                                  # List existing tags.
git tag <versoin>                        # Create a tag linked to a commit.
git tag -a <version> -m <massage>        # Create anotated tag contains a massage. 
git tag -d <version>                     # Delete a tag.
git push <origin> <tag-version>          # Pushing a tag.
git push origin --delete <version>       # Delete tag from remote repository.