# Disposal Domain Model

## Model Diagram

The following diagram shows the aggregates of the disposal subdomain.

[![Diagram Image Link](https://tinyurl.com/22ex6n89)](https://tinyurl.com/22ex6n89)<!--![Diagram Image Link](./disposal-domain-model.puml)-->

The *Collection Point Aggregate* is very important as it contains information about the dumpsters' position. Indeed, the dumpster contains a reference to the collection points it is contained into.

## Domain Events

The *Dumpster Aggregate* deals with the following events:

* **Citizen Disposal Event**: generated when a citizen disposes of some waste.
* **Dumpster Volume Update Event**: generated when the volume sensor detects a disposal or a collection.
* **Dumpster Availability Update Event**: generated when the dumpster becomes available or unavailable.
* **Opening Event**: generated when the dumpster is opened.
* **Closure Event**: generated when the dumpster is closed.
* **Mission Request Event**: generated when the dumpster's occupied volume exceeds its threshold.

## Domain Factories

* **Dumpster Static Factory**: generates dumpsters defining their *TypeOfDumpster*.

## Domain Invariants

* ```TIMEOUT = 30 seconds```.
* ```OCCUPIED_VOLUME_THRESHOLD = 75%```.
* ```occupiedVolume < capacity```.
* *Citizen Disposal Events* are accepted *iff*  ```isAvailable```.
* *Opening Events* are accepted *iff* ```isAvailable```.
* ```isAvailable = isWorking && occupiedVolumePercentage < 95%```.
* *TypesOfWaste* are mapped to one and one only *Color*, and vice versa.
