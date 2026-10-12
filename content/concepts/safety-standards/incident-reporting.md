---
id: incident-reporting
title: Incident Reporting & Data
land: safety-standards
level: intermediate
abstraction: concept
parent: operations-safety
children: []
relations:
  - { type: enables, target: safety-culture }
  - { type: enables, target: guest-research }
  - { type: applies-to, target: vision-safety-monitoring }
  - { type: contrasts-with, target: risk-perception-and-trust }
  - { type: applies-to, target: regulatory-landscape }
summary: How injuries and near misses are recorded, reported to regulators and pooled into the industry's patchy but useful datasets.
tags: [incidents, data, reporting, riddor, statistics]
visuals: [mermaid]
interactive_idea: "Follow one near miss from an operator's radio call through the park's log, the regulator's form and the industry survey, noting what detail is lost at each step."
sources: [ridesdatabase-saferparks-data, iaapa-ride-safety-report-2023, hse-riddor, ridesdatabase-bulletins]
confidence: high
---
```mermaid
flowchart LR
  E["Event: injury, near miss, mechanical fault"] --> P["Park internal report and investigation"]
  P --> R["Regulator report where required: state, HSE RIDDOR, WHS"]
  P --> M["Manufacturer notified: possible bulletin to all owners"]
  P --> S["Industry survey: IAAPA and NSC fixed-site report"]
  R --> D["Public records and databases"]
  M --> D
  S --> D
  D --> L["Trend analysis and lessons"]
```

Incident reporting starts inside the park: operators log every injury, near miss and unexplained fault, and maintenance investigates. From there the path splits. Regulators often require a report; in Great Britain RIDDOR sets out which injuries and dangerous occurrences must be reported to the HSE, and US states each set their own thresholds. The manufacturer should hear about anything mechanical, because a fault on one ride may apply to every unit sold, and the result is a service bulletin to all owners.

The pooled picture is honest but incomplete. IAAPA's North America Fixed-Site Amusement Ride Safety Report, built on an annual survey conducted by the National Safety Council, offers aggregate injury statistics for participating parks. Saferparks gathered state and federal accident records through public-records requests between 2000 and 2017 and warns that the data cannot be used to compare states, parks or years, because reporting rules vary so much, a direct consequence of the [regulatory landscape](../safety-standards/regulatory-landscape.md).

Data is also the raw material of [safety culture](../safety-standards/safety-culture.md): a park that rewards near-miss reports learns faster. It feeds [guest research](../operations-business/guest-research.md), underpins [vision-based safety monitoring](../ai-future/vision-safety-monitoring.md), and quietly contrasts with guests' [risk perception](../human-factors/risk-perception-and-trust.md), which tracks headlines rather than rates.

## Explore further
- `ridesdatabase-saferparks-data` — RidesDatabase: Saferparks accident data from state and federal regulators
- `iaapa-ride-safety-report-2023` — IAAPA: 2023 North America Fixed-Site Amusement Ride Safety Report
- `hse-riddor` — HSE: RIDDOR, Reporting of Injuries, Diseases and Dangerous Occurrences Regulations
- `ridesdatabase-bulletins` — RidesDatabase: Amusement ride safety bulletins
