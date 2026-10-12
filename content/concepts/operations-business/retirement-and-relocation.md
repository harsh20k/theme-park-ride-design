---
id: retirement-and-relocation
title: Retirement & Relocation
land: operations-business
level: beginner
abstraction: concept
parent: maintenance-and-lifecycle
children: []
relations:
  - { type: applies-to, target: defunct-parks }
  - { type: applies-to, target: wooden-coasters }
  - { type: contrasts-with, target: retheming-and-overlays }
  - { type: applies-to, target: expansion-and-phasing }
  - { type: applies-to, target: nostalgia }
summary: When a ride stops earning its space it is scrapped, sold, or dismantled and rebuilt at another park.
tags: [operations, lifecycle, relocation, closure]
visuals: [mermaid]
interactive_idea: "A decision tree game: given a ride's age, footprint, reliability and fan following, choose retire, sell, relocate or retheme and see a plausible outcome."
sources: [wikipedia-phoenix-roller-coaster, aecom-theme-index, blooloop-supplier-directory]
confidence: high
---
```mermaid
flowchart TD
  A["Ride under review"] --> B{"Reliable and<br/>cheap to keep?"}
  B -- no --> C{"Footprint needed<br/>for a new project?"}
  B -- yes --> D["Keep, retheme<br/>or overlay"]
  C -- yes --> E{"Steel or portable<br/>design, resale market?"}
  C -- no --> D
  E -- yes --> F["Sell or relocate<br/>dismantle, ship, re-erect"]
  E -- no --> G["Retire and scrap<br/>land cleared"]
```

Every ride eventually stops earning its footprint. Attendance drifts to newer attractions, parts get scarce, or the land is simply worth more as the site of the next big project. The operator then chooses among three endings: retire and scrap, sell to another park, or relocate within the company. Fan nostalgia weighs heavily, which is why closures are announced carefully and farewell events sell merchandise.

Relocation is more common than guests realise. Steel coasters are bolted together and can be unbolted; a used-ride market, with brokers and manufacturers listed in trade directories, moves them between parks and continents. Wooden coasters are harder but not impossible: the Phoenix at Knoebels in Pennsylvania opened in 1947 as the Rocket at Playland Park in San Antonio, was bought in 1984, dismantled in 1985 and rebuilt the same year, and still runs today. Relocated rides often reopen under new names and themes, so relocation and [retheming](../operations-business/retheming-and-overlays.md) travel together.

Retirement feeds [expansion and phasing](../masterplanning/expansion-and-phasing.md): clearing an old flat ride is how a mature park finds room. When a whole park closes, its rides scatter across the industry, a story told in [defunct parks](../history/defunct-parks.md). Retired [wooden coasters](../ride-systems/wooden-coasters.md) are usually demolished; their structure has little resale value.

## Explore further
- `wikipedia-phoenix-roller-coaster` — Phoenix (roller coaster)
- `aecom-theme-index` — TEA/AECOM Theme Index and Museum Index
- `blooloop-supplier-directory` — blooloop supplier directory
