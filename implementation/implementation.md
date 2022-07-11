# Implementation

Thanks to the _Domain Driven Design_ carried on during the initial phase of the project, the team was able to conduct the implementation of the system's components concurrently.
Before starting with the development the workload was equally divided among the members so that everyone could focus on a specific part of the domain and fully explore it.
In order to let the other members know how the own implementation was being made, _Git flow_ was very helpful because, before merging the code to the main branch, every developer had to make a pull request and request for other members' approval.

The communication among microservices happens by means of REST APIs exposed by each of them.
The [`dumpster-microservice`](https://github.com/SmartWasteCollection/dumpster-microservice), [`truck-microservice`](https://github.com/SmartWasteCollection/truck-microservice) and [`mission-microservice`](https://github.com/SmartWasteCollection/mission-microservice) allow the management of the corresponding digital twins through the _Azure Platform_ exposing CRUD APIs.
On the other hand, the [`booking-microservice`](https://github.com/SmartWasteCollection/booking-microservice) and [`complaint-microservice`](https://github.com/SmartWasteCollection/complaint-microservice), expose routes to execute CRUD operations on a _MongoDB Cluster_ instance.
Finally, a mocked version of the dashboard was implemented using the _Vue_ framework and it is hosted on _[Github Pages](https://smartwastecollection.github.io/dashboard/)_. The [`dashboard`](https://github.com/SmartWasteCollection/dashboard) allows visualizing the position of collection points and trucks on a map and their properties.

The main language used was _Kotlin_, although the [`booking-microservice`](https://github.com/SmartWasteCollection/booking-microservice) was written in _Javascript_.
For the microservices written in _Kotlin_, _Spring_ was used to create the web services, _Azure Digital Twins Core_ to interact with _Azure Platform_ and manage the digital twins, and _KMongo_ to connect and operate with _MongoDB_ databases.
For the _Javascript_ microservice _Node.js_ was used to provide an execution environment, _Express_ to create a web service and _Mongoose_ to connect and operate with _MongoDB_ databases.

At this stage of the implementation, that is not yet over, each microservice has been implemented and tested on its own. Nevertheless, the integration among microservices has not yet been tested, but the team expects that this process will be straightforward thanks to the initial domain model analysis.
Thus, the last part of the implementation will concern the integration of the microservices and the development of the shadowing among physical assets and digital twins.