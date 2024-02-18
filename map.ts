// Component
// - Title Variants (Stacked, Regular) => for Title with style
// - Header:
// - MenuButton: button variant Menu
// - HealthBar
// - Heart
// - GuessContainer
// - Keyboard
// - Letter: button with variant (Guess, Keyboard)
// - Modal : variant Paused,Win,Lose
// - Modal Title
// - Rule
// Buttons variant:
// - Burger
// - Return
// - MenuButton

// Pages
// Home
// Rules
// Ingame
// Categories

// Hooks
// useModal: zustand modal handler type
// useStore for zustand
// State:
// - datas  (category[])
// - choosenCategory (string)
// - HealthStatus   (number)
// Principal Methods:
// - PickCategory: if a category was choosen, must pass all the previous category words to selected false then change the choosenCategory with arg(string)
// - ChooseNewWord (called with sartNewRound): must pass the finished word to selected true before chosing a new one
// - ReduceHealth (reduce current health by 1/8 if 8 is the number of max mistakes)
// **To do after mvp
// **Consider using an api to add further categories
// **In that case add a + button on categories page wich open an modal with an input
// **useNewCategory would handle the api call and use a store method to change datas
// useGame
// Contain game logic:
// logic to handle letter choice (contained letter or not)
//  Function:
// getRandomNumber
// return a random number between 0 and arg limit (category.length)
// getDatas
