# Git workflow

Workflow will remain flexible for simple bug fixes, refactors, chores, and documentation changes since I am currently the only developer.

However, even simple commits made directly to dev should still follow the commit prefix convention. These commits will not be attached to a github issue (thus no issue # prefix). If I anticipate more than 2 or 3 small commits, a Git Hub Issue will be created and the full workflow will be followed.

These guidelines will continue to evolve over time as the project grows and in preparation for future contributors.

Features and more complex issues should follow the full workflow outlined below.

## Prefixes

feat → new feature
bug → bug fix
refactor → code change without behavior change
chore → tooling/config
docs → documentation
test → tests

Docs are currenltly simplified as notes in the root directory.

## Workflow - Start In Git Hub Issues

1. _Make an issue on github_

2. _Title the issue_ - starting with one of the above prefixes

- Then "-", followed by a short description
- IE: feat - create a client

3. _Assign the issue_ to yourself

4. _Hit Create_ After creating the issue, you will need to return and edit it shortly afterward to add the branch name as the first line of the description.

The issue number is required to create the branch name, so create the issue first, then use the generated issue number when creating the branch.

## Workflow - Create a branch on Git

1. _Create a branch_ -- as-> githubissue#-prefix-name (the name can be up to three words)

- IE: 111-feat-create-person-record

## Workflow - Back to Github interface

1. make sure you tag the issue with the appropriate tag from the tag list above.

- git branch --show-current

2. Put the git branch being used as the first line. If multiple branches, put them as they are created.

3. Write details about the issue. Write a checklist if applicable to break up tasks.

## Workflow - Git commits

1. _Commit messages_

Avoid combining unrelated tasks into a single commit. If a commit contains multiple unrelated changes, prefix it with wip: followed by a brief summary. Use WIP commits sparingly.

Commit smaller groups of related files and changes frequently. This makes it easier to review changes, identify issues, and debug problems.

It is not necessary to push to the remote repository with every local commit. Push changes periodically. However, commit small, discrete changes locally and often to create clear checkpoints during development.

During the final stages of a feature, especially while performing QA, making small layout adjustments, or polishing details before merging, WIP commits are more acceptable. However, continue to keep commits focused on related changes whenever possible.

A structured commit process helps organize thoughts, track progress, and make development easier to reason about. It also makes it easier to write the final commit details when merge --squashing.

It does not need to be perfect—the squash merge is where the final commit history for main will be created. However, maintaining these practices during development still provides value in maintaining clarity for the developer and reviewers. It does not need to be perfect—the squash merge is where the final commit history for main will be created.

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

Leave a space. Everything following the space is your description.

Review the commits from the branch and copy the meaningful parts into the final commit description as items in the summary.

In theory, all commits besides WIP commits, should make a good summary for the description. Review this, and make edits if necessary.

Include the created and changed files in the commit description.

Its ok to make the description more human readble. We often shorten commits to keep them short. But adjust grammer if necessary to be more clear.

Ensure to not include WIP commits in the final description.

Save and close.

Follow this format and order. See the example bellow for more clairity.

- Commit message (properly formatted)
- Summary of changes
- Rationale (optional; include when it provides useful context or improves clarity)
- changed files (copy from the text git provides and un-comment out.)

Example of a final commit:

feat(#2): add Git workflow documentation

Summary:

- Rename classes to improve consistency
- Add and remove component props -- to improve consistency -- to complete the compoenents unique API.
- Ensure ComponentPropsWithoutRef is used where native element props should be supported.

Rationale:

- These components were built incrementally as the project developed, allowing their APIs and patterns to be shaped by real usage. Now that their purpose and usage are clearer, they are being standardized before the project grows further and moves toward launch.

Changes to be committed:

modified: apps/cms/app/admin/(features)/TattooRequests.tsx
modified: apps/cms/app/admin/clients/create-client/page.tsx
created: apps/cms/app/admin/client

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
