import { generateTextAndImage } from "./utils.js"

// 1. Change the value of the variable to your name
let name = "Mohamed Aziz Yahia"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "Swimming"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "The beach"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.8 

// Optional: use "avatar.jpg" as the name of your photo and add it to the files

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)
