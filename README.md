# Pig Dice

  ### By Taylor Somers & Beverly Potts

## Description

  A fully functional simulated game of Pig Dice that can be played by two players. This program uses what we have learned so far regarding object-oriented JavaScript programming in our Epicodus class, and is a good representative document of the back-end / business logic skills we have been working on cultivating.

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * HTML
  * JavaScript
  * jQuery
  * Markdown

  ### Operating Systems & Programs
  * Brave
  * Git Bash
  * Google Chrome
  * Visual Studio Code

## Installation

  1. Download a web browser, such as Apple Safari, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2. Navigate to https://github.com/taylorsomers/pig-dice.
  3. Click the green "Clone or download" button at the right of the screen.
  4. Select "Download ZIP."
  5. Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6. Open the directory containing the extracted files.
  7. Double-click the "index.html" file to run the program through your web browser.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  |---|---|---|
  | Program will generate a random number from 1 to 6, inclusive. | "number" + Enter | "4" |
  | Program will generate a new random number from 1 to 6, inclusive, each time the random number generation functionality is initiated. | "click, click" | "3, 5" |
  | Program will sum randomly generated numbers as they are generated. | "5, 2, 4" | "5, 5; 2, 7; 4, 11" |
  | Program will sum randomly generated numbers as they are generated, unless and until the number 1 is generated, at which point the sum will be changed to 0. | "2, 4, 4, 2, 1" | "2, 2; 4, 6; 4, 10; 2, 12; 1, 0" |
  | Program will update total score by adding the sum of all rolls within a player's turn when the "Hold" button is pressed. | "Roll: 4, Turn Total: 4; Roll: 3, Turn Total: 7" | "Total Score: 0; Total Score: 0; Total Score: 7" |
  | Program will change the turn total to 0 when the "Hold" button is pushed. | "Roll: 5; Hold" | "Turn Total: 5; Turn Total: 0" |
  | Program will announce the winner when/if one of the players clicks the "Hold" button such that their total score reaches 100 or more. | "Turn Total: 12, Total Score: 95, Hold" | "Alert: 'Player 1 is the winner!'" |
  | Program will track two parallel sums of randomly generated numbers, which sums are the scores of the respective players. | "Player 1: Roll 5, Turn Total 5 > Hold; Player 2: Roll 4, Turn Total 4 > Hold" | "Player 1 Total Score: 5; Player 2 Total Score: 4" |
  | Program will alternate turns between players. |  |  |
  | Program will display an error when a player attempts to "roll the die" when it is not their turn. |  |  |
  | Program will add each successive randomly generated number to a player's score when it is their turn. |  |  |
  | Program will switch turns from one player to the other when that player receives the randomly generated number 1. |  |  |
  | Program will switch turns from one player to the other when that player exercises their option to "Hold". |  |  |

## Known Bugs

  * No known bugs at this time. If any are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Taylor Somers
  * Beverly Potts

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Taylor Somers, Beverly Potts. All rights reserved.