Git Forks and Upstreams
=======================

# How-to and a cool tip


---

Forking projects to make your own changes lets you easily integrate your own contributions. But if you’re not sending those changes back upstream—which means sending it back to the parent repository—you’re at risk for losing track of them, which can cause divergent lines in your repository. To make sure all contributors are drawing from the same place, you’ll need to know some principles of how git forking interacts with git upstream. In this blog, I’ll introduce you to the basics, the gotchas, and even leave you with a cool tip to get you ahead of the curve.

## Git upstream: Keep up-to-date and contribute

---

Let's start by detailing a common setup and the most basic workflow to interact with `upstream` repositories.

In a standard setup, you generally have an `origin` and an `upstream` [remote](https://www.atlassian.com/git/tutorials/syncing) — the latter being the gatekeeper of the project or the source of truth to which you wish to contribute.

First, verify that you have already setup a remote for the `upstream` repository, and hopefully an `origin` too:

```scss
git remote -v

origin  git@bitbucket.org:my-user/some-project.git (fetch)
origin  git@bitbucket.org:my-user/some-project.git (push)
```

If you don't have an `upstream` you can easily add it with the `remote` command:

```scss
git remote add upstream git@bitbucket.org:some-gatekeeper-maintainer/some-project.git
```

![databases](https://wac-cdn.atlassian.com/dam/jcr:f05d1440-c0ca-45f1-9f31-f376bb67adf6/databases.png?cdnVersion=1571)

###### RELATED MATERIAL

#### How to move a full Git repository

[Read article](https://www.atlassian.com/git/tutorials/git-move-repository)

![Bitbucket logo](https://wac-cdn.atlassian.com/dam/jcr:03116c1f-27e5-4a82-9b9b-806786578fb2/logos-bitbucket-icon-gradient-blue-121x109@2x.png?cdnVersion=1571)

###### SEE SOLUTION

#### Learn Git with Bitbucket Cloud

[Read tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud)

Verify that the remote is added correctly:

```scss
git remote -v

origin    git@bitbucket.org:my-user/some-project.git (fetch)
origin    git@bitbucket.org:my-user/some-project.git (push)
upstream  git@bitbucket.org:some-gatekeeper-maintainer/some-project.git (fetch)
upstream  git@bitbucket.org:some-gatekeeper-maintainer/some-project.git (push)
```

Now you can collect the latest changes of the `upstream` repository with `fetch`. Repeat this every time you want to get updates:

(If the project has tags that have not merged to main you should also do: git fetch upstream --tags)

```undefined
git fetch upstream
```

Generally, you want to keep your local `main` branch as a close mirror of the `upstream` `main` and execute any work in feature branches, as they might later become pull requests.

At this point, it does not matter if you use `merge` or `rebase`, as the result will typically be the same. Let's use `merge`:

```css
git checkout main
git merge upstream/main
```

When you want to share some work with the `upstream` maintainers you branch off `main`, create a feature branch. When you're satisfied, push it to your remote repository.

You can also use `rebase` instead, then `merge` to make sure the `upstream` has a clean set of commits (ideally one) to evaluate:

```bash
git checkout -b feature-x

#some work and some commits happen
#some time passes

git fetch upstream
git rebase upstream/main
```

## Publish with git fork

---

After the above steps, publish your work in your remote fork with a simple `push`:

```undefined
git push origin feature-x
```

```undefined
git push -f origin feature-x
```

Personally I prefer to keep the history as clean as possible and go for option three, but different teams have different workflows. *Note:* You should do this only when working with *your own* fork. **Rewriting history of shared repositories and branches is something you should NEVER do**.

## Tip of the day: Ahead/Behind numbers in the prompt

---

After a `fetch`, `git status` shows you how many commits you are ahead or behind of the synced `remote` branch. Wouldn't it be nice if you could see this information at your faithful command prompt? I thought so too so I started tapping with my `bash` chopsticks and cooked it up.

Here is how it will look on your prompt once you've configured it:

```js
nick-macbook-air:~/dev/projects/stash[1|94]$
```

And this is what you'll need to add to your `.bashrc` or equivalent—just a single function:

```bash
function ahead_behind {
    curr_branch=$(git rev-parse --abbrev-ref HEAD);
    curr_remote=$(git config branch.$curr_branch.remote);
    curr_merge_branch=$(git config branch.$curr_branch.merge | cut -d / -f 3);
    git rev-list --left-right --count $curr_branch...$curr_remote/$curr_merge_branch | tr -s '\t' '|';
}
```

```bash
export PS1="\h:\w[\$(ahead_behind)]$"
```

### Inner workings

For those who like details and explanations here is how it works:

We get the symbolic name for the current HEAD, i.e. the current branch:

```js
curr_branch=$(git rev-parse --abbrev-ref HEAD);
```

We get the remote that the current branch is pointing to:

```bash
curr_remote=$(git config branch.$curr_branch.remote);
```

We get the branch onto which this remote should be merged (with a cheap Unix trick to discard everything up to and including the last forward slash [ / ]):

```bash
curr_merge_branch=$(git config branch.$curr_branch.merge | cut -d / -f 3);
```

Now we have what we need to collect the number of counts for the commits we are ahead or behind:

```bash
git rev-list --left-right --count $curr_branch...$curr_remote/$curr_merge_branch | tr -s '\t' '|';
```

We use the age-old Unix `tr` to convert the `TAB` to a separator `|`.

## Getting started with git upstream

---

That is a basic walk-through on `git upstream` — how to set up a git upstream, create a new branch, collect changes, publish with git fork, and a sweet tip for how many commits ahead/behind you are of your remote branch.

Bitbucket Server includes *fork synchronization* which basically relieves the developer from all the burden of keeping up to date with its forks, and Bitbucket Cloud has an easy 1-step sync [check it out!](https://bitbucket.org/)
