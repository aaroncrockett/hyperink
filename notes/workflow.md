# Git workflow

## Prefixes

feat → new feature
fix → bug fix
refactor → code change without behavior change
chore → tooling/config
docs → documentation <--- currently I am using notes directory and don't have full docs. Work in here should be docs.
test → tests

## Workflow - Start In Git Hub Issues

1. *Make an issue on github*

2. *Title the issue* -  starting with one of the above prefixes

- Then ":", followed by a short description
- IE: feat: create a client

3. *Assign the issue* to yourself

4. *Hit Create* or put in a short filler description.  Regardless you will have to come back and edit the issue shortly after creation by putting the branch name as the first line. You will need the issue number created for you before you can create this branch. So hit create first. 

## Workflow - Create a branch on Git

1. *Create a branch* -- as-> githubissue#-prefix-name (the name can be up to three words)

- IE: 1-feat-create-person-record

## Workflow - Back to Github interface

1. make sure you tag the issue with the appropriate tag from the tag list above.

- git branch --show-current

2. Put the git branch being used as the first line. If multiple branches, put them as they come. (unsure if I will allow this).

3. Write details about the issue. Write a checklist if applicable to break up tasks.

## Workflow - Git commits

1. *Commit messages* -- When committing: attempt related tasks per commit. For instance, one commit might contain form state. Create a title, and try to reduce it to 1 to 3 words

- Then begin your commit with the title, followed by ":". Followed by a short description for the main commit message
- No need for descriptions
- IE: Git commit -m "form-state:  handle complicated state based on url param
- If your commit is composed of unrelated tasks, or tasks related to a previous commit, put "wip" as the commit message. 
- If it is related to a previous task, put "wip(prev-task)" or "wip(prev-trask): short message"
- IE: Git commit -m "wip(form-state): loose ends missed from pervious commit"
- The reasoning behind this is that we will squash merge. Commit messages that are wip should not be in the final commit description. I want the description to be meaningful and descrdiptive.
- WIP commits are definatetly OK and expected when, refactoring, tweaking designs, bugs, QA before finishing -- etc (within a feature branch - they may be less necessary in other branch types).
- This process also helps to order thoughts and tasks. It doesn't need to be perfect. But try! :D 

## Workflow: Squashing

Assume:

You are finished working on branch: 142-client-create
You want to merge it into dev

1. Push your branch

- git add .
- git commit -m "wip(form-state): loose ends"
- git push

2. Switch to dev

- git checkout dev

3. Update dev

- git fetch
- git pull

4. Squash merge your branch

- git merge --squash 142-client-create

5. Create your final commit message

- git commit (ensure to not put -m so you can make a message in your editor.)

Your editor opens.

The first line is the commit message. 
follow this convention (same as the branch name) feat(#142): create client admin page

Leave a space.  Everything following the space is your description.

Review the commits from the branch and copy the meaningful parts into the final commit description.

In theory, all commits besides WIP commits, should make a good summary for the description. Review this, and make edits if necessary.

Include the created and changed files in the commit description.

Its ok to make the description more human readble. We often shorten commits to keep them short. But adjust grammer if necessary to be more clear.

Ensure to not include WIP commits in the final description.

Save and close.

Follow this format and order. See the example bellow for more clairity.

- commit message properly formated
- space
- created:
- space
- modified
- space
- summary

Example of final commit:

feat(#2): add Git workflow documentation

Created:
- notes/workflow.md

Modified:
- README.md

Summary:
- document issue workflow
- document branching strategy
- document squash merge process

6. Push dev

- git push

7. Delete the feature branch

Local:

git branch -d 142-client-create

Remote:

git push origin --delete 142-client-create

8. Later: How to find it

Because you put the issue number in the squash commit:

feat(#142): create client creation flow

you can always find it:

git log --all --grep="#142"

or:

git log --oneline --all --grep="#142"

Result:

abc123 feat(#142): create client creation flow