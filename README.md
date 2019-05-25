# liri-node-app

## How it works
The user can specify on the command line on whether they are looking for information on a movie (movie-this), concert based on artist (concert-this), or Spotify information for a song (spotify-this song).

### **Spotify a song**
The user will start by typing "node spotify-this-song". Next, they can type in the name of the song that they would like to get information for. If done correctly, they will receive the following information back:

* Artist(s)
* Name of the song
* Preview URL

![Spotify Logo](/images/spotify-this.png)

If a song name is not provided, they will receive a response back with the same information above for "The Sign".

### **Movie Information**
The user will start by typing "node movie-this". Next, they can type in the name of the movie that they would like to get information for. If done correctly, they will receive the following information back:

* Title
* Release Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country Produced In
* Language
* Plot
* Actors

![Movie Logo](/images/movie-this.png)

If They do not provide a movie, they will get a recommendation to watch Mr. Nobody.

### **Concert Information**
The user will start by typing "node concert-this". Next, they can type in the name of the artist that they would like to get concert information for. If done correctly, they will receive the following information back for all results:

* Venue
* Location
* Country
* Date

![Concert Logo](/images/concert-this.png)

### **Do What It Says**
If the user types in "node liri.js do-what-it-says", the program will look in the random.txt file and do what it says. The first argument in the file should be what it would like it to do (concert-this, movie-this, spotify-this-song) and the second argument being what they would like to search for (artist, movie, song), with the 2 being separated by a comma.

Example:

random.txt file -

![Random Example](/images/random.png)

Results - 

![Random Image](/images/do-what-it-says.png)