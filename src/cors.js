// to avoid CORS problems while `fetch` etc

https://corsproxy.github.io/

For example, if you wanted to grab the Google homepage, your code would request
https://crossorigin.me/https://google.com

if it doesn't work: (https://www.freecodecamp.org/forum/t/weather-app-ignoring-the-use-of-https-crossorigin-me-solved/136501
)
https://cors-anywhere.herokuapp.com/
usage:
https://cors-anywhere.herokuapp.com/https://google.com


// or if you use express ==> install `cors` package
// app.use(cors());