---
id: perceived-vs-actual-wait
title: Perceived vs Actual Wait
land: human-factors
level: beginner
abstraction: concept
parent: waiting
children: []
relations:
  - { type: applies-to, target: wait-time-estimation }
  - { type: applies-to, target: wait-time-data-and-apps }
  - { type: applies-to, target: guest-recovery }
  - { type: contrasts-with, target: duration-neglect }
  - { type: applies-to, target: wait-time-prediction }
summary: Satisfaction is perception minus expectation, so a padded posted time makes a real wait feel like a gift.
tags: [waiting, perception, expectations, posted-times]
visuals: [formula]
interactive_idea: "Set a posted time and an actual time; the widget reports felt satisfaction and whether the guest would call the line 'fast'."
sources: [maister-psychology-of-waiting-lines, mentalfloss-disney-queue-psychology, droit-volet-meck-2007-emotion-time, hui-tse-1996-waits-of-different-lengths]
confidence: high
---
> **Formula** $S = P - E$
- where $S$ is satisfaction with the wait
- $P$ is the wait as the guest perceives it, which the internal clock stretches when they are bored or anxious
- $E$ is the wait the guest expected, usually set by the posted time at the queue entrance
- the same real wait scores higher when the posted time was slightly generous, and lower when it was optimistic

Maister's formula is blunt: satisfaction is perception minus expectation. Neither term is the stopwatch. Perception is run by the [internal clock](../human-factors/time-perception.md), which stretches empty minutes and shrinks absorbing ones. Expectation is set by whatever the guest saw on the way in, chiefly the posted wait.

That is why parks pad. The Mental Floss overview of Disney queue practice describes posted times that deliberately overstate the wait, so most guests reach the station "early" and feel they gained time. The trick has a limit: pad too much and guests balk at a line that would have been fine, which is a cost to [capacity](../operations-business/wait-time-estimation.md). It also leans on measurement, which is where [wait-time apps](../operations-business/wait-time-data-and-apps.md) and [prediction models](../ai-future/wait-time-prediction.md) earn their keep.

The reverse case is what [guest recovery](../operations-business/guest-recovery.md) is for: a posted 20 that turns into 50 leaves a negative S that an apology or a return pass has to repay. Remember too that this is the experiencing self's verdict; once the day is over, [duration neglect](../human-factors/duration-neglect.md) will quietly shrink the whole wait in memory.

## Explore further
- `maister-psychology-of-waiting-lines` — The Psychology of Waiting Lines (the satisfaction formula and eight propositions)
- `mentalfloss-disney-queue-psychology` — The Psychological Tricks Disney Parks Use to Make Long Wait Times More Bearable
- `droit-volet-meck-2007-emotion-time` — How Emotions Colour Our Perception of Time (the internal clock behind the P term)
- `hui-tse-1996-waits-of-different-lengths` — What to Tell Consumers in Waits of Different Lengths: An Integrative Model of Service Evaluation
