# Subdomain & Bounded Contexts

As the final part of the domain analysis, the team focused on the identification of subdomains and bounded contexts within it. The team identified bounded contexts starting from the user stories.

## Disposal Subdomain

*Core Subdomain*

This core subdomain manages the logic of all the components that make it possible to dispose of waste.

### Dumpster's Monitoring & Control Context

> It allows to continuously monitor and store information about the dumpster's state. For instance, the availability, the occupied volume, the stored type of waste and other useful information. Moreover, it also allows to remotely invoke operations on dumpsters, such as opening and closing them.

### Collection Point Management Context

> It is responsible for updating information about collection point's state, such as the insertion of a new dumpster and other functionalities. Moreover, it allows to access all the information about the collection point's state and its position.

### Disposal Point Context

> It stores information about disposal points.

## Collection Subdomain

*Core Subdomain*

This core subdomain manages the logic of all the components that allow the company to collect waste. It's also responsible for creating missions and assigning those to trucks.

### Truck's Monitoring & Control Context 

> It allows to continuously monitor and store information about the truck's state. For instance, it provides the position, the occupied volume, the carried waste type, whether it is involved in a mission and other useful information.

### Mission Context

> It is responsible for the generation of missions. Moreover, it assigns missions to available trucks.

### Booking Context

> It provides operations to create "at home" collection requests, to update and visualize them.

## Complaint Subdomain

*Supporting Subdomain*

This supporting subdomain provides the functionalities that make it possible to notify, handle and close complaints.

### Complaint Context

> It provides functionalities to notify issues, read and manage them.

## User Subdomain

*Generic Subdomain*

This generic subdomain contains the logic that manages all the entities that need to use system's functionalities.

### Smart Card Context

> It is the context that allows to create smart cards and to authenticate them.

### Authentication Context

> It is responsible for citizens' and managers' authentication.