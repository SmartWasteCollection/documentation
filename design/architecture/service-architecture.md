# Service Architecture

The team agreed on building each microservice with a **Clean Architecture** (from now on referred as _CA_). Since there are many interpretations of what a _CA_ is and what consequences it should bring, we portrayed our personal view, trying to stick with the principal layers that the literature presents.

![Clean Architecture](clean.png)

## Entities Layer (_Domain_)

At the center of a microservice, the principal elements that shall remain untouched are domain entities and rules. These aspects should be completely unaware of what is happening outside and decoupled from the technologies and libraries used.
 
## Use Cases Layer (_Application_)

This layer is the bridge between the domain and the outside world. It describes a series of possible interactions that can be used from outside, and it should be the only way to access the domain. Use cases should be independent one from the other. In most of the cases, use cases involve communications with a persistence layer: in order to avoid the insertion of external libraries in this layer, we decided to provide a behavior encapsulated into a _manager_. The _managers_ inside this layer are interfaces completely unaware of the particular instance of persistence. They just provide the _API_ to interact with the domain. In outer layers, a link to persistence is granted by proper implementations of manager's interface (for instance, a _DatabaseManager_ inheriting all the manager's _APIs_ and connecting to a database).

<!--![Diagram Image Link](./clean.puml)-->

## Adapters Layer (_Presentation_)

The adapters layer grants validity to the communication among outer and inner layers. For instance, it can contain modules that allow to serialize and deserialize elements, achieving interoperability.

## Drivers Layer (_Frameworks_)

The outermost layer manages all the external frameworks and drivers (persistence on databases, digital twins communication, etc.).