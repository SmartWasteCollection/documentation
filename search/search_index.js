const local_index = {"config":{"indexing":"full","lang":["en"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"Introduction This website contains all the documentation produced for the SmartWasteCollection project, which is brought on with a Domain Driven approach. The Project Description At the moment, waste is collected by garbage trucks regularly from collection points distributed across the cities' streets. At each collection point there are several dumpsters for each waste type. People can go to collection points, open a dumpster manually and dispose of the waste. There is also extraordinary waste that is not collected at collection points. Instead, it must be brought directly to disposal points by citizens. We aim to optimize the waste collection process using smart technologies. The idea is to collect waste from collection points only when it is necessary. A single garbage truck collects a specific type of waste from various collection points. Dumpsters are provided with sensors in order to identify when they must be emptied. This sensors provide information about the state of the dumpster itself, not only about its remaining capacity. Members Martina Baiardi, martina.baiardi4@studio.unibo.it Alessandro Marcantoni, alessandr.marcanton2@studio.unibo.it Simone Romagnoli, simone.romagnoli10@studio.unibo.it Marta Spadoni, marta.spadoni2@studio.unibo.it","title":"Introduction"},{"location":"index.html#introduction","text":"This website contains all the documentation produced for the SmartWasteCollection project, which is brought on with a Domain Driven approach.","title":"Introduction"},{"location":"index.html#the-project","text":"","title":"The Project"},{"location":"index.html#description","text":"At the moment, waste is collected by garbage trucks regularly from collection points distributed across the cities' streets. At each collection point there are several dumpsters for each waste type. People can go to collection points, open a dumpster manually and dispose of the waste. There is also extraordinary waste that is not collected at collection points. Instead, it must be brought directly to disposal points by citizens. We aim to optimize the waste collection process using smart technologies. The idea is to collect waste from collection points only when it is necessary. A single garbage truck collects a specific type of waste from various collection points. Dumpsters are provided with sensors in order to identify when they must be emptied. This sensors provide information about the state of the dumpster itself, not only about its remaining capacity.","title":"Description"},{"location":"index.html#members","text":"Martina Baiardi, martina.baiardi4@studio.unibo.it Alessandro Marcantoni, alessandr.marcanton2@studio.unibo.it Simone Romagnoli, simone.romagnoli10@studio.unibo.it Marta Spadoni, marta.spadoni2@studio.unibo.it","title":"Members"},{"location":"SUMMARY.html","text":"Introduction Domain Analysis DevOps Techniques","title":"SUMMARY"},{"location":"devops/devops.html","text":"DevOps Techniques DevOps engineering is a software development methodology that aims at communication and collaboration among developers and information technologies' workers. This set of techniques respond to interdependencies between software development and relative IT operations, allowing a faster and more efficient organization of software products and services. The following paragraphs describe which DevOps techniques have been used in the making of the system, focusing on the advantages that each procedure has brought. DVCS Strategy Workflow A GitHub organization was associated to the entire project. In this way, every aspect of the project could be handled in a specific repository inside the organization. Moreover, under the perspective of developing a system based on microservices, this model could help the team to better identify the components of the project. The team agreed on working with the Git Flow workflow inside the implementation repositories. Before merging code on the main/master branch, feature branches need to be approved by other team members using the pull-request GitHub's service. In the lightweight repositories, such as the documentation one , the team chose not to use this complex mechanism. Conventional Commit The team worked with the conventional-commit convention. This strategy provides an easy set of rules for creating an explicit commit history. The team agreed on an extension of the standard convention, using the following set of commit types: feat : identifies a feature, increasing the minor version number. feat! : identifies a breaking change feature, increasing the major version number. fix : identifies a patch change, increasing the patch version number. chore : identifies a minor change that doesn't affect the overall system's behaviour. docs : identifies an update to the documentation. ci : identifies changes in the repository's workflow definition. Commit Lint Check Continuous Integration GitHub Actions The team decided to use the GitHub Actions service. The team developed the following set of GitHub Actions for the project: conventionalcommit-semantic-releasing : performs automatic releases of the project following the conventional-commit convention for version numbers. puml-markdown : embeds PlantUML code into markdown files. copy-files-action : copies files with names that match a specific pattern into another repository. Code Quality Control Tests Automatic Dependency Update Continuous Delivery Semantic Versioning and Releasing Licenses Every repository in the organization is endowed with the MIT license. Therefore, the developed software is free and open-source.","title":"DevOps Techniques"},{"location":"devops/devops.html#devops-techniques","text":"DevOps engineering is a software development methodology that aims at communication and collaboration among developers and information technologies' workers. This set of techniques respond to interdependencies between software development and relative IT operations, allowing a faster and more efficient organization of software products and services. The following paragraphs describe which DevOps techniques have been used in the making of the system, focusing on the advantages that each procedure has brought.","title":"DevOps Techniques"},{"location":"devops/devops.html#dvcs-strategy","text":"","title":"DVCS Strategy"},{"location":"devops/devops.html#workflow","text":"A GitHub organization was associated to the entire project. In this way, every aspect of the project could be handled in a specific repository inside the organization. Moreover, under the perspective of developing a system based on microservices, this model could help the team to better identify the components of the project. The team agreed on working with the Git Flow workflow inside the implementation repositories. Before merging code on the main/master branch, feature branches need to be approved by other team members using the pull-request GitHub's service. In the lightweight repositories, such as the documentation one , the team chose not to use this complex mechanism.","title":"Workflow"},{"location":"devops/devops.html#conventional-commit","text":"The team worked with the conventional-commit convention. This strategy provides an easy set of rules for creating an explicit commit history. The team agreed on an extension of the standard convention, using the following set of commit types: feat : identifies a feature, increasing the minor version number. feat! : identifies a breaking change feature, increasing the major version number. fix : identifies a patch change, increasing the patch version number. chore : identifies a minor change that doesn't affect the overall system's behaviour. docs : identifies an update to the documentation. ci : identifies changes in the repository's workflow definition.","title":"Conventional Commit"},{"location":"devops/devops.html#commit-lint-check","text":"","title":"Commit Lint Check"},{"location":"devops/devops.html#continuous-integration","text":"","title":"Continuous Integration"},{"location":"devops/devops.html#github-actions","text":"The team decided to use the GitHub Actions service. The team developed the following set of GitHub Actions for the project: conventionalcommit-semantic-releasing : performs automatic releases of the project following the conventional-commit convention for version numbers. puml-markdown : embeds PlantUML code into markdown files. copy-files-action : copies files with names that match a specific pattern into another repository.","title":"GitHub Actions"},{"location":"devops/devops.html#code-quality-control","text":"","title":"Code Quality Control"},{"location":"devops/devops.html#tests","text":"","title":"Tests"},{"location":"devops/devops.html#automatic-dependency-update","text":"","title":"Automatic Dependency Update"},{"location":"devops/devops.html#continuous-delivery","text":"","title":"Continuous Delivery"},{"location":"devops/devops.html#semantic-versioning-and-releasing","text":"","title":"Semantic Versioning and Releasing"},{"location":"devops/devops.html#licenses","text":"Every repository in the organization is endowed with the MIT license. Therefore, the developed software is free and open-source.","title":"Licenses"},{"location":"domain-analysis/SUMMARY.html","text":"Problem Analysis Impact Mapping","title":"SUMMARY"},{"location":"domain-analysis/business-problem-analysis.html","text":"Domain Problem Analysis In this section we have interviewed the company's manager with the aim of improving our understanding of the analyzed domain. How is the waste collection currently managed? At the moment, garbage trucks periodically collect waste from the collection points. We have a schedule that tells us which types of waste we should collect on a given day. Each garbage truck starts from the disposal point and empties the dumpsters in all the collection points in its mission area. A garbage truck only collects one type of waste per mission. We would like to optimise the waste collection process in order for citizens to always be able to dispose of their waste in the nearest collection point. How many dumpsters are there in each collection point? Depending on the amount of people that live in the area where the collection point is located, there may be one or several dumpsters for each type of common waste. For instance, a collection point may have two dumpsters for plastic, two for paper and one for each other type of waste. Which types of dumpsters are there in each collection point? The waste types that are collected in every collection point are unsorted , organic , plastic/aluminium , paper and glass . We are also thinking about introducing further kinds of waste. Dumpsters may also have different physical traits depending on the type of waste that they collect. Indeed, there are two different sizes of dumpsters. The larger one is suitable for types of waste that do not need to be collected frequently. On the other hand, the smaller one is used for instance for organic waste. At the moment, the larger dumpsters can be opened using a foot lever while the smaller ones are opened with hands. However, we would like citizens to be able to open all of them using a smart card. Which types of waste are you willing to collect? How? We would like to be able to collect common waste directly at collection points. On the other hand, we would like to provide an \"at home\" collection on demand for extraordinary waste. Common waste includes: - paper - plastic/aluminium - glass - unsorted waste - organic waste Extraordinary waste includes: - twigs - waste oil - iron - electronics - clothes - others What are the main characteristics of the dumpsters? The features of a dumpster are: - size: volume of waste it can contain (measured in liters) - color: indicates the type of waste that it contains - opening: it can be either through a foot lever or by hands. Which information do you want to store about a single dumpster? For each dumpster we would like to know: - its occupied volume - whether it is open or closed - whether it is working or not - whether it needs to be emptied Which kind of garbage trucks do you have? How many waste types can a single truck collect? We only have one type of truck. During a mission, it can only collect a single type of waste. We are also planning on acquiring specific trucks for extraordinary waste to be able to fulfill clients' requests. How many garbage trucks do you have? There are from 10 to 30 trucks parked in every disposal point. The precise amount depends on the number of collection points in the same province as the disposal point. Which information do you want to store about a single garbage truck? We would like to store: - its total capacity - current occupied volume - the type of waste that is currently being collected - its real time position Where do the garbage trucks bring the waste? The waste is brought to the disposal point of that province. So, do garbage trucks collect waste from every collection point of a province? No, each garbage truck is assigned a mission, and therefore a mission area. A mission area is made up of a set of residential areas that are physically close to one another. How are disposal points distributed in the territory? There is a disposal point in every province. Each disposal point gathers waste from the collection points of that province. A province is further divided into residential areas where a single collection point is located. The residential areas are sized in a suitable way so that each one can cover the same amount of people. Which waste types does a single disposal point manage? Each disposal point manages every type of waste. Each type of waste is handled by a specific disposal chain inside the disposal point. How do you want to manage extraordinary waste? At the moment, extraordinary waste is directly brought to disposal points by citizens. However, we would like to let citizens book an appointment to collect extraordinary waste at their home.","title":"Problem Analysis"},{"location":"domain-analysis/business-problem-analysis.html#domain-problem-analysis","text":"In this section we have interviewed the company's manager with the aim of improving our understanding of the analyzed domain. How is the waste collection currently managed? At the moment, garbage trucks periodically collect waste from the collection points. We have a schedule that tells us which types of waste we should collect on a given day. Each garbage truck starts from the disposal point and empties the dumpsters in all the collection points in its mission area. A garbage truck only collects one type of waste per mission. We would like to optimise the waste collection process in order for citizens to always be able to dispose of their waste in the nearest collection point. How many dumpsters are there in each collection point? Depending on the amount of people that live in the area where the collection point is located, there may be one or several dumpsters for each type of common waste. For instance, a collection point may have two dumpsters for plastic, two for paper and one for each other type of waste. Which types of dumpsters are there in each collection point? The waste types that are collected in every collection point are unsorted , organic , plastic/aluminium , paper and glass . We are also thinking about introducing further kinds of waste. Dumpsters may also have different physical traits depending on the type of waste that they collect. Indeed, there are two different sizes of dumpsters. The larger one is suitable for types of waste that do not need to be collected frequently. On the other hand, the smaller one is used for instance for organic waste. At the moment, the larger dumpsters can be opened using a foot lever while the smaller ones are opened with hands. However, we would like citizens to be able to open all of them using a smart card. Which types of waste are you willing to collect? How? We would like to be able to collect common waste directly at collection points. On the other hand, we would like to provide an \"at home\" collection on demand for extraordinary waste. Common waste includes: - paper - plastic/aluminium - glass - unsorted waste - organic waste Extraordinary waste includes: - twigs - waste oil - iron - electronics - clothes - others What are the main characteristics of the dumpsters? The features of a dumpster are: - size: volume of waste it can contain (measured in liters) - color: indicates the type of waste that it contains - opening: it can be either through a foot lever or by hands. Which information do you want to store about a single dumpster? For each dumpster we would like to know: - its occupied volume - whether it is open or closed - whether it is working or not - whether it needs to be emptied Which kind of garbage trucks do you have? How many waste types can a single truck collect? We only have one type of truck. During a mission, it can only collect a single type of waste. We are also planning on acquiring specific trucks for extraordinary waste to be able to fulfill clients' requests. How many garbage trucks do you have? There are from 10 to 30 trucks parked in every disposal point. The precise amount depends on the number of collection points in the same province as the disposal point. Which information do you want to store about a single garbage truck? We would like to store: - its total capacity - current occupied volume - the type of waste that is currently being collected - its real time position Where do the garbage trucks bring the waste? The waste is brought to the disposal point of that province. So, do garbage trucks collect waste from every collection point of a province? No, each garbage truck is assigned a mission, and therefore a mission area. A mission area is made up of a set of residential areas that are physically close to one another. How are disposal points distributed in the territory? There is a disposal point in every province. Each disposal point gathers waste from the collection points of that province. A province is further divided into residential areas where a single collection point is located. The residential areas are sized in a suitable way so that each one can cover the same amount of people. Which waste types does a single disposal point manage? Each disposal point manages every type of waste. Each type of waste is handled by a specific disposal chain inside the disposal point. How do you want to manage extraordinary waste? At the moment, extraordinary waste is directly brought to disposal points by citizens. However, we would like to let citizens book an appointment to collect extraordinary waste at their home.","title":"Domain Problem Analysis"},{"location":"domain-analysis/impact-mapping.html","text":"Impact Mapping The following impact map has derived from the analysis of the business problem. It allows to underline the main aspects of the problem, starting from the goal of the project. The goal is pursued by each actor in the system and the diagram helps to identify which deliverables will have the greater impacts . In fact, it can be seen as a first draft of the requirements.","title":"Impact Mapping"},{"location":"domain-analysis/impact-mapping.html#impact-mapping","text":"The following impact map has derived from the analysis of the business problem. It allows to underline the main aspects of the problem, starting from the goal of the project. The goal is pursued by each actor in the system and the diagram helps to identify which deliverables will have the greater impacts . In fact, it can be seen as a first draft of the requirements.","title":"Impact Mapping"}]}; var __search = { index: Promise.resolve(local_index) }