// App is a potluck sign up "form", for users to specify which items they are bringing to a potluck, to avoid duplicates. 

//MVP
//Users will be asked to sign up to bring a dish for a potluck from one of four categories: appetizers, salads, mains, desserts.
//On page load, the app will have a counter set to the total number of dishes needed for each category (5 each for example).
//A list of invited guests, and suggested dishes will be prepopulated on the page [prepopulated arrays stored in firebase].
//List of guests and list of dishes will be held in state (this is the information that is changing)
//users will select their name, and one of the suggested dishes from drop down menus, and click "submit."
//When the user submits their selection (onSubmit function?), the following will happen:
// 1) map over this data and update in the centralized component. Uniquely identify the user and dish based on unique ID. Match these two IDs to create a new object and push to an array (stored in firebase).
// 2) the users name and selected dish will be dynamically added to the page under a list of "who's bringing what"
// 3) their selected dish will be removed from the list of available dishes to choose from
// 4) the counter for that category (i.e. salads/mains/appetizers) will be lowered by one (until it reaches zero, and which point a a message will be displayed on the page that the required amount has been reached for that category)
// 5) their name will remain on the guest list, but with a visual indicator to show that they have already chosen a dish (i.e. a checkmark  beside their name, for example)
// Error handling: an error message will be posted if user tries to submit form without selecting a category, selecting their name, or selecting a dish.


//Strech goals:
// Allow users to add their own name (instead of selecting from a drop down), and suggest their own dish (instead of choosing from a pre-selected menu)
//Allow users to specify any allergies or specific nutrition information (vegan, vegetarian) which would be displayed on the page for others to see
//Allow users to browse a database of recipes (from an API call) when they are signing up, and include the recipe in their sign up form
//Allow users to share their recipe, and ingredients list, publicly