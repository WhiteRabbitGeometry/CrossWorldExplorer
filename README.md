# Crossword Explorer

An experimental, browser-based crossword exploration roguelite created with WhiteRabbitGeometry.

## Play

Open `index.html` in a browser. No build tools, account, API keys, or backend are required.


## Core mechanics
-Explore themed word cluster rooms in a randomly generated arrangement. New rooms are hidden until visited.
- Each room contains an intersecting crossword. Select a clue or grid axis, type answer and submit with Enter.
- Correct letters lock permanently. Each incorrect letter costs one HP after protections. You start with 100 HP.
- Completing a passage word opens neighboring exits. 
- Browser localStorage holds permanent mastery/trinkets and the current run separately.

This is a playable early prototype; the dictionary is curated and the room generator recombines themed anchor words and crossings. It does **not** yet procedurally generate an unlimited vocabulary, different map silhouettes, or full visual endgame images.

## License

Copyright © 2026 WhiteRabbitGeometry / Benjamin Jason Ortlip. All rights reserved. See LICENSE.
