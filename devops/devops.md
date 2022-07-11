# DevOps Techniques

DevOps engineering is a software development methodology that aims at communication and collaboration among developers and information technologies' workers. 
This set of techniques respond to interdependencies between software development and relative *IT* operations, allowing a faster and more efficient organization of software products and services.

The following paragraphs describe which DevOps techniques have been used in the making of the system, focusing on the advantages that each procedure has brought.

## DVCS Strategy
### Workflow
A GitHub organization named [SmartWasteCollection](https://github.com/SmartWasteCollection) was associated to the entire project. 
In this way, every aspect of the project could be handled in a specific repository inside the organization.
Moreover, under the perspective of developing a system based on microservices, this model could help the team to better identify the components of the project. 

The team agreed on working with `Git Flow workflow` inside the implementation repositories, adapting it following the specific needs. 
Before merging code on the ```main/master``` branch, feature branches need to be approved by other team members using the pull-request GitHub's service. In the "lightweight" repositories, such as the [documentation](https://github.com/SmartWasteCollection/documentation) one, the team chose not to use this complex mechanism. 

All the feature branches will follow a common structure based on the following template:
```
feature/<committer-initial-name-letter><committer-initial-surname-letter>-<feature-name>
```

### Conventional Commit
The team worked with the [conventional-commit](https://www.conventionalcommits.org/en/v1.0.0/) convention. 
This strategy provides an easy set of rules for creating an explicit commit history and allows to automatically define the number of versions released.

The team agreed on an extension of the standard convention, using the following set of commit types:

* **feat!**: identifies a **breaking change** feature, increasing the major version number.
* **feat**: identifies a feature, increasing the minor version number.
* **fix**: identifies a patch change, increasing the patch version number.
* **chore**: identifies a minor change that doesn't affect the overall system's behaviour. 
* **docs**: identifies an update to the documentation.
* **ci**: identifies changes in the repository's workflow definition.
* **deps**: identifies the update of a library dependency

### Versioning
Following the conventional commit standard, the version number is defined in the format `vX.Y.Z` where:

- `X` indicates the **major version** and is incremented when a braking change occurs
- `Y` indicates a **minor version** and is incremented every time a new feature is introduced in the system 
- `Z` indicates a **patch version** where typically errors are fixed and those changes do not modify the system APIs.

The other commit types defined in addition to those of conventional commit standard do not change the version number and are only used to identify the extent of the change within the code inside the repository.

### Commit Lint Check
To ensure that developers follow the conventional commit standard, commit linting techniques are used within the repositories.
These techniques allow you to check the validity of the messages made to the various commits before they are actually traced, in order to have a clean and traceable remote repository.
If the linter encounters a validation error, the commit won't be published and an error is returned to the developer which summarizes what problems are present within its commit message.

Validation occurs by checking that a commit type is specified at the beginning of the commit message and possibly a parenthesis, suitably open and closed, which contains a summary description of what is the feature on which changes are being made. The commit type must be followed by a colon before continuing with a brief description of the extent of the changes made.

It was possible to configure commit linting within an `npm` project thanks to the [`@commitlint/config-conventional`](https://www.npmjs.com/package/@commitlint/config-conventional) plugin.
This plugin allows to import the rules that must be respected within a commit message in order to follow the conventional-commit standard and extend them appropriately, if necessary.
These rules can then be used thanks to the `husky` plugin, which allows you to define `git hooks` that will run a script that executes the commit linter before ending the actual submission of the commit.

Within a gradle project it is possible to use the plugin [`org.danilopianini.gradle-pre-commit-git-hooks`](https://github.com/DanySK/gradle-pre-commit-git-hooks) which allows to check the commit messages correctness before their submission.

## Continuous Integration
### GitHub Actions
The team decided to use the `GitHub Actions` service. The team developed the following set of GitHub Actions for the project:

* [`conventionalcommit-semantic-releasing`](https://github.com/anitvam/conventionalcommit-semantic-releasing): performs automatic releases of the project following the conventional-commit convention for version numbers.
* [`puml-markdown`](https://github.com/alessandro-marcantoni/puml-markdown): embeds PlantUML code into markdown files.
* [`copy-files-action`](https://github.com/SimoneRomagnoli/copy-files-action): copies files with names that match a specific pattern into another repository.

Moreover, the team used a bunch of other actions to perform tasks. Some of these are:

* [`markdown-docs`](https://github.com/ldeluigi/markdown-docs): to deploy this **GitHub Pages** report from markdown files.
* [`azure-login`](https://github.com/Azure/login): to log in to **Azure** services and perform tests.
* [`codecov-action`](https://github.com/codecov/codecov-action): to push coverage reports to [CodeCov](https://codecov.io).
* [`login-action`](https://github.com/docker/login-action): to log in to the **GitHub Packages Container Registry**.

### Code Quality Control
A control on the quality of the code takes place thanks to the use of `Git Flow`, which allows the verification of the features introduced by a developer by all the other team members before they are merged into the `main/master` branch.
It is a task of the other developers to check that the proposed features are actually working and written in an understandable and clean way.

Moreover, in the [pre-commit hooks](#commit-lint-check) a code linter was included:

* [`ktlint`](https://ktlint.github.io/#getting-started) for _Gradle_ projects;
* [`ESLint`](https://eslint.org/) for _npm_ projects.

### Tests

The team used:

* [`kotest`](https://kotest.io/), for testing _Gradle_ projects;
* [`mocha`](https://mochajs.org/), for testing _npm_ projects.

The team produced coverage reports with the following plugins:

* [`jacoco`](https://github.com/jacoco/jacoco), for _Gradle_ projects;
* [`istanbul.js`](https://istanbul.js.org/), for _npm_ projects.

All coverage reports are published to [codecov.io/SmartWasteCollection](https://app.codecov.io/gh/SmartWasteCollection).

### Automatic Dependency Update

The team agreed on using [`renovate`](https://github.com/renovatebot/renovate) for automatic dependencies updates.

## Continuous Delivery

### Semantic Versioning and Releasing
Thanks to the use of [conventionalcommit-semantic-releasing](https://github.com/anitvam/conventionalcommit-semantic-releasing) action it was possible to automate all the versioning and releasing work. 
In particular, the action automatically calculates if a new version release is needed based on the committed commits in the `main/master` branch. If there is a commit that triggers a new version release (major, minor or patch) then the action creates the new tag, adding the appropriate version number to the one previously released, and then will create the GitHub Release with the reference of the last commit pushed on `main/master` branch.

If it's needed to attach some assets into the release that is generated, then the action allows to define a folder called `/assets` and all of its contents will be included in the GitHub Release.

If not needed within the repository, the folder can be deleted with a continuous integration task once the execution of the action is finished, in this way the repository could stay clean.

## Licenses
Every repository in the organization is endowed with the MIT license. Therefore, the developed software is free and open-source.
