const movies = [
  {
    id: 1,
    title: "The Matrix",
    slug: "the-matrix",
    recommended: false,
    released: "31 March 1999",
    runtime: "2h 16min",
    genre: "Action",
    plot:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    slug: "the-dark-knight",
    recommended: false,
    released: "18 July 2008",
    runtime: "2h 32min",
    genre: "Action, Crime, Drama",
    plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster:
      "https://i.pinimg.com/originals/cc/47/a5/cc47a507854dfe4ea145ebb4c9ae51c4.jpg",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    slug: "pulp-fiction",
    recommended: false,
    released: "14 October 1994 ",
    runtime: " 2h 34min",
    genre: " Crime, Drama",
    plot:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61v%2BY8BKdLL._AC_SY741_.jpg",
  },
  {
    id: 4,
    title: "Akira",
    slug: "akira",
    recommended: true,
    released: "16 July 1988",
    runtime: "2h 4min",
    genre: "Animation, Action, Sci-Fi",
    plot:
      "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51q0PEl3%2BdL._AC_.jpg",
  },

  {
    id: 5,
    title: "Star Wars: Episode IV - A New Hope ",
    slug: "star-wars-episode-4-a-new-hope",
    recommended: false,
    released: "25 May 1977",
    runtime: "2h 1min",
    genre: "Action, Adventure, Fantasy",
    plot:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    poster:
      "https://imgc.allpostersimages.com/img/print/posters/star-wars-episode-iv-new-hope-classic-movie-poster_a-G-9385455-0.jpg?w=632&h=950",
  },

  {
    id: 6,
    title: "2001: A Space Odyssey",
    slug: "2001-a-space-odyssey",
    recommended: true,
    released: " 12 May 1968",
    runtime: "2h 29min",
    genre: "Adventure, Sci-Fi",
    plot:
      "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  },
  {
    id: 7,
    title: "Kill Bill: Vol. 1 ",
    slug: "kill-bill-vol-1",
    recommended: false,
    released: "10 October 2003",
    runtime: "1h 51min",
    genre: "Action, Crime, Thriller",
    plot:
      "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    poster:
      "https://cdn.shopify.com/s/files/1/1057/4964/products/kill-bill-volume-1-vintage-movie-poster-original-french-1-panel-47x63-6380.jpg?v=1543958061",
  },

  {
    id: 8,
    title: "Paprika",
    slug: "paprika",
    recommended: true,
    released: " 22 June 2007 ",
    runtime: "1h 30min",
    genre: "Animation, Drama, Fantasy",
    plot:
      "When a machine that allows therapists to enter their patients' dreams is stolen, all Hell breaks loose. Only a young female therapist, Paprika, can stop it.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61FWkVF9aNL._AC_.jpg",
  },

  {
    id: 9,
    title: "Scarface",
    slug: "scarface",
    recommended: false,
    released: "9 December 1983",
    runtime: "2h 50min",
    genre: "Crime, Drama",
    plot:
      "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  },
  {
    id: 10,
    title: "Iron Man",
    slug: "iron-man",
    recommended: false,
    released: "2 May 2008",
    runtime: "2h 6min",
    genre: "Action,Adventure, Sci-Fi",
    plot:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/41Vxs2tSNHL._AC_.jpg",
  },

  {
    id: 11,
    title: "Enter the Dragon",
    slug: "enter-the-dragon",
    recommended: false,
    released: "19 August 1973",
    runtime: "1h 42min",
    genre: "Action, Crime, Drama",
    plot:
      "A secret agent comes to an opium lord's island fortress with other fighters for a martial-arts tournament.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51ht4NPSk0L._AC_.jpg",
  },
  {
    id: 12,
    title: "Nausicaä of the Valley of the Wind",
    slug: "nausicaä-of-the-valley-of-the-wind",
    recommended: false,
    released: " 25 November 1987",
    runtime: " 1h 57min",
    genre: " Animation, Adventure, Fantasy",
    plot:
      "Warrior and pacifist Princess Nausicaä desperately struggles to prevent two warring nations from destroying themselves and their dying planet.",
    poster:
      "https://musicart.xboxlive.com/7/cc355100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  },
  {
    id: 13,
    title: "Forrest Gump",
    slug: "forrest-gump",
    recommended: false,
    released: "6 July 1994",
    runtime: "2h 22min",
    genre: "Drama, Romance ",
    plot:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    poster: "https://m.media-amazon.com/images/I/41Al9falobL._AC_SS350_.jpg",
  },
  {
    id: 14,
    title: "Avengers: Endgame",
    slug: "avengers-endgame",
    recommended: false,
    released: "  26 April 2019",
    runtime: " 3h 1min ",
    genre: "  Action, Adventure, Drama  ",
    plot:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg",
  },
  {
    id: 15,
    title: "Dead Poets Society",
    slug: "dead-poets-society",
    recommended: false,
    released: "9 June 1989",
    runtime: "2h 8min",
    genre: "Comedy, Drama  ",
    plot:
      "Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61wfHMgTmiL._AC_SY741_.jpg",
  },
  {
    id: 16,
    title: "Toy Story",
    slug: "toy-story",
    recommended: false,
    released: "  22 November 1995 ",
    runtime: " 1h 21min",
    genre: "  Animation, Adventure, Comedy   ",
    plot:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/71aBLaC4TzL._AC_SL1330_.jpg",
  },
  {
    id: 17,
    title: "The Lion King ",
    slug: "the-lion-king ",
    recommended: false,
    released: "   24 June 1994  ",
    runtime: "  1h 28min",
    genre: "   Animation, Adventure, Drama    ",
    plot:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/61sJaBqGxZL._AC_SL1184_.jpg",
  },
  {
    id: 18,
    title: "V for Vendetta",
    slug: "v-for-vendetta",
    recommended: false,
    released: "   17 March 2006 ",
    runtime: "  2h 12min",
    genre: "  Animation, Adventure, Comedy   ",
    plot:
      "In a future British tyranny, a shadowy freedom fighter, known only by the alias of V, plots to overthrow it with the help of a young woman.",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/41YdAwKZOLL._AC_.jpg",
  },
  {
    id: 19,
    title: "The Incredibles",
    slug: "the-incredibles",
    recommended: false,
    released: "   5 November 2004 ",
    runtime: "  1h 55min ",
    genre: " Animation, Action, Adventure   ",
    plot:
      "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    poster:
      "https://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/The_Incredibles_poster_Pixar.jpg",
  },
  {
    id: 20,
    title: "My Neighbor Totoro",
    slug: "my-neighbor-totoro",
    recommended: false,
    released: "   13 July 1990 ",
    runtime: "  1h 26min ",
    genre: "  Animation, Family, Fantasy   ",
    plot:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
];

export default movies;
