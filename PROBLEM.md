__This exercise is to examine your technical knowledge, reasoning and engineering principals. There are no tricks or hidden agendas. We are looking for a demonstration of your experience and skill using current software development technologies and methodologies.__

In this assignment you have to build a Movie App titled __10 Movies to Watch Before I Die__ using the MERN Stack.

[Sample Snapshot](http://i.imgur.com/2jZGUZb.png)

> Week 5 Tasks

- As a user, I want to be able to search for movies information, so that I can create a list of movies. E.g., (1001 movies to see before you die http://www.imdb.com/list/ls052535080/)
- The dashboard of the app should have a title along with logo and nav bar.
- The page contains a large search box , A search button and A Favorites button in center top.
- The User can write the name of the movie in the search box and hit the search button.
- Search button will search related movie names form OMDB api.
- Display the name, poster and date of release of all related movies with “Add“ button,  underneath the search box.
- As soon as User clicks on add button the movie needs to be added into a Favorite List.
- When User click on Favorites button User will be able to see all the movies added into Favorite List.
- Build a Search API for displaying movie details from the TMDB Database
- Write test cases for the Express routes before you start your code

> Week 6 Tasks

- Create a collection of Favorites and store all the Favorite data into that collection.
- Create a Delete button with every of the Favorite list
- This Delete button allows us to delete the element from favorite collection.
- Write test cases depending upon the features that are being asked

> Week 7 Tasks

- The Signup page check the available user from database using passport.
- Create RESTful web services for Favorite, Delete and Add feature in movie app.
- Write test cases with each of the functionality you implement.

> Week 8 Tasks

- Follow MCV model and apply horizontal slicing to the application.
- Use React-DOM in order to generate the GUI of the application.
- The GUI of the application should contain menu icon at the right top corner of the page.
- When user click that menu icon a side nav bar should slide in from right side of the page.
- Nav bar should contain 3 links.
  1. Search.
  2. Display Favorites.
  3. Add new playlist.
- On click of search button search box and search button should displayed in middle of the page.
- Search button should have search icon as a label.
- The search box should have an autosuggest of the movie names feature.
- After completing the movie name if user clicks on the search button the cards of all related movies should fill the center area of the page.
- The result should be paged.
- The movie card should contain movie poster only.
- When user hover over the card, user should be able to see 2 icons on either side of the bottom of the card.
   - Favorites.
   - Details.
 - User should be able to see the name of the movie on the top of the card once user hover over the card."

> Week 9 Tasks

- The Movie cards on the main page should follow the pagination format.
- When we click on details icon, the detail of the movie should be displayed on the same page which contain the movie name, posters, year of release, awards, - Actors, Directors, plot and others.
-  There should me back icon and favorites icon on the detail page.
- When user click on back icon the previous page should be loaded into the context.
- As soon as the user will click on favorite’s button the names of the existing play list should be displayed in the form of popup menu.
- When user will choose his movie, details of the movie should be added into DB."

> Week 10 Tasks

- The Card should be used in the format of directive.
- The add play list link in main menu will help us to create new play list into the database.
- The display link will show different play list exist into the database.
- As user select one the page should display the requested play list.
- The code should be properly commented.
- Use UI routes to route your application.
- The application should contain all the test cases possible.

You would need the following base boilerplate code to start working :
[https://gitlab-wd.stackroute.in/HobbesCadets/movieapp-boilerplate.git](https://gitlab-wd.stackroute.in/HobbesCadets/movieapp-boilerplate.git)

__ You need to use https://www.themoviedb.org/documentation/api for getting Movie Details __
