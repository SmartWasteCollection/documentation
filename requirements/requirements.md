# Requirement Breakdown Structure

The team focused on use cases and user stories to identify and formalize the requirements, building a _Requirement Breakdown Structure_.

The **goal** that unites all the requirements is the optimization of waste collection. At the second level, the goal generates **requirements** (\*). Then, structure presents **functions** (\*.\*) that describe the higher-level functionalities of each requirement. Each function splits up into many **features** (\*.\*.\*) that explain specific details.

## Optimize Waste Collection

### **Dumpster Infrastructure**

1. Open dumpsters with smart-cards

    1.1 Authenticate smart-cards

    1.2 Open and close dumpsters
    
2. Collect and share data

    2.1 Update occupied volume

    2.2 Store information about citizens' disposals

    2.3 Send "full-dumpster" notification

    2.4 Raise complaints


### **Citizen App**

1. Check dumpsters' status

    1.1 Graphic user interface with dumpsters inside collection points

    1.2 Check dumpsters' availability

    1.3 Check dumpsters' occupied volume
    
2. Extraordinary waste collection booking

    2.1 Create request

    2.2 Check requests' status
    
3. Raise complaints

    3.1 Write a complaint

    3.2 Send a complaint

### **Mission Management**

1. Plan ordinary waste collection missions

    1.1 Find "full dumpsters" in the neighborhood
    
    1.2 Compute best route
    
2. Plan extraordinary waste collection missions

    2.1 Observe extraordinary mission requests

    2.2 Compute best route

### **Admin Dashboard**

1. Check collection points' status

    1.1 Check dumpsters' availability

    1.2 Check dumpsters' occupied volume

    1.3 Check dumpsters' type

    1.4 Check collected type of waste
    
2. Check trucks' real time status

    2.1 Check trucks' real time position

    2.2 Check trucks' occupied volume

3. Check missions

    3.1 Check active missions
    
4. Check complaints

    4.1 Show list of complaints
    
    4.2 Check complaint's details
    
6. Register new citizens

    5.1 Creation of a new smart-card

The following diagram shows a visual representation of the requirements.

<!--![Diagram Image Link](./requirement-breakdown-structure.puml)-->