# Introduction

----

This documentation is about the Smart Waste Collection project.

You can consult the relative GitHub Pages [here](https://smartwastecollection.github.io/documentation/index.html).

#### Automatic deploy status:
[![Update GitHub Pages](https://github.com/smartwastecollection/documentation/actions/workflows/gh-pages.yml/badge.svg?branch=main)](https://github.com/smartwastecollection/documentation/actions/workflows/gh-pages.yml)

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
