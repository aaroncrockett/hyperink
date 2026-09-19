# Git workflow

Workflow will remain flexible for simple bug fixes, refactors, chores, and documentation changes since I am currently the only developer.

However, even simple commits made directly to dev should still follow the commit prefix convention.

Issues squash merged from a branch follow this convention:

(feat/bug/refine/*etc)((#00)): `commit message`
`followed by description if the issue is complex enough`

Small commits directly to dev will folow this convention:

(feat/bug/*etc): `commit message`

These small commits will not be attached to a github issue. If I anticipate more than 2 or 3 small commits, a Git Hub Issue will be created and the full workflow will be followed.

## Prefixes

feat → new feature
bug → bug fix
refactor → code change without behavior change
style - styling only: new or refinements
chore → tooling/config
copy - copy/text only
docs → documentation
test → tests

Docs are currenltly simplified as notes in the root directory.

## Workflow - Start In Git Hub Issues

1. _Make an issue on github_

2. _Title the issue_ - starting with one of the above prefixes

3. _Assign the issue_ to yourself

## Workflow - Create a branch on Git

1. _Create a branch_ -- as-> githubissue#-prefix-name (the name can be up to three words)

- IE: 111-feat-create-person-record

## Workflow - Back to Github interface

1. Put the git branch being used as the first line. If multiple branches, put them as they are created.

2. Write details about the issue. Write a checklist if applicable to break up tasks.

## Workflow - Git commits

1. _Commit messages_

Avoid combining unrelated tasks into a single commit. On large issues it is OK to up WIP as a solo dev, just ensure the final squash merge clearly describes changes. Avoid wip commits when in teams. Never use wip commits when working dev. Never work directly on dev if there is more than one developer. Never work on main.

Commit smaller groups of related files and changes frequently.

A structured commit process helps organize thoughts, track progress, and make development easier to reason about. It also makes it easier to write the final commit details when merge --squashing.

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

Ensure to not include WIP commits in the final description.

Save and close.

Follow this format and order. See the example bellow for more clairity.

- Commit message (properly formatted)
- Summary of changes
- Rationale (optional; include when it provides useful context or improves clarity)

Example of a final commit:

feat(#2): add Git workflow documentation

Summary:

- Rename classes to improve consistency
- Add and remove component props -- to improve consistency -- to complete the compoenents unique API.
- Ensure ComponentPropsWithoutRef is used where native element props should be supported.

Rationale:

- These components were built incrementally as the project developed, allowing their APIs and patterns to be shaped by real usage. Now that their purpose and usage are clearer, they are being standardized before the project grows further and moves toward launch.

6. Push dev

- git push

7. Delete the feature branch

Local:

git branch -d 142-client-create

Remote:

git push origin --delete 142-client-create

8. Later: How to find it

feat(#142): create client creation flow

you can always find it:

git log --all --grep="#142"

or:

git log --oneline --all --grep="#142"

Result:

abc123 feat(#142): create client creation flow
