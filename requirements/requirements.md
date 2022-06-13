# Requirement Breakdown Structure

The team focused on use cases and user stories to identify and formalize the requirements, building a _Requirement Breakdown Structure_.

The **goal** that unites all the requirements is the optimization of waste collection. At the second level, the goal generates **requirements** (\*). Then, structure presents **functions** (\*.\*) that describe the higher-level functionalities of each requirement. Each function splits up into many **features** (\*.\*.\*) that explain specific details.

### Optimize Waste Collection

1. **Dumpster Infrastructure**

    1.1 Open dumpsters with smart-cards
    
    1.1.1 Authenticate smart-cards
    
    1.1.2 Open and close dumpsters
    
    1.2 Collect and share data
    
    1.2.1 Update occupied volume
    
    1.2.2 Store information about citizens' disposals
    
    1.2.3 Raise issues

2. **Citizen App**

    2.1 Check dumpsters' status
    
    2.1.1 Graphic user interface with dumpsters inside collection points
    
    2.1.2 Check dumpsters' availability
    
    2.1.3 Check dumpsters' occupied volume
    
    2.2 Extraordinary waste collection booking
    
    2.2.3 Create request
    
    2.3 Raise issues
    
    2.3.1 Write a complaint
    
    2.3.2 Send a complaint

3. **Trucks Routing**

    3.1 Plan ordinary waste collection missions
    
    3.1.1 Send "full-dumpster" notification
    
    3.1.2 Find "full dumpsters" in the neighborhood
    
    3.1.3 Compute best route
    
    3.1.4 Track trucks' real time position
    
    3.2 Plan extraordinary waste collection missions
    
    3.2.1 Notification of extraordinary mission requests
    
    3.2.2 Group missions by extraordinary type of waste
    
    3.2.3 Compute best route
    
    3.2.4 Track trucks' real time position

4. **Admin Dashboard**

    4.1 Check collection points' status
    
    4.1.1 Check dumpsters' availability
    
    4.1.2 Check dumpsters' occupied volume
    
    4.2 Check trucks' real time status
    
    4.2.1 Check trucks' real time position
    
    4.2.2 Check trucks' occupied volume
    
    4.3 Check complaints
    
    4.3.1 Show list of complaints
    
    4.4 Register new citizens
    
    4.4.1 Creation of a new smart-card

The following diagram shows a visual representation of the requirements.

<!--![Diagram Image Link](./requirement-breakdown-structure.pm.puml)-->