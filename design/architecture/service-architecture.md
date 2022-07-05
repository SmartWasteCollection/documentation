# Service Architecture

The team agreed on building each microservice with a **Clean Architecture** (from now on referred as _CA_). Since there are many interpretations of what a _CA_ is and what consequences it should bring, we portrayed our personal view, trying to stick with the principal layers that the different existing theories present.

## Entities Layer (_Domain_)

At the center of a microservice, the principal elements that shall remain untouched are domain entities and rules. These aspects, should be completely unaware of what is happening outside, and should interact with each other describing the domain just by themselves. For instance, a group of entities can be represented by _Aggregates_, _Value Objects_ and _Entities_ identified in the _Model Driven Design_. 
 
## Use Cases Layer (_Application_)

This layer is the bridge between the domain and the outside world. It should provide a series of possible interactions that should be used from outside, and they should be the only way to access the domain. Use cases should be independent one from the other. In most of the cases, use cases involve communications with a persistence layer: in order to avoid the insertion of an external interface in this layer, we decided to provide a behavior encapsulated into a _manager_. The _managers_ inside this layer are interfaces completely unaware of the particular instance of persistence. They just provide the _API_ to interact with the domain. In outer layers, a link to persistence is granted by proper inheritors (for instance, a _DatabaseManager_ inheriting all the _API_ and connecting to a database).

## Adapters Layer (_Presentation_)

The adapters layer grants validity to the communication among outer and inner layers. For instance, it can contain modules that allow to serialize and deserialize elements, achieving interoperability.

## Drivers Layer (_Frameworks_)

The outermost layer manages all the external frameworks and drivers (persistence on databases, digital twins communication, etc.).