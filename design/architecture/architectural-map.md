# Architectural Map

This section reports a high level architecture of the final system. This representation has been obtained by a further analysis of the identified subdomains, which allowed us to identify all the components of the system and define the main communications among them. The following diagrams describe all the components in the system, focusing on each subdomain, where all the bounded contexts are converted into functionalities for each described service.

The following diagrams present:

* **Microservices**: services that provide *Application Program Interfaces* that can be accessed externally. They are meant to interact with each other and provide their functionalities to other components.
* **Physical Asset**: devices on physical entities that allow to monitor sensors' data and control actuators. 
* **Digital Twin**: digital representation of physical entities. Components in the system are meant to fetch information directly from digital twins instead of physical devices.

## Disposal Subdomain

[![Diagram Image Link](https://tinyurl.com/2cgrb8lv)](https://tinyurl.com/2cgrb8lv)<!--![Diagram Image Link](./disposal-subdomain-architectural-map.puml)-->

This diagram describes the main interactions among functionalities inside the Disposal Subdomain. 

The **Dumpster Microservice** is the abstraction that covers all the identified bounded contexts in this subdomain. In fact, the microservice presents peculiar functionalities for each bounded context such as _Dumpster Control_, _Disposal Point Management_ and _Collection Point Management_. 

The **Dumpster Microservice** communicates with the digital twin of each dumpster in order to propagate the information to the concerned physical assets.

## Collection Subdomain

[![Diagram Image Link](https://tinyurl.com/2mlq6ogb)](https://tinyurl.com/2mlq6ogb)<!--![Diagram Image Link](./collection-subdomain-architectural-map.puml)-->

The diagram highlights the communications that take place among the three microservices identified within the Collection Subdomain: **Mission Microservice**, **Booking Microservice** and **Truck Microservice**.

The **Mission Microservice** relies on an underlying database that allows to store the history and exposes the functionalities to generate and manage missions.
In particular, if the microservice wants to generate an extraordinary mission, it will display the list of pending requests in the system by communicating with the **Booking Microservice**.

The **Booking Microservice** relies on a database that allows to have memory of all the requests for extraordinary waste collection that have been made so far.

The **Mission Microservice** then needs to communicate with the **Truck Microservice** to find out which trucks are available to take charge of the new mission and also to assign the mission that will be carried out by the truck.

The **Truck Microservice** takes care of the interaction with the digital twin which will propagate the information also to the physical asset.

## Complaint Subdomain

[![Diagram Image Link](https://tinyurl.com/2355gnes)](https://tinyurl.com/2355gnes)<!--![Diagram Image Link](./complaint-subdomain-architectural-map.puml)-->

This subdomain is represented with a single microservice that allows to expose an interface to the database that deals with complaints storage.

The **Complaint Microservice** takes care of complaints management, exposing methods that implement operations such as creating, deleting, modifying and selecting the information contained in the storage.

## User Subdomain

[![Diagram Image Link](https://tinyurl.com/2brhnxoo)](https://tinyurl.com/2brhnxoo)<!--![Diagram Image Link](./user-subdomain-architectural-map.puml)-->

The **User Subdomain** is represented with a microservice that takes care of exhibiting two main functionalities: _Account Management_ and _Smart Card Management_.

The _Account Management functionality_ is used to manage and store the information of system users, both on manager side and customer side. The authentication is mandatory to all the users that want to make requests for extraordinary waste collection and for managers that want to observe the system's operation.

The _Smart Card Management functionality_ is necessary to let system operators generate new cards. They will be given to citizens in order to use them to open dumpsters.

The **User Subdomain** will then interact with the database that will store this information.

## Subdomains Interactions

The following final diagram shows the interaction among microservices inside the identified subdomains. Further details inside each subdomain have been removed for a cleaner representation.

[![Diagram Image Link](https://tinyurl.com/23pozz24)](https://tinyurl.com/23pozz24)<!--![Diagram Image Link](./global-architectural-map.puml)-->