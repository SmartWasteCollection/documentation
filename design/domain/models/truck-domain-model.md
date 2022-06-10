# Truck Domain Model

## Model Diagram

The following diagram shows the truck's aggregate. It is the only aggregate identified in the truck's monitoring and control context.

[![Diagram Image Link](https://tinyurl.com/2dnr8kt6)](https://tinyurl.com/2dnr8kt6)<!--![Diagram Image Link](./truck-domain-model.puml)-->

## Domain Events

The *Truck Aggregate* deals with the following events:

* **Mission Request Event**: received when a dumpster's occupied volume exceeds its threshold.
* **Position Update Event**: generated when the GPS sensor detects a new position.
* **Truck Volume Update Event**: generated when the truck empties a dumpster.
* **Truck Availability Update Event**:
* **Mission Step Event**: generated when the truck leaves a collection point.

## Domain Invariants

* occupiedVolume < capacity.
* *Mission Request Event* are accepted *iff isInMission == false*.
