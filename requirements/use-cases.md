# Use Cases

The following use cases diagrams describe the behavior of the system.

## Ordinary Waste Management

Ordinary waste management is divided into two parts:

* [disposal](#ordinary-waste-disposal)
* [collection](#ordinary-waste-collection)

### Ordinary Waste Disposal

Regarding ordinary waste collection, the main actors are citizens, trucks and dumpsters. In this scenario, trucks and truck drivers play the same role.

<!--![Diagram Image Link](./ordinary-disposal-use-cases.pm.puml)-->

Citizens can dispose of waste inside dumpsters only if they use their smart card to make the opening request. Once the citizen has made the deposit, the dumpster will update its occupied volume and perform the automatic closure, which will occur after a predetermined amount of time.

### Ordinary Waste Collection

Regarding ordinary waste collection, the main actors are trucks and dumpsters. In this scenario, trucks and truck drivers play the same role.

<!--![Diagram Image Link](./ordinary-collection-use-cases.pm.puml)-->

During its mission, a garbage truck shares its current location with the system and updates the mission status.
At each step of the mission, the truck will update its current occupied volume and the emptied dumpster will do the same.

A mission is generated because at least one dumpster of the system has made a _full dumpster_ notification.

## Extraordinary Waste Management

Regarding extraordinary waste collection, the main actors are citizens and trucks. In this scenario, trucks and truck drivers play the same role.

<!--![Diagram Image Link](./extraordinary-management-use-cases.pm.puml)-->

A mission for extraordinary waste collection begins when at least one booking has been made by citizens.

The system will take care of generating an adequate mission that allows to optimize the garbage truck capacity and satisfy as many collection requests as possible.

## Dashboard

The dashboard can be used by managers to observe dumpsters, 'at home' collection requests, the real-time position of trucks, disposal points and complaints. Moreover, it can be used by citizens to observe dumpsters and their personal 'at home' collection requests.

<!--![Diagram Image Link](./dashboard-use-cases.pm.puml)-->

## Complaints Management

Citizens and truck drivers can submit complaints. Complaints can be also submitted by dumpsters when they detect a problem. On the other hand, managers can monitor complaints.

<!--![Diagram Image Link](./complaints-use-cases.pm.puml)-->