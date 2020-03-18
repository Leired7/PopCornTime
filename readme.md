# session-0319-checkpoint-2-react
> Popcorn Time

```
# clone
git clone https://github.com/WildCodeSchool/session-0319-checkpoint2-react

# change directory
session-0319-checkpoint2-react

# make your own branch
git checkout -b city_lastName_firstName
```

Try to commit for each exercices with an explicit message. Don't forget to push.

### React

#### Setup
- Create a new React app

#### Movies list
- Fetch movies at [`/movies.json`](https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json)
- Display the list of movies
  - Create a component `Movie`

#### Favorites list
- Add a button 'Add' on each `Movie`
  - on click, movie should be added to the favorite list
- Display all the favorites on top of the movie list
- Add a button 'Remove' on each favorite
  - on click, it should be removed from the favorite list

#### Picker
- Make a `Pick` button in the favorite list
  - on click, a random movie from the favorite shoud be displayed in a different page (you will use React Router for this)


#### Optional 
- Add a dropdown to filter movies by `genres`. Don't hardcode the `genres`, instead iterate over `genres` from your JSON file.

> Feel free to make it look sexy with amazing css skills
> Or any other css fanatic
