# Domain Problem Analysis
In this section we have interviewed the company's manager with the aim of improving our understanding of the analyzed domain.

1. **How is the waste collection currently managed?**
> At the moment, garbage trucks periodically collect waste from the collection points. We have a schedule that tells us which types of waste we should collect on a given day. Each garbage truck starts from the disposal point and empties the dumpsters in all the collection points in its mission area. A garbage truck only collects one type of waste per mission.
> 
> We would like to optimise the waste collection process in order for citizens to always be able to dispose of their waste in the nearest collection point.

2. **How many dumpsters are there in each collection point?**
> Depending on the amount of people that live in the area where the collection point is located, there may be one or several dumpsters for each type of common waste. For instance, a collection point may have two dumpsters for plastic, two for paper and one for each other type of waste.

3. **Which types of dumpsters are there in each collection point?**
> The waste types that are collected in every collection point are _unsorted_, _organic_, _plastic/aluminium_, _paper_ and _glass_. We are also thinking about introducing further kinds of waste. 
> 
> Dumpsters may also have different physical traits depending on the type of waste that they collect. Indeed, there are two different sizes of dumpsters. The larger one is suitable for types of waste that do not need to be collected frequently. On the other hand, the smaller one is used for instance for organic waste.
> 
> At the moment, the larger dumpsters can be opened using a foot lever while the smaller ones are opened with hands. However, we would like citizens to be able to open all of them using a smart card.

4. **Which types of waste are you willing to collect? How?**
> We would like to be able to collect common waste directly at collection points. On the other hand, we would like to provide an "at home" collection on demand for extraordinary waste.
> 
> Common waste includes:
> 
> - paper
> - plastic/aluminium
> - glass
> - unsorted waste
> - organic waste
> 
> Extraordinary waste includes:
> 
> - twigs
> - waste oil
> - iron
> - electronics
> - clothes
> - others

5. **What are the main characteristics of the dumpsters?**
> The features of a dumpster are:
> - size: volume of waste it can contain (measured in liters)
> - color: indicates the type of waste that it contains
> - opening: it can be either through a foot lever or by hands.

6. **Which information do you want to store about a single dumpster?**
> For each dumpster we would like to know:
> 
> - its occupied volume
> - whether it is open or closed
> - whether it is working or not
> - whether it needs to be emptied

7. **Which kind of garbage trucks do you have? How many waste types can a single truck collect?**
> We only have one type of truck. During a mission, it can only collect a single type of waste.
> 
> We are also planning on acquiring specific trucks for extraordinary waste to be able to fulfill clients' requests.

8. **How many garbage trucks do you have?**
> There are from 10 to 30 trucks parked in every disposal point. The precise amount depends on the number of collection points in the same province as the disposal point.

9. **Which information do you want to store about a single garbage truck?**
> We would like to store:
> 
> - its total capacity
> - current occupied volume
> - the type of waste that is currently being collected
> - its real time position

10. **Where do the garbage trucks bring the waste?**
> The waste is brought to the disposal point of that province.

11. **So, do garbage trucks collect waste from every collection point of a province?**
> No, each garbage truck is assigned a mission, and therefore a mission area. A mission area is made up of a set of residential areas that are physically close to one another.

12. **How are disposal points distributed in the territory?**
> There is a disposal point in every province. Each disposal point gathers waste from the collection points of that province. A province is further divided into residential areas where a single collection point is located. The residential areas are sized in a suitable way so that each one can cover the same amount of people.

13. **Which waste types does a single disposal point manage?**
> Each disposal point manages every type of waste. Each type of waste is handled by a specific disposal chain inside the disposal point.

14. **How do you want to manage extraordinary waste?**
> At the moment, extraordinary waste is directly brought to disposal points by citizens.
> 
> However, we would like to let citizens book an appointment to collect extraordinary waste at their home.