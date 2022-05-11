# DevOps Techniques

DevOps engineering is a software development methodology that aims at communication and collaboration among developers 
and information technologies' workers. This set of techniques respond to interdependencies between software development and
relative *IT* operations, allowing a faster and more efficient organization of software products and services.

The following paragraphs describe which DevOps techniques have been used in the making of the system, focusing on the 
advantages that each procedure has brought.

## DVCS Strategy
### Workflow
A GitHub [organization](https://github.com/SmartWasteCollection) was associated to the entire project. In this way, every aspect of the project could be handled in a specific repository inside the organization. Moreover, under the perspective of developing a system based on microservices, this model could help the team to better identify the components of the project. 

The team agreed on working with the Git Flow workflow inside the implementation repositories. Before merging code on the ```main/master``` branch, feature branches need to be approved by other team members using the pull-request GitHub's service. In the lightweight repositories, such as the [documentation one](https://github.com/SmartWasteCollection/documentation), the team chose not to use this complex mechanism. 

### Conventional Commit
The team worked with the [conventional-commit](https://www.conventionalcommits.org/en/v1.0.0/) convention. This strategy provides an easy set of rules for creating an explicit commit history. The team agreed on an extension of the standard convention, using the following set of commit types:
* **feat**: identifies a feature, increasing the minor version number.
* **feat!**: identifies a breaking change feature, increasing the major version number.
* **fix**: identifies a patch change, increasing the patch version number.
* **chore**: identifies a minor change that doesn't affect the overall system's behaviour. 
* **docs**: identifies an update to the documentation.
* **ci**: identifies changes in the repository's workflow definition.

### Commit Lint Check

## Continuous Integration
### GitHub Actions
The team decided to use the GitHub Actions service. The team developed the following set of GitHub Actions for the project:
* [conventionalcommit-semantic-releasing](https://github.com/anitvam/conventionalcommit-semantic-releasing): performs automatic releases of the project following the conventional-commit convention for version numbers.
* [puml-markdown](https://github.com/alessandro-marcantoni/puml-markdown): embeds PlantUML code into markdown files.
* [copy-files-action](https://github.com/SimoneRomagnoli/copy-files-action): copies files with names that match a specific pattern into another repository.

### Code Quality Control
### Tests
### Automatic Dependency Update

## Continuous Delivery
### Semantic Versioning and Releasing

## Licenses
Every repository in the organization is endowed with the MIT license. Therefore, the developed software is free and open-source.
