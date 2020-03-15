# Project steps

* Setup: I decided to use Axios to handle the requests asynchronously, Redux to manage the state between the components easily, and StyledComponents to create my own components quickly when needed, this way the components will be modular.
* APIs: I decided to centralize all the information about the APIs requests inside the /api path, this way I abstracted how the API works, and only call them in the components.

## Done
* Build application to show characters from "a Game ofThrones".
* Pagination (max 10 on a page).
* Filtering on different columns (text filter on the table).
* Try to minimize requests sent to the api. (back button not fetching data again).
* We want to get an idea about the age of the character. The current api does not havethis data available. You could guess this on first name by using [https://agify.io] api.
* Use a CSS framework of you choice to style your components.

## To Do
* Sort ordering on different columns

## Next steps
My next steps would be:
* to implement the sort locally with the data fetched from the API;
* polish the UI/UX;
* to implement cache;
* show more data from characters in the list
