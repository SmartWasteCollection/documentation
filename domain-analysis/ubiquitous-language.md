# Ubiquitous Language
The tables below represent the ubiquitous language derived from domain analysis. Each table describes terms related to the same topic.

## Waste
|             Term              |                                               Description                                               |                           Associations                           |
|:-----------------------------:|:-------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------:|
|           **Waste**           |               Unwanted matter of material of any type, that citizens want to get rid of.                |           [Type of Waste](#waste), [Citizen](#citizen)           |
|       **Type of Waste**       |                              Classification of the material of the waste.                               |                         [Waste](#waste)                          |
|      **Ordinary Waste**       |                       Set of types of waste that are daily produced by citizens.                        |  [Waste](#waste), [Type of Waste](#waste), [Citizen](#citizen)   |
|    **Extraordinary Waste**    | Set of types of waste that are difficult to collect. This may be due to their dimension or composition. | [Waste](#waste), [Type of Waste](#waste), [Collect](#collection) |
|      **Unsorted Waste**       |                                 Ordinary waste that is not recyclable.                                  |            [Waste](#waste), [Ordinary Waste](#waste)             |
|     **Plastic/Aluminium**     |                            Ordinary waste composed by plastic or aluminium.                             |            [Waste](#waste), [Ordinary Waste](#waste)             |
|          **Organic**          |                              Ordinary waste that is compostable over time.                              |            [Waste](#waste), [Ordinary Waste](#waste)             |
|           **Glass**           |                                    Ordinary waste composed by glass.                                    |            [Waste](#waste), [Ordinary Waste](#waste)             |
|           **Twigs**           |                    Extraordinary waste composed by pruning of trees or other bushes.                    |          [Waste](#waste), [Extraordinary Waste](#waste)          |
|         **Waste Oil**         |                             Extraordinary waste composed by exhausted oil.                              |          [Waste](#waste), [Extraordinary Waste](#waste)          |
|           **Iron**            |                                  Extraordinary waste composed by iron.                                  |          [Waste](#waste), [Extraordinary Waste](#waste)          |
|        **Electronics**        |                         Extraordinary waste composed by electronic components.                          |          [Waste](#waste), [Extraordinary Waste](#waste)          |
|          **Clothes**          |                              Extraordinary waste composed by old clothes.                               |          [Waste](#waste), [Extraordinary Waste](#waste)          |
| **Other Extraordinary Waste** |                           Every other type that was not described previously.                           |          [Waste](#waste), [Extraordinary Waste](#waste)          |

## Dumpster
|         Term         |                                           Description                                            |                                    Associations                                     |
|:--------------------:|:------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------:|
|     **Dumpster**     |                                      A container for waste.                                      |                                   [Waste](#waste)                                   |
| **Type of Dumpster** |                               Configuration of dumpster features.                                |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |
|     **Features**     |                         Set of characteristics that describe a dumpster.                         |                                [Dumpster](#dumpster)                                |
|       **Size**       |         Feature that represents dumpster's physical measure. It could be large or small.         |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |
|    **Large Size**    |     Type of dumpster that can be opened using a foot lever. It can store up to 1000 liters.      | [Dumpster](#dumpster), [Dumpster Feature](#dumpster), [Type of Dumpster](#dumpster) |
|    **Small Size**    |           Type of dumpster that can be opened by hand. It can store up to 250 liters.            | [Dumpster](#dumpster), [Dumpster Feature](#dumpster), [Type of Dumpster](#dumpster) |
|      **Color**       |                 Feature of dumpsters that shows the type of waste they collect.                  |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |
|     **Opening**      | It defines the way dumpsters are opened. This can be done either using a foot lever or by hands. |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |
|     **Capacity**     |            The maximum amount of waste (in liters) that a single dumpster can store.             |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |
| **Occupied Volume**  |           The amount of waste (in liters) that a single dumpster is currently storing.           |                [Dumpster](#dumpster), [Dumpster Feature](#dumpster)                 |

## Truck
|        Term         |                                     Description                                     |                              Associations                              |
|:-------------------:|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------:|
|  **Garbage Truck**  | A truck specially designed to collect waste and transport it to the disposal point. | [Collect](#collection), [Waste](#waste), [Disposal Point](#collection) |
|  **Truck Driver**   |                  A company's employee that drives garbage trucks.                   |                        [Garbage Trucks](#truck)                        |
|    **Capacity**     |        The total amount of waste (in liters) that a garbage truck can store.        |                [Waste](#waste), [Garbage Truck](#truck)                |
| **Occupied Volume** |     The amount of waste (in liters) that a garbage truck is currently storing.      |                [Waste](#waste), [Garbage Truck](#truck)                |
|    **Position**     |                      The current position of a garbage truck.                       |                        [Garbage Truck](#truck)                         |

## Collection
|           Term           |                                                            Description                                                            |                                          Associations                                           |
|:------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|   **Waste Collection**   |                                                  The action of picking up waste.                                                  |                                         [Waste](#waste)                                         |
| **"At Home" Collection** |               The service that the company is willing to offer to collect extraordinary waste at citizens' houses.                |                       [Extraordinary Waste](#waste), [Citizen](#citizen)                        |
|   **Collection Point**   |                                           The group of dumpsters in a residential area.                                           |                     [Dumpster](#dumpster), [Residential Area](#collection)                      |
|       **Province**       |                     A geopolitical area a country is divided into. Each province has its own disposal point.                      |                                  [Disposal Point](#collection)                                  |
|   **Residential Area**   |                          A partition of a province. Each residential area has its own collection point.                           |                    [Province](#collection), [Collection Point](#collection)                     |
|       **Mission**        |   The trip that a garbage truck performs stopping at multiple collection points and collecting a single ordinary type of waste.   |       [Garbage Truck](#truck), [Ordinary Waste](#waste), [Collection Point](#collection)        |
|  **"At Home" Mission**   | The trip that a garbage truck performs stopping at multiple citizens' houses and collecting a single extraordinary type of waste. |     [Garbage Truck](#truck), [Extraordinary Waste](#waste), [Collection Point](#collection)     |
|     **Mission Area**     |                                The set of residential areas covered by a garbage truck's mission.                                 |        [Residential Area](#collection), [Garbage Truck](#truck), [Mission](#collection)         |
|    **Disposal Point**    |    A set of buildings with many disposal chains used for waste disposal. Garbage trucks start and finish their missions here.     | [Disposal Chain](#collection), [Waste](#waste), [Garbage Truck](#truck), [Mission](#collection) |
|    **Disposal Chain**    |                                   A sequence of machinery that treat a specific type of waste.                                    |                                     [Type of Waste](#waste)                                     |

## Citizen
|      Term      |                                              Description                                               |                            Associations                            |
|:--------------:|:------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------:|
|  **Citizen**   |                                  An inhabitant of a residential area.                                  |                  [Residential Area](#collection)                   |
| **Smart Card** |           A plastic card with a built-in microprocessor. It will be used to open dumpsters.            |                       [Dumpster](#dumpster)                        |
| **Complaint**  | A message that notifies an issue. It may be sent by citizens, truck drivers and dumpsters themselves.  | [Citizen](#citizen), [Truck Driver](#truck), [Dumpster](#dumpster) |

