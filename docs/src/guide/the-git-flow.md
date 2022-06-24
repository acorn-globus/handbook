---
tags:
    - tech
---

# The Git Flow

When working on a project it's going to be version managed 100% of the times and the version control that we use is Git mostly. The Git respository could be hosted anywhere including Github, Gitlab or Bitbucket.

You might already know the git flow from online reading or something that you used in your pervious organisation. This is a presented with the aim to give you clarity on how we do things here.

## How to make changes in a project

1. Checkout the `master`/`main` branch of your respository
1. Ensure you have all the latest changes before you progress any further
1. Do not make any changes on the `main` branch
1. Create a new branch from the `main` branch or any other branch that you are using as a base. Follow the [branch naming convention](#how-to-name-your-branch)
1. Commit your changes as per the [commit naming convention](#how-to-write-a-commit-message)
1. Push your changes to the remote respository
1. Create a pull request


## How to name your branch

Most of the times you will be using a project management tool for tracking your progress and upcoming task. This tool could be Jira, Trello, Clickup or something similar.

If your task/ticket has a number your branch name should always be starting with the ticket number. For example if my task on JIRA is `AG-439` and is about `adding yourself to the Acorn globus team member list on the website`

Good branch name can look like:
- `AG-439`
- `AG-439-add-ankit-to-website`

Bad branch name can look like:

- `439`
- `fix-website`
- `hotfix`

In case your task doesn't have a number a meaningful name is preffered compared to generic names like


## How to write a commit message

Writing a good message is difficult but an important task. Every commit that we do must adhere to the rules mentioned here.

If your task/ticket has a number your branch name should always be starting with the ticket number. For example if my task on JIRA is `AG-439` and is about `adding yourself to the Acorn globus team member list on the website`

Good commit message can look like:
- `AG-439: add ankit to the teams page`
- `AG-439 (update): modify teams page to add ankit`

> TIP: use `git log` to see the pattern of existing commits on any branch to get an idea