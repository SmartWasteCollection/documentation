# Mission Domain Model

## Model Diagram

The following diagram shows the mission's aggregate. It is the only aggregate identified in the mission context.

[![Diagram Image Link](https://tinyurl.com/2xwgbmtg)](https://tinyurl.com/2xwgbmtg)<!--![Diagram Image Link](./mission-domain-model.puml)-->

## Domain Events

The *Mission Aggregate* deals with the following events:

* **Mission Step Event**: received when a truck leaves a collection point.
* **Mission Request Event**: received when a dumpster's occupied volume exceeds its threshold.
* **Ordinary Mission Event**: ???
* **Extraordinary Mission Event**: generated daily by the *Mission Manager Service*.

## Domain Invariants

* Empty dumpsters cannot be assigned to missions.
* Dumpsters can be assigned to a mission *iff it is not already in another mission (which is not completed).*
* Unavailable trucks cannot be assigned to missions.
* Mission steps cannot be modified once the mission is created.