// This is pseudocode for the app
// The app reads armies data from .json and checks their parameters against each other to find relevant modifier of the random roll.
// Then it makes the roll and finds what data about the army it should give to commanders of other armies.
// After that it outputs that data in clean format that can be copied and pasted to another app, messenger or text editor.
//
//
//
// open data.json for reading
// let i = number of armies included
// loop 1 to i
//  find opposing army size and add apporiate number to rollModifier
//  check proximity of the armies and add apporiate number to rollModifier
//  find & compare Leadership scores of both army commanders
//      if opposingArmyCommanderLeadership > thisArmyCommanderLeadership add -1 to rollModifier
//      if opposingArmyCommanderLeadership < thisArmyCommanderLeadership add +1 to rollModifier
//      else do not add anything
// check if thisArmy has magic surveillance listed and add listed number to rollModifier
// 