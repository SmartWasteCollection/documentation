# Architectural Map

This section reports a high level architecture of the final system. This representation has been obtained by a further analysis of the identified subdomains, which allowed us to identify all the components of the system and define the main communications among them. The following diagrams describe all the components in the system, focusing on each subdomain.

The following diagrams present:
* **Microservices**: services that provide *Application Program Interfaces* that can be accessed externally. They are meant to interact with each other and provide their functionalities to other components.
* **Thing**: devices on physical entities that allow to monitor sensors' data and control actuators. 
* **Digital Twin**: digital representation of physical entities. Components in the system are meant to fetch information directly from digital twins instead of physical devices.

## Disposal Subdomain

<!--![Diagram Image Link](./disposal-subdomain-architectural-map.puml)-->

This diagram describes the main interactions among functionalities inside the Disposal Subdomain. 

The **Collection Point Microservice** is the abstraction that covers all the identified bounded contexts in this subdomain. In fact, the microservice presents peculiar functionalities for each bounded context. In this way, the microservice provides a unique interface to interact with model entities of the subdomain.

## Collection Subdomain

<!--![Diagram Image Link](./collection-subdomain-architectural-map.puml)-->

## Complaint Subdomain

<!--![Diagram Image Link](./complaint-subdomain-architectural-map.puml)-->

## User Subdomain

<!--![Diagram Image Link](./user-subdomain-architectural-map.puml)-->