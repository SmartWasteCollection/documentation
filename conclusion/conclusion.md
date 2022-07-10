#Conclusion

The team is satisfied with the way the Domain Driven Design approach has been carried on. 
During the first part of the project the team members gathered to conduct knowledge crunching sessions. 
These latter allowed the team to reach a uniform knowledge about the domain.
This was fundamental for the further steps of the project.
In fact, even though the team members worked on different components of the system, everyone was able to stay coherent and adhere to the project's goal.

Moreover, the definition of subdomains and bounded contexts allowed designing correct size microservices.
Indeed, they have a well-defined goal and a coherent set of functionalities.
Also, the classification of the subdomains as _core_, _supporting_ or _generic_ made it easier to assign priorities regarding the implementation of the components of the system.
For instance, the _authentication microservice_, that is part of the _user subdomain_, has not yet been implemented in order to focus on the most important ones.

Finally, the decision to adopt a _clean architecture_ for the implementation of the microservices allowed building software that is more resilient.
In fact, the business logic is not influenced by the specific technologies, so it will most likely not change in the future.

Despite the initial part of knowledge crunching, throughout the implementation the team has felt the need to introduce new terms.
These have been added right away to the ubiquitous language in order to avoid further misunderstandings.

During the first part of the implementation stage the team decided how to conduct the project from a _DevOps_ point of view.
The definition of pipelines that included tests and general code quality assurance allowed to automatically check that only "correct" code is deployed to production.
This was the first time that the team tried to fully exploit GitHub Actions and, even thought the implementation process is not yet over, the members have already understood their potential.

In conclusion, the team is satisfied with the job done and with the knowledge acquired from the project and the course.