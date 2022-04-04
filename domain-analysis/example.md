# Domain Analysis

---

In this part we will analyze the domain. 

```plantuml
@startuml App Use Cases
!include ../metamodels/use-cases.iuml

actor "User" as u

scenarios "Use Cases" {
    usecase "Open SWC App" as app
    usecase "Check Dumpster Availability" as check

    include(check, app, up)
}

uses(u, app, right)
uses(u, check, right)
@enduml
```
