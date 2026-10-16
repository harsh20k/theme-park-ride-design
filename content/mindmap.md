# Knowledge Mindmap — Theme Park & Ride Design

Draft hierarchy (step 1 of the process). Source of truth: `tools/hierarchy.txt`; regenerate with `python3 tools/build_mindmap.py`.

Depth = abstraction: **Land → Super-concept → Concept → Sub-concept**. Each non-land node becomes one concept card at `content/concepts/<land>/<slug>.md`.

## Counts

| Land | Super | Concept | Sub | Total |
|---|---|---|---|---|
| Story & Experience Design (`story-experience`) | 5 | 27 | 6 | 38 |
| Human Factors & Guest Psychology (`human-factors`) | 8 | 69 | 29 | 106 |
| Masterplanning & Park Layout (`masterplanning`) | 5 | 29 | 1 | 35 |
| Ride Systems & Types (`ride-systems`) | 6 | 46 | 5 | 57 |
| Ride Engineering & Physics (`ride-engineering`) | 7 | 37 | 3 | 47 |
| Safety & Standards (`safety-standards`) | 4 | 24 | 4 | 32 |
| Show Technology (`show-technology`) | 6 | 31 | 0 | 37 |
| Sensory & Environmental Design (`sensory-environment`) | 6 | 25 | 0 | 31 |
| Design Process & Craft (`design-process`) | 6 | 28 | 0 | 34 |
| Operations & Business (`operations-business`) | 5 | 30 | 3 | 38 |
| History & Landmark Attractions (`history`) | 6 | 42 | 0 | 48 |
| AI & Future Tech (`ai-future`) | 5 | 21 | 0 | 26 |
| Careers & Learning Path (`careers`) | 4 | 18 | 0 | 22 |
| **All lands** | 73 | 427 | 51 | **551** |

## Full mindmap

```mermaid
mindmap
  root((Theme Park & Ride Design))
    story_experience((Story & Experience Design))
      themed_storytelling[Themed Storytelling]
        Story-Driven Design
          Story Bible & Backstory
          Three-Act Ride Structure
        Environmental Storytelling
          Set Dressing & Props
          Plussing
        IP Adaptation & Original Stories
        Theme vs Decoration
        Architecture as Character
        Total-Immersion Lands
      spatial_storytelling[Spatial Storytelling]
        Weenies
        Forced Perspective
        Sightlines & Visual Intrusion
        The Berm
        Thresholds & Portals
        Reveal & Concealment
        Scale & Intimacy
      pacing_and_structure[Pacing & Structure]
        Queue Storytelling
          Pre-Show
          Load Area as Story Moment
        Ride Beat Sheet
        Tension & Release Curve
        Finale & Unload Design
        Kinetics & Motion in Scenes
        Re-rideability
      scripts_and_performance[Scripts & Performance]
        Show Scripts & Spiels
        Cast & Character Role-Play
        Interactive Narrative & Agency
        Story Rooms & Walkthroughs
      borrowed_crafts[Borrowed Crafts]
        Cinematic Grammar
        Level Design Parallels
        Theatre Staging
        Museum & Exhibit Interpretation
    human_factors((Human Factors & Guest Psychology))
      emotion_and_thrill[Emotion & Thrill]
        Fear vs Fun
          Safe Danger Paradox
          Protective Frame
        Anticipation & Dread
        Arousal & Relief
          Excitation Transfer
          Optimal Arousal
        Thrill & Arousal
        Awe
        Nostalgia
        Surprise & Delight
        Emotional Contagion & Screaming
        Sensation Seeking
      memory[Memory]
        Peak-End Rule
        Experiencing vs Remembering Self
        Duration Neglect
        Photo Moments & On-Ride Photos
        Reminiscence Bump
        Souvenirs & Memory Cues
        Narrative Memory
        Why Rides Become Lifelong Memories
      perception[Perception]
        Vestibular System
          Semicircular Canals
          Otolith Organs
        Proprioception & Haptics
        Motion Sickness
          Sensory Conflict Theory
          Postural Instability Theory
          Vection & Visually Induced Motion Sickness
        Perceptual Thresholds
        Optical Illusions
          Size Constancy & Scale Cues
          Depth Cues
        Multisensory Integration
          Cross-Modal Effects
          Scent & Memory
        Visual Attention & Gaze
        Peripheral Vision & Speed Perception
        Dark Adaptation
        Time Perception
      waiting[Waiting]
        Perceived vs Actual Wait
        Occupied Time
        Queue Fairness
        Uncertainty & Explained Waits
        Balking & Reneging
        Virtual Queues
        Paid Priority Access
        Queue Boredom & Phones
        Interactive Queues
        Switchback Design
      behavior_and_decision[Behavior & Decision]
        Wayfinding
          Landmarks, Paths & Nodes
          Signage Hierarchy
          Desire Lines
        Crowd Behavior
          Herding & Social Proof
          Turn Bias
          Personal Space & Density
        Decision Fatigue
        Choice Architecture & Nudges
        Sunk Cost & Commitment
        Group Dynamics & Families
          Rider Switch
          Lowest Common Denominator Planning
        Kids vs Adults vs Seniors
        Risk Perception & Trust
        Rule-Following & Rider Compliance
        Play & Exploration
      comfort_and_body[Comfort & Body]
        Ergonomics
        Anthropometrics
          Percentile Design
          Seat Width & Hip Breadth
        Restraint Fit
        Height & Health Requirements
        Heat & Thermal Comfort
        Walking Fatigue & Rest
        Hunger, Hydration & Breaks
        Pregnancy & Medical Exclusions
        Noise Exposure
      inclusion[Inclusion]
        Accessibility & Universal Design
          Transfer & Accessible Vehicles
          Disability Access Services
        Neurodiversity & Sensory-Friendly Design
          Sensory Guides & Quiet Rooms
        Cultural Differences Across Parks
          Localisation of Rides & Stories
        Language & Multilingual Design
        Economic Inclusion
        Family & Care Facilities
      flow_and_immersion[Flow & Immersion]
        Presence
        Suspension of Disbelief
        Breaking Immersion
          Visual Intrusion
          Operational Intrusion
        Flow Theory
        Narrative Transportation
        Uncanny Valley
        Agency vs Spectacle
    masterplanning((Masterplanning & Park Layout))
      park_structure[Park Structure]
        Hub-and-Spoke
        Loop & Linear Layouts
        Land Design & Themed Zones
        Entry Sequence
        Central Icon
        Transitions Between Lands
        Site Selection & Context
      guest_flow_and_capacity[Guest Flow & Capacity]
        Capacity Planning
          Design Day
        Attraction Mix & Balance
        Guest Flow Patterns
        Pinch Points & Bottlenecks
        Density & Level of Service
        Rest Areas & Shade
        Food & Retail Placement
        Parade & Show Crowd Planning
      backstage_and_infrastructure[Backstage & Infrastructure]
        Onstage/Backstage Separation
        Utilidors
        Service Roads & Deliveries
        Utilities & Central Plant
        Parking & Transit
        Emergency Access & Evacuation
      park_types[Park Types & Models]
        Regional vs Destination Parks
        Resort Integration
        Indoor & Climate-Controlled Parks
        Water Parks
        Expansion & Phasing
      planning_theory[Planning Theory]
        Urban Planning Parallels
        Landscape Architecture
        Space Syntax
    ride_systems((Ride Systems & Types))
      roller_coasters[Roller Coasters]
        Coaster Anatomy
        Wooden Coasters
        Steel Coasters
        Hybrid Coasters
        Launched Coasters
          LSM & LIM Launch
          Hydraulic Launch
          Pneumatic Launch
          Flywheel & Catapult Launch
        Inverted Coasters
        Wing Coasters
        Flying Coasters
        Dive Coasters
        Spinning & 4D Coasters
        Family & Junior Coasters
        Shuttle & Boomerang Coasters
        Multi-Launch & Multi-Pass Coasters
        Powered & Mine Train Coasters
      dark_rides[Dark Rides]
        Classic Dark Ride
        Omnimover
        Trackless Ride
        Enhanced Motion Vehicle
        Robot-Arm Ride
        Interactive & Shooting Dark Ride
        Boat Dark Ride
        Suspended Dark Ride
        Screen-Based Dark Ride
        Multi-System Attractions
      simulators_and_motion_bases[Simulators & Motion Bases]
        Motion Base
          Stewart Platform
        Flying Theatre
        Motion Simulator Theatre
        Dome & Screen Hybrids
        Motion Cueing & Washout
      water_rides[Water Rides]
        Log Flume
        River Rapids
        Shoot-the-Chutes
        Water Coaster
        Slow Boat Ride
      flat_rides[Flat Rides]
        Carousel
        Ferris & Observation Wheels
        Drop Tower
        Pendulum & Frisbee Rides
        Swing & Star Flyer Rides
        Inverting Flat Rides
        Spinning Flat Rides
      transport_and_other[Transport & Other Systems]
        Monorail & People Movers
        Park Trains
        Gondolas & Skyrides
        4D Theatres & Walkthroughs
        Ride Classification & Thrill Ratings
    ride_engineering((Ride Engineering & Physics))
      forces_and_tolerance[Forces & Human Tolerance]
        G-Force Basics
          Positive G
          Airtime & Negative G
          Lateral G
        G-Tolerance & Duration
        Jerk & Onset Rate
        Greyout & Redout
        Acceleration Envelopes
      track_geometry[Track Geometry]
        Clothoid Loop
        Heartline
        Banking & Superelevation
        Track Elements Catalogue
        Transitions & Spline Design
        Airtime Hills & Vertical Curves
        Track Types
      energy_and_motion[Energy & Motion]
        Energy Conversion on a Coaster
        Friction & Drag Losses
        Train Mass & Weather Effects
        Lift Systems
        Speed Profile & Simulation
        Water Ride Hydraulics
      braking_and_control_hardware[Braking & Control Hardware]
        Block System
        Brake Types
        Anti-Rollback
        Sensors & Proximity Switches
        Wheels & Bogies
        Drive Tires & Transfer Tracks
      structures_and_materials[Structures & Materials]
        Supports & Foundations
        Fatigue & Cyclic Loading
        Dynamic Loads & Vibration
        Wood vs Steel Behavior
        Corrosion & Weathering
        Thermal Expansion
      vehicle_and_restraint_engineering[Vehicle & Restraint Engineering]
        Restraint Mechanisms
        Restraint Locking & Redundancy
        Seat Design & Containment
        Vehicle Suspension & Ride Comfort
      rider_biomechanics[Rider Biomechanics]
        Head & Neck Loads
        Rider Position
        Rough Rides & Headbanging
    safety_standards((Safety & Standards))
      standards_and_regulation[Standards & Regulation]
        ASTM F24 Committee
          ASTM F2291 Design
          ASTM F770 Operations
          ASTM F1193 Manufacturing & Quality
          ASTM F2974 Auditing
        EN 13814
        ISO 17842
        Regulatory Landscape
        National Inspection Schemes
      design_safety[Design Safety]
        Risk Assessment & FMEA
        Ride Control Systems
        Redundancy & Fail-Safe
        Safety Integrity Levels
        Reach Envelope & Clearance
        Emergency Stop & Evacuation Design
        Restraint Design Rules
        Patron Accommodation
      operations_safety[Operations Safety]
        Inspections & NDT
        Maintenance Programs
        Operator Training & Certification
        Dispatch Procedures
        Weather & Lightning Policies
        Incident Reporting & Data
      lessons_from_incidents[Lessons from Incidents]
        Notable Incidents Overview
        Human-Factors Incidents
        Mechanical Failure Cases
        Design Oversight Cases
        Safety Culture
    show_technology((Show Technology))
      animatronics[Animatronics]
        Audio-Animatronics History
        Figure Actuation
        Figure Programming & Animation
        Skin, Hair & Costume
        Untethered & Free-Roaming Figures
        Figure Reliability & Duty Cycle
      projection_and_screens[Projection & Screens]
        Projection Mapping
        Domes & Wraparound Screens
        Stereoscopic 3D
        Screens vs Physical Sets
        Projector Blending & Alignment
      illusions[Illusions]
        Pepper's Ghost
        Scrims & Transparency
        Mirrors & Infinity Rooms
        Practical vs Digital Effects
        Blacklight & UV Paint
        Misdirection & Magic Principles
      lighting_and_audio[Lighting & Audio]
        Theatrical Lighting
        Lighting Control Protocols
        Onboard & Spatial Audio
        Audio Triggers & Masking
        Sound Design Pipeline
      special_effects[Special Effects]
        Fire, Water & Fog Effects
        Pyrotechnics
        Wind, Heat & Scent Effects
        Water Screens & Fountains
        Nighttime Spectaculars & Drones
      show_integration[Show Integration]
        Show Control Systems
        Ride-Show Synchronization
        Show Action Equipment
        Media Servers & Real-Time Engines
    sensory_environment((Sensory & Environmental Design))
      sound_design[Soundscapes]
        Area Music & Soundscapes
        Audio Zoning & Bleed
        Ambient & Effects Loops
      scent_design[Scent Design]
        Smellitzers & Scent Delivery
        Scent as Story Cue
      light_and_color[Light & Color]
        Lighting Mood & Color Temperature
        Color Psychology
        Color Scripts
        Night vs Day Design
        Go-Away Green & Camouflage Palettes
      materials_and_form[Materials & Form]
        Materials & Texture
        Faux Finishes & Aging
        Paving & Ground Plane Storytelling
        Tactile & Touchable Design
      landscape_and_climate[Landscape & Climate]
        Planting Design
        Water Features
        Shade, Microclimate & Cooling
        Rain & Weather Design
        Seasonal Overlays
      environmental_psychology[Environmental Psychology]
        Prospect-Refuge Theory
        Biophilia
        Servicescape
        Atmospherics
        Crowding Perception & Enclosure
        Visual Complexity & Coherence
    design_process((Design Process & Craft))
      concept_phase[Concept Phase]
        Blue Sky
        Concept Art & Visual Development
        Design Intent Documents
        Mood Boards & References
        Feasibility & Early Costing
      design_development[Design Development]
        Schematic Design
        Models & Maquettes
        Previsualization
        VR Design Review
        Ride Layout Design
        Engineering Handoff & BIM
        Mock-ups & Prototypes
      fabrication[Fabrication]
        Rockwork
        Scenic Painting & Aging
        Themed Facade Construction
        Figure Fabrication
        Signage & Graphics
      art_direction_and_teams[Art Direction & Teams]
        Art Direction
        Show Producer & Project Lead
        Cross-Discipline Collaboration
        Design Reviews & Gates
      installation_and_opening[Installation & Opening]
        Site Integration & Construction
        Show Install & Programming
        Testing, Adjusting & Commissioning
        Soft Opening & Previews
        Post-Opening Plussing
      pipeline_overview[Concept-to-Opening Pipeline]
        Phase Timeline
        Scope & Value Engineering
    operations_business((Operations & Business))
      throughput_and_queueing[Throughput & Queueing]
        Throughput Math
          Dispatch Interval
          Load & Unload Design
        Queueing Theory
          Little's Law
        Wait Time Estimation
        Downtime & Availability
        Capacity vs Demand Curves
      park_operations[Park Operations]
        Ride Operations Staffing
        Cast & Guest Interaction
        Crowd Management & Event Ops
        Entertainment Scheduling
        Guest Services & Recovery
        Opening & Closing Procedures
      maintenance_and_lifecycle[Maintenance & Lifecycle]
        Preventive Maintenance
        Ride Lifecycle & Refurbishment
        Retheming & Overlays
        Retirement & Relocation
        Spare Parts & Obsolescence
      business_and_finance[Business & Finance]
        Budgets & Capital Projects
        ROI & Attendance Modeling
        Pricing & Dynamic Pricing
        Per-Capita Spending
        Seasonality & Events
        Hotels, Resorts & Length of Stay
        IP Licensing Economics
        Industry Structure
        The Experience Economy
        Retail as Attraction
      data_and_technology[Data & Technology]
        Wait-Time Data & Apps
        Wearables & Guest Identity
        Crowd Analytics
        Guest Research & Surveys
    history((History & Landmark Attractions))
      origins[Origins]
        Pleasure Gardens & World's Fairs
        Coney Island & Amusement Parks
        Early Coasters
        Trolley Parks
        Tivoli & European Roots
      disneyland_revolution[The Disneyland Revolution]
        Disneyland 1955
        Walt Disney & the Imagineers
        1964 New York World's Fair
        Walt Disney World & EPCOT
        Disney's Global Parks
      landmark_attractions[Landmark Attractions]
        Pirates of the Caribbean
        Haunted Mansion
        Space Mountain
        Matterhorn Bobsleds
        Indiana Jones Adventure
        Tower of Terror
        Spider-Man & Transformers
        Harry Potter and the Forbidden Journey
        Rise of the Resistance
        Flight of Passage
        Expedition Everest
        Mystic Manor
        Symbolica
        The Wizarding World of Harry Potter
        Star Wars: Galaxy's Edge
      coaster_milestones[Coaster Milestones]
        Tubular Steel Breakthrough
        Corkscrew & Loop Revival
        Hyper & Giga Era
        Strata Coasters
        Launch Era
        RMC Hybrid Era
      key_people_and_firms[Key People & Firms]
        Arrow Dynamics
        Schwarzkopf & Stengel
        B&M, Intamin, Mack, Vekoma & RMC
        Legendary Imagineers
        Universal Creative
        Merlin Magic Making
      industry_evolution[Industry Evolution]
        Universal & the IP Wars
        Asian Expansion
        European Park Tradition
        Defunct Parks & Failures
        Pandemic & Reservation Era
    ai_future((AI & Future Tech))
      ai_in_design[AI in Design]
        Generative Concepting
        Procedural Layout & Optimization
        Digital Twins
        Ride Simulation & ML Surrogates
      ai_in_operations[AI in Operations]
        Crowd Modeling & Agent-Based Simulation
        Wait-Time Prediction
        Predictive Maintenance
        Personalization & Dynamic Itineraries
        Computer Vision Safety Monitoring
      robotics_and_characters[Robotics & Characters]
        Free-Roaming Character Robots
        Reinforcement Learning for Figures
        Stuntronics
      immersive_media[Immersive Media]
        VR & AR in Parks
        Real-Time Engines in Attractions
        Personalized & Branching Rides
        Haptics & Next-Gen Motion
        Galactica, the VR Coaster Experiment
      futures_and_ethics[Futures & Ethics]
        Data Privacy & Surveillance
        Human Craft vs Automation
        Sustainability & Energy
        Location-Based Entertainment
    careers((Careers & Learning Path))
      roles[Roles]
        Creative Roles
        Engineering Roles
        Show Technology Roles
        Planning & Operations Roles
        Project & Production Roles
      skills[Skills]
        Portfolio Building
        Software Toolkit
        Storytelling for Designers
        Systems Thinking
      programs_and_community[Programs & Community]
        University Programs
        Competitions & Imaginations
        Conferences
        Professional Bodies
        Internships & Entry Paths
      learning_resources[Learning Resources]
        Imagineering in a Box
        Reading List
        Podcasts & Channels
        Design Challenges & Practice
```

## Outline with slugs and levels

Format: `slug` — Title *(level)*. Indent shows hierarchy.

### Story & Experience Design — `story-experience`

- `themed-storytelling` — Themed Storytelling *(beginner)*
  - `story-driven-design` — Story-Driven Design *(beginner)*
    - `story-bible` — Story Bible & Backstory *(beginner)*
    - `three-act-ride` — Three-Act Ride Structure *(intermediate)*
  - `environmental-storytelling` — Environmental Storytelling *(beginner)*
    - `set-dressing-and-props` — Set Dressing & Props *(beginner)*
    - `plussing` — Plussing *(beginner)*
  - `ip-adaptation` — IP Adaptation & Original Stories *(intermediate)*
  - `theme-vs-decoration` — Theme vs Decoration *(beginner)*
  - `architecture-as-character` — Architecture as Character *(intermediate)*
  - `immersive-lands` — Total-Immersion Lands *(intermediate)*
- `spatial-storytelling` — Spatial Storytelling *(beginner)*
  - `weenies` — Weenies *(beginner)*
  - `forced-perspective` — Forced Perspective *(beginner)*
  - `sightlines` — Sightlines & Visual Intrusion *(intermediate)*
  - `the-berm` — The Berm *(beginner)*
  - `thresholds-and-portals` — Thresholds & Portals *(beginner)*
  - `reveal-and-concealment` — Reveal & Concealment *(intermediate)*
  - `scale-and-intimacy` — Scale & Intimacy *(intermediate)*
- `pacing-and-structure` — Pacing & Structure *(intermediate)*
  - `queue-storytelling` — Queue Storytelling *(beginner)*
    - `pre-show` — Pre-Show *(beginner)*
    - `load-as-story` — Load Area as Story Moment *(intermediate)*
  - `ride-beat-sheet` — Ride Beat Sheet *(intermediate)*
  - `tension-and-release` — Tension & Release Curve *(intermediate)*
  - `finale-design` — Finale & Unload Design *(intermediate)*
  - `kinetics-in-scenes` — Kinetics & Motion in Scenes *(intermediate)*
  - `rerideability` — Re-rideability *(intermediate)*
- `scripts-and-performance` — Scripts & Performance *(intermediate)*
  - `show-scripts` — Show Scripts & Spiels *(beginner)*
  - `cast-role-play` — Cast & Character Role-Play *(beginner)*
  - `interactive-narrative` — Interactive Narrative & Agency *(advanced)*
  - `story-rooms-and-walkthroughs` — Story Rooms & Walkthroughs *(intermediate)*
- `borrowed-crafts` — Borrowed Crafts *(intermediate)*
  - `cinematic-grammar` — Cinematic Grammar *(intermediate)*
  - `level-design-parallels` — Level Design Parallels *(intermediate)*
  - `theatre-staging` — Theatre Staging *(intermediate)*
  - `exhibit-interpretation` — Museum & Exhibit Interpretation *(intermediate)*

### Human Factors & Guest Psychology — `human-factors`

- `emotion-and-thrill` — Emotion & Thrill *(beginner)*
  - `fear-vs-fun` — Fear vs Fun *(beginner)*
    - `safe-danger-paradox` — Safe Danger Paradox *(beginner)*
    - `protective-frame` — Protective Frame *(intermediate)*
  - `anticipation-and-dread` — Anticipation & Dread *(beginner)*
  - `arousal-and-relief` — Arousal & Relief *(intermediate)*
    - `excitation-transfer` — Excitation Transfer *(intermediate)*
    - `optimal-arousal` — Optimal Arousal *(intermediate)*
  - `thrill-and-arousal` — Thrill & Arousal *(beginner)*
  - `awe` — Awe *(beginner)*
  - `nostalgia` — Nostalgia *(beginner)*
  - `surprise-and-delight` — Surprise & Delight *(beginner)*
  - `emotional-contagion` — Emotional Contagion & Screaming *(intermediate)*
  - `sensation-seeking` — Sensation Seeking *(intermediate)*
- `memory` — Memory *(beginner)*
  - `peak-end-rule` — Peak-End Rule *(beginner)*
  - `experiencing-vs-remembering-self` — Experiencing vs Remembering Self *(intermediate)*
  - `duration-neglect` — Duration Neglect *(intermediate)*
  - `photo-moments` — Photo Moments & On-Ride Photos *(beginner)*
  - `reminiscence-bump` — Reminiscence Bump *(intermediate)*
  - `souvenirs-and-memory-cues` — Souvenirs & Memory Cues *(beginner)*
  - `narrative-memory` — Narrative Memory *(intermediate)*
  - `lifelong-ride-memories` — Why Rides Become Lifelong Memories *(beginner)*
- `perception` — Perception *(intermediate)*
  - `vestibular-system` — Vestibular System *(intermediate)*
    - `semicircular-canals` — Semicircular Canals *(advanced)*
    - `otolith-organs` — Otolith Organs *(advanced)*
  - `proprioception-and-haptics` — Proprioception & Haptics *(intermediate)*
  - `motion-sickness` — Motion Sickness *(intermediate)*
    - `sensory-conflict-theory` — Sensory Conflict Theory *(intermediate)*
    - `postural-instability-theory` — Postural Instability Theory *(advanced)*
    - `vection` — Vection & Visually Induced Motion Sickness *(intermediate)*
  - `perceptual-thresholds` — Perceptual Thresholds *(advanced)*
  - `optical-illusions` — Optical Illusions *(beginner)*
    - `size-constancy` — Size Constancy & Scale Cues *(intermediate)*
    - `depth-cues` — Depth Cues *(intermediate)*
  - `multisensory-integration` — Multisensory Integration *(intermediate)*
    - `cross-modal-effects` — Cross-Modal Effects *(advanced)*
    - `scent-and-memory` — Scent & Memory *(beginner)*
  - `visual-attention` — Visual Attention & Gaze *(intermediate)*
  - `peripheral-vision-and-speed` — Peripheral Vision & Speed Perception *(intermediate)*
  - `dark-adaptation` — Dark Adaptation *(beginner)*
  - `time-perception` — Time Perception *(intermediate)*
- `waiting` — Waiting *(beginner)*
  - `perceived-vs-actual-wait` — Perceived vs Actual Wait *(beginner)*
  - `occupied-time` — Occupied Time *(beginner)*
  - `queue-fairness` — Queue Fairness *(beginner)*
  - `explained-waits` — Uncertainty & Explained Waits *(beginner)*
  - `balking-and-reneging` — Balking & Reneging *(intermediate)*
  - `virtual-queues` — Virtual Queues *(beginner)*
  - `paid-priority-access` — Paid Priority Access *(intermediate)*
  - `queue-boredom` — Queue Boredom & Phones *(beginner)*
  - `interactive-queues` — Interactive Queues *(beginner)*
  - `switchback-design` — Switchback Design *(intermediate)*
- `behavior-and-decision` — Behavior & Decision *(intermediate)*
  - `wayfinding` — Wayfinding *(beginner)*
    - `landmarks-and-nodes` — Landmarks, Paths & Nodes *(intermediate)*
    - `signage-hierarchy` — Signage Hierarchy *(intermediate)*
    - `desire-lines` — Desire Lines *(beginner)*
  - `crowd-behavior` — Crowd Behavior *(intermediate)*
    - `herding-and-social-proof` — Herding & Social Proof *(intermediate)*
    - `turn-bias` — Turn Bias *(intermediate)*
    - `personal-space-and-density` — Personal Space & Density *(intermediate)*
  - `decision-fatigue` — Decision Fatigue *(beginner)*
  - `choice-architecture` — Choice Architecture & Nudges *(intermediate)*
  - `sunk-cost-and-commitment` — Sunk Cost & Commitment *(intermediate)*
  - `group-dynamics` — Group Dynamics & Families *(beginner)*
    - `rider-switch` — Rider Switch *(beginner)*
    - `lowest-common-denominator` — Lowest Common Denominator Planning *(intermediate)*
  - `age-differences` — Kids vs Adults vs Seniors *(beginner)*
  - `risk-perception-and-trust` — Risk Perception & Trust *(intermediate)*
  - `rider-compliance` — Rule-Following & Rider Compliance *(intermediate)*
  - `play-and-exploration` — Play & Exploration *(beginner)*
- `comfort-and-body` — Comfort & Body *(intermediate)*
  - `ergonomics` — Ergonomics *(beginner)*
  - `anthropometrics` — Anthropometrics *(intermediate)*
    - `percentile-design` — Percentile Design *(intermediate)*
    - `seat-width-and-hip-breadth` — Seat Width & Hip Breadth *(advanced)*
  - `restraint-fit` — Restraint Fit *(intermediate)*
  - `height-and-health-requirements` — Height & Health Requirements *(beginner)*
  - `thermal-comfort` — Heat & Thermal Comfort *(beginner)*
  - `walking-fatigue` — Walking Fatigue & Rest *(beginner)*
  - `hunger-and-hydration` — Hunger, Hydration & Breaks *(beginner)*
  - `medical-exclusions` — Pregnancy & Medical Exclusions *(intermediate)*
  - `noise-exposure` — Noise Exposure *(intermediate)*
- `inclusion` — Inclusion *(beginner)*
  - `accessibility` — Accessibility & Universal Design *(beginner)*
    - `accessible-vehicles` — Transfer & Accessible Vehicles *(intermediate)*
    - `disability-access-services` — Disability Access Services *(beginner)*
  - `neurodiversity` — Neurodiversity & Sensory-Friendly Design *(beginner)*
    - `sensory-guides-and-quiet-rooms` — Sensory Guides & Quiet Rooms *(beginner)*
  - `cultural-differences` — Cultural Differences Across Parks *(intermediate)*
    - `localisation` — Localisation of Rides & Stories *(intermediate)*
  - `multilingual-design` — Language & Multilingual Design *(beginner)*
  - `economic-inclusion` — Economic Inclusion *(intermediate)*
  - `family-facilities` — Family & Care Facilities *(beginner)*
- `flow-and-immersion` — Flow & Immersion *(intermediate)*
  - `presence` — Presence *(intermediate)*
  - `suspension-of-disbelief` — Suspension of Disbelief *(beginner)*
  - `breaking-immersion` — Breaking Immersion *(beginner)*
    - `visual-intrusion` — Visual Intrusion *(beginner)*
    - `operational-intrusion` — Operational Intrusion *(intermediate)*
  - `flow-theory` — Flow Theory *(intermediate)*
  - `narrative-transportation` — Narrative Transportation *(advanced)*
  - `uncanny-valley` — Uncanny Valley *(beginner)*
  - `agency-vs-spectacle` — Agency vs Spectacle *(intermediate)*

### Masterplanning & Park Layout — `masterplanning`

- `park-structure` — Park Structure *(beginner)*
  - `hub-and-spoke` — Hub-and-Spoke *(beginner)*
  - `loop-and-linear-layouts` — Loop & Linear Layouts *(beginner)*
  - `land-design` — Land Design & Themed Zones *(beginner)*
  - `entry-sequence` — Entry Sequence *(beginner)*
  - `central-icon` — Central Icon *(beginner)*
  - `land-transitions` — Transitions Between Lands *(intermediate)*
  - `site-selection` — Site Selection & Context *(intermediate)*
- `guest-flow-and-capacity` — Guest Flow & Capacity *(intermediate)*
  - `capacity-planning` — Capacity Planning *(intermediate)*
    - `design-day` — Design Day *(intermediate)*
  - `attraction-mix` — Attraction Mix & Balance *(intermediate)*
  - `guest-flow-patterns` — Guest Flow Patterns *(intermediate)*
  - `pinch-points` — Pinch Points & Bottlenecks *(intermediate)*
  - `level-of-service` — Density & Level of Service *(advanced)*
  - `rest-areas` — Rest Areas & Shade *(beginner)*
  - `food-and-retail-placement` — Food & Retail Placement *(intermediate)*
  - `parade-and-show-crowds` — Parade & Show Crowd Planning *(intermediate)*
- `backstage-and-infrastructure` — Backstage & Infrastructure *(intermediate)*
  - `onstage-backstage` — Onstage/Backstage Separation *(beginner)*
  - `utilidors` — Utilidors *(beginner)*
  - `service-roads` — Service Roads & Deliveries *(intermediate)*
  - `utilities-and-central-plant` — Utilities & Central Plant *(advanced)*
  - `parking-and-transit` — Parking & Transit *(intermediate)*
  - `emergency-access` — Emergency Access & Evacuation *(intermediate)*
- `park-types` — Park Types & Models *(beginner)*
  - `regional-vs-destination` — Regional vs Destination Parks *(beginner)*
  - `resort-integration` — Resort Integration *(intermediate)*
  - `indoor-parks` — Indoor & Climate-Controlled Parks *(intermediate)*
  - `water-parks` — Water Parks *(beginner)*
  - `expansion-and-phasing` — Expansion & Phasing *(intermediate)*
- `planning-theory` — Planning Theory *(intermediate)*
  - `urban-planning-parallels` — Urban Planning Parallels *(intermediate)*
  - `landscape-architecture` — Landscape Architecture *(intermediate)*
  - `space-syntax` — Space Syntax *(advanced)*

### Ride Systems & Types — `ride-systems`

- `roller-coasters` — Roller Coasters *(beginner)*
  - `coaster-anatomy` — Coaster Anatomy *(beginner)*
  - `wooden-coasters` — Wooden Coasters *(beginner)*
  - `steel-coasters` — Steel Coasters *(beginner)*
  - `hybrid-coasters` — Hybrid Coasters *(intermediate)*
  - `launched-coasters` — Launched Coasters *(beginner)*
    - `lsm-lim-launch` — LSM & LIM Launch *(intermediate)*
    - `hydraulic-launch` — Hydraulic Launch *(intermediate)*
    - `pneumatic-launch` — Pneumatic Launch *(intermediate)*
    - `flywheel-and-catapult-launch` — Flywheel & Catapult Launch *(advanced)*
  - `inverted-coasters` — Inverted Coasters *(beginner)*
  - `wing-coasters` — Wing Coasters *(beginner)*
  - `flying-coasters` — Flying Coasters *(beginner)*
  - `dive-coasters` — Dive Coasters *(beginner)*
  - `spinning-and-4d-coasters` — Spinning & 4D Coasters *(intermediate)*
  - `family-coasters` — Family & Junior Coasters *(beginner)*
  - `shuttle-coasters` — Shuttle & Boomerang Coasters *(beginner)*
  - `multi-launch-coasters` — Multi-Launch & Multi-Pass Coasters *(intermediate)*
  - `powered-coasters` — Powered & Mine Train Coasters *(beginner)*
- `dark-rides` — Dark Rides *(beginner)*
  - `classic-dark-ride` — Classic Dark Ride *(beginner)*
  - `omnimover` — Omnimover *(beginner)*
  - `trackless-ride` — Trackless Ride *(intermediate)*
  - `enhanced-motion-vehicle` — Enhanced Motion Vehicle *(intermediate)*
  - `robot-arm-ride` — Robot-Arm Ride *(intermediate)*
  - `interactive-dark-ride` — Interactive & Shooting Dark Ride *(beginner)*
  - `boat-dark-ride` — Boat Dark Ride *(beginner)*
  - `suspended-dark-ride` — Suspended Dark Ride *(intermediate)*
  - `media-dark-ride` — Screen-Based Dark Ride *(intermediate)*
  - `multi-system-attractions` — Multi-System Attractions *(intermediate)*
- `simulators-and-motion-bases` — Simulators & Motion Bases *(intermediate)*
  - `motion-base` — Motion Base *(intermediate)*
    - `stewart-platform` — Stewart Platform *(advanced)*
  - `flying-theatre` — Flying Theatre *(beginner)*
  - `motion-simulator-theatre` — Motion Simulator Theatre *(beginner)*
  - `dome-and-screen-hybrids` — Dome & Screen Hybrids *(intermediate)*
  - `motion-cueing` — Motion Cueing & Washout *(advanced)*
- `water-rides` — Water Rides *(beginner)*
  - `log-flume` — Log Flume *(beginner)*
  - `river-rapids` — River Rapids *(beginner)*
  - `shoot-the-chutes` — Shoot-the-Chutes *(beginner)*
  - `water-coaster` — Water Coaster *(intermediate)*
  - `slow-boat-ride` — Slow Boat Ride *(beginner)*
- `flat-rides` — Flat Rides *(beginner)*
  - `carousel` — Carousel *(beginner)*
  - `observation-wheel` — Ferris & Observation Wheels *(beginner)*
  - `drop-tower` — Drop Tower *(beginner)*
  - `pendulum-rides` — Pendulum & Frisbee Rides *(beginner)*
  - `swing-rides` — Swing & Star Flyer Rides *(beginner)*
  - `inverting-flats` — Inverting Flat Rides *(intermediate)*
  - `spinning-flats` — Spinning Flat Rides *(beginner)*
- `transport-and-other` — Transport & Other Systems *(beginner)*
  - `monorail-and-people-movers` — Monorail & People Movers *(beginner)*
  - `park-trains` — Park Trains *(beginner)*
  - `gondolas-and-skyrides` — Gondolas & Skyrides *(beginner)*
  - `4d-theatres` — 4D Theatres & Walkthroughs *(beginner)*
  - `ride-classification` — Ride Classification & Thrill Ratings *(beginner)*

### Ride Engineering & Physics — `ride-engineering`

- `forces-and-tolerance` — Forces & Human Tolerance *(intermediate)*
  - `g-force-basics` — G-Force Basics *(beginner)*
    - `positive-g` — Positive G *(beginner)*
    - `airtime-and-negative-g` — Airtime & Negative G *(beginner)*
    - `lateral-g` — Lateral G *(intermediate)*
  - `g-tolerance-and-duration` — G-Tolerance & Duration *(intermediate)*
  - `jerk-and-onset-rate` — Jerk & Onset Rate *(advanced)*
  - `greyout-and-redout` — Greyout & Redout *(intermediate)*
  - `acceleration-envelopes` — Acceleration Envelopes *(advanced)*
- `track-geometry` — Track Geometry *(intermediate)*
  - `clothoid-loop` — Clothoid Loop *(intermediate)*
  - `heartline` — Heartline *(intermediate)*
  - `banking` — Banking & Superelevation *(intermediate)*
  - `track-elements` — Track Elements Catalogue *(beginner)*
  - `spline-transitions` — Transitions & Spline Design *(advanced)*
  - `airtime-hills` — Airtime Hills & Vertical Curves *(intermediate)*
  - `track-types` — Track Types *(intermediate)*
- `energy-and-motion` — Energy & Motion *(beginner)*
  - `energy-conversion` — Energy Conversion on a Coaster *(beginner)*
  - `friction-and-drag` — Friction & Drag Losses *(intermediate)*
  - `train-mass-and-weather` — Train Mass & Weather Effects *(intermediate)*
  - `lift-systems` — Lift Systems *(beginner)*
  - `speed-profile` — Speed Profile & Simulation *(intermediate)*
  - `water-ride-hydraulics` — Water Ride Hydraulics *(intermediate)*
- `braking-and-control-hardware` — Braking & Control Hardware *(intermediate)*
  - `block-system` — Block System *(intermediate)*
  - `brake-types` — Brake Types *(intermediate)*
  - `anti-rollback` — Anti-Rollback *(beginner)*
  - `sensors-and-switches` — Sensors & Proximity Switches *(intermediate)*
  - `wheels-and-bogies` — Wheels & Bogies *(beginner)*
  - `drive-tires-and-transfer-tracks` — Drive Tires & Transfer Tracks *(intermediate)*
- `structures-and-materials` — Structures & Materials *(advanced)*
  - `supports-and-foundations` — Supports & Foundations *(intermediate)*
  - `fatigue` — Fatigue & Cyclic Loading *(advanced)*
  - `dynamic-loads` — Dynamic Loads & Vibration *(advanced)*
  - `wood-vs-steel` — Wood vs Steel Behavior *(intermediate)*
  - `corrosion-and-weathering` — Corrosion & Weathering *(intermediate)*
  - `thermal-expansion` — Thermal Expansion *(intermediate)*
- `vehicle-and-restraint-engineering` — Vehicle & Restraint Engineering *(intermediate)*
  - `restraint-mechanisms` — Restraint Mechanisms *(beginner)*
  - `restraint-locking` — Restraint Locking & Redundancy *(advanced)*
  - `seat-and-containment` — Seat Design & Containment *(intermediate)*
  - `vehicle-suspension` — Vehicle Suspension & Ride Comfort *(advanced)*
- `rider-biomechanics` — Rider Biomechanics *(advanced)*
  - `head-and-neck-loads` — Head & Neck Loads *(advanced)*
  - `rider-position` — Rider Position *(intermediate)*
  - `rough-rides` — Rough Rides & Headbanging *(beginner)*

### Safety & Standards — `safety-standards`

- `standards-and-regulation` — Standards & Regulation *(intermediate)*
  - `astm-f24` — ASTM F24 Committee *(intermediate)*
    - `astm-f2291` — ASTM F2291 Design *(advanced)*
    - `astm-f770` — ASTM F770 Operations *(intermediate)*
    - `astm-f1193` — ASTM F1193 Manufacturing & Quality *(advanced)*
    - `astm-f2974` — ASTM F2974 Auditing *(advanced)*
  - `en-13814` — EN 13814 *(intermediate)*
  - `iso-17842` — ISO 17842 *(intermediate)*
  - `regulatory-landscape` — Regulatory Landscape *(intermediate)*
  - `national-inspection-schemes` — National Inspection Schemes *(intermediate)*
- `design-safety` — Design Safety *(advanced)*
  - `risk-assessment` — Risk Assessment & FMEA *(intermediate)*
  - `ride-control-systems` — Ride Control Systems *(intermediate)*
  - `redundancy-and-fail-safe` — Redundancy & Fail-Safe *(intermediate)*
  - `safety-integrity-levels` — Safety Integrity Levels *(advanced)*
  - `reach-envelope` — Reach Envelope & Clearance *(intermediate)*
  - `emergency-stop-and-evacuation` — Emergency Stop & Evacuation Design *(intermediate)*
  - `restraint-design-rules` — Restraint Design Rules *(advanced)*
  - `patron-accommodation` — Patron Accommodation *(intermediate)*
- `operations-safety` — Operations Safety *(intermediate)*
  - `inspections` — Inspections & NDT *(intermediate)*
  - `maintenance-programs` — Maintenance Programs *(intermediate)*
  - `operator-training` — Operator Training & Certification *(beginner)*
  - `dispatch-procedures` — Dispatch Procedures *(beginner)*
  - `weather-policies` — Weather & Lightning Policies *(beginner)*
  - `incident-reporting` — Incident Reporting & Data *(intermediate)*
- `lessons-from-incidents` — Lessons from Incidents *(intermediate)*
  - `incident-overview` — Notable Incidents Overview *(beginner)*
  - `human-factors-incidents` — Human-Factors Incidents *(intermediate)*
  - `mechanical-failure-cases` — Mechanical Failure Cases *(intermediate)*
  - `design-oversight-cases` — Design Oversight Cases *(advanced)*
  - `safety-culture` — Safety Culture *(intermediate)*

### Show Technology — `show-technology`

- `animatronics` — Animatronics *(beginner)*
  - `audio-animatronics-history` — Audio-Animatronics History *(beginner)*
  - `figure-actuation` — Figure Actuation *(intermediate)*
  - `figure-programming` — Figure Programming & Animation *(intermediate)*
  - `skin-hair-and-costume` — Skin, Hair & Costume *(intermediate)*
  - `untethered-figures` — Untethered & Free-Roaming Figures *(advanced)*
  - `figure-reliability` — Figure Reliability & Duty Cycle *(advanced)*
- `projection-and-screens` — Projection & Screens *(intermediate)*
  - `projection-mapping` — Projection Mapping *(beginner)*
  - `domes-and-wraparound-screens` — Domes & Wraparound Screens *(intermediate)*
  - `stereoscopic-3d` — Stereoscopic 3D *(intermediate)*
  - `screens-vs-sets-debate` — Screens vs Physical Sets *(beginner)*
  - `projector-blending` — Projector Blending & Alignment *(advanced)*
- `illusions` — Illusions *(beginner)*
  - `peppers-ghost` — Pepper's Ghost *(beginner)*
  - `scrims-and-transparency` — Scrims & Transparency *(intermediate)*
  - `mirrors-and-infinity-rooms` — Mirrors & Infinity Rooms *(beginner)*
  - `practical-vs-digital-effects` — Practical vs Digital Effects *(beginner)*
  - `blacklight-and-uv-paint` — Blacklight & UV Paint *(beginner)*
  - `misdirection` — Misdirection & Magic Principles *(intermediate)*
- `lighting-and-audio` — Lighting & Audio *(intermediate)*
  - `theatrical-lighting` — Theatrical Lighting *(beginner)*
  - `lighting-control-protocols` — Lighting Control Protocols *(advanced)*
  - `onboard-and-spatial-audio` — Onboard & Spatial Audio *(intermediate)*
  - `audio-triggers-and-masking` — Audio Triggers & Masking *(intermediate)*
  - `sound-design-pipeline` — Sound Design Pipeline *(intermediate)*
- `special-effects` — Special Effects *(beginner)*
  - `fire-water-and-fog` — Fire, Water & Fog Effects *(beginner)*
  - `pyrotechnics` — Pyrotechnics *(intermediate)*
  - `wind-heat-and-scent-effects` — Wind, Heat & Scent Effects *(beginner)*
  - `water-screens-and-fountains` — Water Screens & Fountains *(intermediate)*
  - `nighttime-spectaculars` — Nighttime Spectaculars & Drones *(beginner)*
- `show-integration` — Show Integration *(advanced)*
  - `show-control-systems` — Show Control Systems *(intermediate)*
  - `ride-show-synchronization` — Ride-Show Synchronization *(advanced)*
  - `show-action-equipment` — Show Action Equipment *(intermediate)*
  - `media-servers-and-real-time-engines` — Media Servers & Real-Time Engines *(advanced)*

### Sensory & Environmental Design — `sensory-environment`

- `sound-design` — Soundscapes *(beginner)*
  - `area-music` — Area Music & Soundscapes *(beginner)*
  - `audio-zoning` — Audio Zoning & Bleed *(intermediate)*
  - `ambient-effects-loops` — Ambient & Effects Loops *(intermediate)*
- `scent-design` — Scent Design *(beginner)*
  - `smellitzers` — Smellitzers & Scent Delivery *(beginner)*
  - `scent-storytelling` — Scent as Story Cue *(intermediate)*
- `light-and-color` — Light & Color *(beginner)*
  - `lighting-mood` — Lighting Mood & Color Temperature *(beginner)*
  - `color-psychology` — Color Psychology *(beginner)*
  - `color-scripts` — Color Scripts *(intermediate)*
  - `night-vs-day` — Night vs Day Design *(beginner)*
  - `go-away-green` — Go-Away Green & Camouflage Palettes *(beginner)*
- `materials-and-form` — Materials & Form *(intermediate)*
  - `materials-and-texture` — Materials & Texture *(beginner)*
  - `faux-finishes-and-aging` — Faux Finishes & Aging *(intermediate)*
  - `ground-plane-storytelling` — Paving & Ground Plane Storytelling *(intermediate)*
  - `tactile-design` — Tactile & Touchable Design *(beginner)*
- `landscape-and-climate` — Landscape & Climate *(intermediate)*
  - `planting-design` — Planting Design *(beginner)*
  - `water-features` — Water Features *(beginner)*
  - `shade-and-microclimate` — Shade, Microclimate & Cooling *(intermediate)*
  - `rain-and-weather-design` — Rain & Weather Design *(intermediate)*
  - `seasonal-overlays` — Seasonal Overlays *(beginner)*
- `environmental-psychology` — Environmental Psychology *(intermediate)*
  - `prospect-refuge` — Prospect-Refuge Theory *(intermediate)*
  - `biophilia` — Biophilia *(beginner)*
  - `servicescape` — Servicescape *(intermediate)*
  - `atmospherics` — Atmospherics *(intermediate)*
  - `crowding-and-enclosure` — Crowding Perception & Enclosure *(intermediate)*
  - `visual-complexity` — Visual Complexity & Coherence *(advanced)*

### Design Process & Craft — `design-process`

- `concept-phase` — Concept Phase *(beginner)*
  - `blue-sky` — Blue Sky *(beginner)*
  - `concept-art` — Concept Art & Visual Development *(beginner)*
  - `design-intent` — Design Intent Documents *(intermediate)*
  - `mood-boards` — Mood Boards & References *(beginner)*
  - `feasibility-and-early-costing` — Feasibility & Early Costing *(intermediate)*
- `design-development` — Design Development *(intermediate)*
  - `schematic-design` — Schematic Design *(intermediate)*
  - `models-and-maquettes` — Models & Maquettes *(beginner)*
  - `previs` — Previsualization *(intermediate)*
  - `vr-design-review` — VR Design Review *(intermediate)*
  - `ride-layout-design` — Ride Layout Design *(intermediate)*
  - `engineering-handoff` — Engineering Handoff & BIM *(advanced)*
  - `mockups-and-prototypes` — Mock-ups & Prototypes *(intermediate)*
- `fabrication` — Fabrication *(intermediate)*
  - `rockwork` — Rockwork *(beginner)*
  - `scenic-painting` — Scenic Painting & Aging *(beginner)*
  - `themed-facades` — Themed Facade Construction *(intermediate)*
  - `figure-fabrication` — Figure Fabrication *(intermediate)*
  - `signage-and-graphics` — Signage & Graphics *(beginner)*
- `art-direction-and-teams` — Art Direction & Teams *(intermediate)*
  - `art-direction` — Art Direction *(beginner)*
  - `show-producer` — Show Producer & Project Lead *(intermediate)*
  - `cross-discipline-collaboration` — Cross-Discipline Collaboration *(beginner)*
  - `design-reviews-and-gates` — Design Reviews & Gates *(intermediate)*
- `installation-and-opening` — Installation & Opening *(intermediate)*
  - `site-construction` — Site Integration & Construction *(intermediate)*
  - `show-install` — Show Install & Programming *(intermediate)*
  - `testing-and-commissioning` — Testing, Adjusting & Commissioning *(intermediate)*
  - `soft-opening` — Soft Opening & Previews *(beginner)*
  - `post-opening-plussing` — Post-Opening Plussing *(beginner)*
- `pipeline-overview` — Concept-to-Opening Pipeline *(beginner)*
  - `phase-timeline` — Phase Timeline *(beginner)*
  - `scope-and-value-engineering` — Scope & Value Engineering *(intermediate)*

### Operations & Business — `operations-business`

- `throughput-and-queueing` — Throughput & Queueing *(intermediate)*
  - `throughput-math` — Throughput Math *(beginner)*
    - `dispatch-interval` — Dispatch Interval *(intermediate)*
    - `load-unload-design` — Load & Unload Design *(intermediate)*
  - `queueing-theory` — Queueing Theory *(intermediate)*
    - `littles-law` — Little's Law *(intermediate)*
  - `wait-time-estimation` — Wait Time Estimation *(intermediate)*
  - `downtime-and-availability` — Downtime & Availability *(intermediate)*
  - `capacity-vs-demand` — Capacity vs Demand Curves *(intermediate)*
- `park-operations` — Park Operations *(beginner)*
  - `ride-operations-staffing` — Ride Operations Staffing *(beginner)*
  - `service-culture` — Cast & Guest Interaction *(beginner)*
  - `crowd-management` — Crowd Management & Event Ops *(intermediate)*
  - `entertainment-scheduling` — Entertainment Scheduling *(intermediate)*
  - `guest-recovery` — Guest Services & Recovery *(beginner)*
  - `opening-and-closing-procedures` — Opening & Closing Procedures *(beginner)*
- `maintenance-and-lifecycle` — Maintenance & Lifecycle *(intermediate)*
  - `preventive-maintenance` — Preventive Maintenance *(intermediate)*
  - `ride-lifecycle` — Ride Lifecycle & Refurbishment *(beginner)*
  - `retheming-and-overlays` — Retheming & Overlays *(beginner)*
  - `retirement-and-relocation` — Retirement & Relocation *(beginner)*
  - `spare-parts-and-obsolescence` — Spare Parts & Obsolescence *(advanced)*
- `business-and-finance` — Business & Finance *(intermediate)*
  - `capital-budgets` — Budgets & Capital Projects *(intermediate)*
  - `roi-and-attendance-modeling` — ROI & Attendance Modeling *(advanced)*
  - `pricing` — Pricing & Dynamic Pricing *(intermediate)*
  - `per-capita-spending` — Per-Capita Spending *(intermediate)*
  - `seasonality-and-events` — Seasonality & Events *(beginner)*
  - `length-of-stay` — Hotels, Resorts & Length of Stay *(intermediate)*
  - `ip-licensing-economics` — IP Licensing Economics *(intermediate)*
  - `industry-structure` — Industry Structure *(beginner)*
  - `experience-economy` — The Experience Economy *(beginner)*
  - `retail-as-attraction` — Retail as Attraction *(intermediate)*
- `data-and-technology` — Data & Technology *(intermediate)*
  - `wait-time-data-and-apps` — Wait-Time Data & Apps *(beginner)*
  - `wearables-and-identity` — Wearables & Guest Identity *(intermediate)*
  - `crowd-analytics` — Crowd Analytics *(intermediate)*
  - `guest-research` — Guest Research & Surveys *(intermediate)*

### History & Landmark Attractions — `history`

- `origins` — Origins *(beginner)*
  - `pleasure-gardens-and-worlds-fairs` — Pleasure Gardens & World's Fairs *(beginner)*
  - `coney-island` — Coney Island & Amusement Parks *(beginner)*
  - `early-coasters` — Early Coasters *(beginner)*
  - `trolley-parks` — Trolley Parks *(beginner)*
  - `tivoli-and-european-roots` — Tivoli & European Roots *(beginner)*
- `disneyland-revolution` — The Disneyland Revolution *(beginner)*
  - `disneyland-1955` — Disneyland 1955 *(beginner)*
  - `walt-and-the-imagineers` — Walt Disney & the Imagineers *(beginner)*
  - `worlds-fair-1964` — 1964 New York World's Fair *(beginner)*
  - `walt-disney-world-and-epcot` — Walt Disney World & EPCOT *(beginner)*
  - `disney-global-parks` — Disney's Global Parks *(intermediate)*
- `landmark-attractions` — Landmark Attractions *(beginner)*
  - `pirates-of-the-caribbean` — Pirates of the Caribbean *(beginner)*
  - `haunted-mansion` — Haunted Mansion *(beginner)*
  - `space-mountain` — Space Mountain *(beginner)*
  - `matterhorn-bobsleds` — Matterhorn Bobsleds *(beginner)*
  - `indiana-jones-adventure` — Indiana Jones Adventure *(beginner)*
  - `tower-of-terror` — Tower of Terror *(beginner)*
  - `spider-man-and-transformers` — Spider-Man & Transformers *(beginner)*
  - `forbidden-journey` — Harry Potter and the Forbidden Journey *(beginner)*
  - `rise-of-the-resistance` — Rise of the Resistance *(beginner)*
  - `flight-of-passage` — Flight of Passage *(beginner)*
  - `expedition-everest` — Expedition Everest *(beginner)*
  - `mystic-manor` — Mystic Manor *(beginner)*
  - `symbolica` — Symbolica *(intermediate)*
  - `wizarding-world-of-harry-potter` — The Wizarding World of Harry Potter *(beginner)*
  - `galaxys-edge` — Star Wars: Galaxy's Edge *(beginner)*
- `coaster-milestones` — Coaster Milestones *(beginner)*
  - `tubular-steel-breakthrough` — Tubular Steel Breakthrough *(beginner)*
  - `loop-revival` — Corkscrew & Loop Revival *(beginner)*
  - `hyper-and-giga-era` — Hyper & Giga Era *(beginner)*
  - `strata-coasters` — Strata Coasters *(beginner)*
  - `launch-era` — Launch Era *(beginner)*
  - `rmc-hybrid-era` — RMC Hybrid Era *(beginner)*
- `key-people-and-firms` — Key People & Firms *(intermediate)*
  - `arrow-dynamics` — Arrow Dynamics *(beginner)*
  - `schwarzkopf-and-stengel` — Schwarzkopf & Stengel *(intermediate)*
  - `coaster-manufacturers` — B&M, Intamin, Mack, Vekoma & RMC *(beginner)*
  - `legendary-imagineers` — Legendary Imagineers *(beginner)*
  - `universal-creative` — Universal Creative *(beginner)*
  - `merlin-magic-making` — Merlin Magic Making *(beginner)*
- `industry-evolution` — Industry Evolution *(intermediate)*
  - `ip-wars` — Universal & the IP Wars *(beginner)*
  - `asian-expansion` — Asian Expansion *(intermediate)*
  - `european-parks` — European Park Tradition *(beginner)*
  - `defunct-parks` — Defunct Parks & Failures *(beginner)*
  - `reservation-era` — Pandemic & Reservation Era *(beginner)*

### AI & Future Tech — `ai-future`

- `ai-in-design` — AI in Design *(intermediate)*
  - `generative-concepting` — Generative Concepting *(intermediate)*
  - `procedural-layout` — Procedural Layout & Optimization *(advanced)*
  - `digital-twins` — Digital Twins *(intermediate)*
  - `simulation-and-surrogates` — Ride Simulation & ML Surrogates *(advanced)*
- `ai-in-operations` — AI in Operations *(intermediate)*
  - `crowd-modeling` — Crowd Modeling & Agent-Based Simulation *(intermediate)*
  - `wait-time-prediction` — Wait-Time Prediction *(intermediate)*
  - `predictive-maintenance` — Predictive Maintenance *(intermediate)*
  - `personalization` — Personalization & Dynamic Itineraries *(intermediate)*
  - `vision-safety-monitoring` — Computer Vision Safety Monitoring *(advanced)*
- `robotics-and-characters` — Robotics & Characters *(intermediate)*
  - `free-roaming-robots` — Free-Roaming Character Robots *(intermediate)*
  - `rl-for-figures` — Reinforcement Learning for Figures *(advanced)*
  - `stuntronics` — Stuntronics *(intermediate)*
- `immersive-media` — Immersive Media *(intermediate)*
  - `vr-ar-in-parks` — VR & AR in Parks *(beginner)*
  - `real-time-engines` — Real-Time Engines in Attractions *(intermediate)*
  - `personalized-dark-rides` — Personalized & Branching Rides *(advanced)*
  - `haptics-and-next-gen-motion` — Haptics & Next-Gen Motion *(advanced)*
  - `galactica-vr-coaster` — Galactica, the VR Coaster Experiment *(beginner)*
- `futures-and-ethics` — Futures & Ethics *(intermediate)*
  - `data-privacy` — Data Privacy & Surveillance *(intermediate)*
  - `craft-vs-automation` — Human Craft vs Automation *(beginner)*
  - `sustainability` — Sustainability & Energy *(intermediate)*
  - `location-based-entertainment` — Location-Based Entertainment *(beginner)*

### Careers & Learning Path — `careers`

- `roles` — Roles *(beginner)*
  - `creative-roles` — Creative Roles *(beginner)*
  - `engineering-roles` — Engineering Roles *(beginner)*
  - `show-tech-roles` — Show Technology Roles *(beginner)*
  - `planning-and-ops-roles` — Planning & Operations Roles *(beginner)*
  - `project-and-production-roles` — Project & Production Roles *(beginner)*
- `skills` — Skills *(beginner)*
  - `portfolio-building` — Portfolio Building *(beginner)*
  - `software-toolkit` — Software Toolkit *(beginner)*
  - `storytelling-for-designers` — Storytelling for Designers *(beginner)*
  - `systems-thinking` — Systems Thinking *(intermediate)*
- `programs-and-community` — Programs & Community *(beginner)*
  - `university-programs` — University Programs *(beginner)*
  - `competitions` — Competitions & Imaginations *(beginner)*
  - `conferences` — Conferences *(beginner)*
  - `professional-bodies` — Professional Bodies *(beginner)*
  - `entry-paths` — Internships & Entry Paths *(beginner)*
- `learning-resources` — Learning Resources *(beginner)*
  - `imagineering-in-a-box` — Imagineering in a Box *(beginner)*
  - `reading-list` — Reading List *(beginner)*
  - `podcasts-and-channels` — Podcasts & Channels *(beginner)*
  - `design-challenges` — Design Challenges & Practice *(beginner)*
