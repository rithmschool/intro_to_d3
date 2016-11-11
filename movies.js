var movies = [{
  title: "Finding Dory",
  release: new Date("June 17 2016"),
  rating: "PG",
  runtime: 103,
  total: 485501100/1e6,
  openingTotal: 135060273/1e6,
  maxTheaters: 4305,
  daysOpen: 130,
  freshness: 0.94
}, {
  title: "Captain America: Civil War",
  release: new Date("May 6 2016"),
  rating: "PG-13",
  runtime: 147,
  total: 408084349/1e6,
  openingTotal: 179139142/1e6,
  maxTheaters: 4226,
  daysOpen: 140,
  freshness: 0.90
}, {
  title: "The Secret Life of Pets",
  release: new Date("July 8 2016"),
  rating: "PG",
  runtime: 90,
  total: 366201540/1e6,
  openingTotal: 104352905/1e6,
  maxTheaters: 4381,
  daysOpen: 109,
  freshness: 0.75
}, {
  title: "Suicide Squad",
  release: new Date("August 5 2016"),
  rating: "PG-13",
  runtime: 130,
  total: 324302274/1e6,
  openingTotal: 133682248/1e6,
  maxTheaters: 4255,
  daysOpen: 81,
  freshness: 0.26
}, {
  title: "Jason Bourne",
  release: new Date("July 29 2016"),
  rating: "PG-13",
  runtime: 123,
  total: 162169190/1e6,
  openingTotal: 59215365/1e6,
  maxTheaters: 4039,
  daysOpen: 88,
  freshness: 0.56
}, {
  title: "Star Trek Beyond",
  release: new Date("July 22 2016"),
  rating: "PG-13",
  runtime: 120,
  total: 158848340/1e6,
  openingTotal: 59253211/1e6,
  maxTheaters: 3928,
  daysOpen: 91,
  freshness: 0.84
}, {
  title: "X-Men: Apocalypse",
  release: new Date("May 27 2016"),
  rating: "PG-13",
  runtime: 143,
  total: 155442489/1e6,
  openingTotal: 65769562/1e6,
  maxTheaters: 4153,
  daysOpen: 63,
  freshness: 0.48
}, {
  title: "Ghostbusters",
  release: new Date("July 15 2016"),
  rating: "PG-13",
  runtime: 108,
  total: 128254492/1e6,
  openingTotal: 46018755/1e6,
  maxTheaters: 3963,
  daysOpen: 101,
  freshness: 0.72
}, {
  title: "Central Intelligence",
  release: new Date("June 17 2016"),
  rating: "PG-13",
  runtime: 107,
  total: 127440871/1e6,
  openingTotal: 35535250/1e6,
  maxTheaters: 3508,
  daysOpen: 77,
  freshness: 0.69
}, {
  title: "The Legend of Tarzan",
  release: new Date("July 1 2016"),
  rating: "PG-13",
  runtime: 109,
  total: 126643061/1e6,
  openingTotal: 38527856/1e6,
  maxTheaters: 3591,
  daysOpen: 77,
  freshness: 0.36
}, {
  title: "Bad Moms",
  release: new Date("July 29 2016"),
  rating: "R",
  runtime: 101,
  total: 113226532/1e6,
  openingTotal: 23817340/1e6,
  maxTheaters: 3215,
  daysOpen: 88,
  freshness: 0.60
}, {
  title: "The Angry Birds Movie",
  release: new Date("May 20 2016"),
  rating: "PG",
  runtime: 97,
  total: 107509366/1e6,
  openingTotal: 38155177/1e6,
  maxTheaters: 3932,
  daysOpen: 119,
  freshness: 0.43
}, {
  title: "Independence Day: Resurgence",
  release: new Date("June 24 2016"),
  rating: "PG-13",
  runtime: 120,
  total: 103144286/1e6,
  openingTotal: 41039944/1e6,
  maxTheaters: 4130,
  daysOpen: 84,
  freshness: 0.31
}, {
  title: "The Conjuring 2",
  release: new Date("June 10 2016"),
  rating: "R",
  runtime: 134,
  total: 102470008/1e6,
  openingTotal: 40406314/1e6,
  maxTheaters: 3356,
  daysOpen: 77,
  freshness: 0.80
}, {
  title: "Sausage Party",
  release: new Date("August 12 2016"),
  rating: "R",
  runtime: 89,
  total: 97636799/1e6,
  openingTotal: 34263534/1e6,
  maxTheaters: 3135,
  daysOpen: 73,
  freshness: 0.83
}, {
  title: "Don't Breathe",
  release: new Date("August 26 2016"),
  rating: "R",
  runtime: 88,
  total: 88577905/1e6,
  openingTotal: 26411706/1e6,
  maxTheaters: 3384,
  daysOpen: 59,
  freshness: 0.87
}, {
  title: "Teenage Mutant Ninja Turtles: Out of the Shadows",
  release: new Date("June 3 2016"),
  rating: "PG-13",
  runtime: 112,
  total: 82051601/1e6,
  openingTotal: 35316382/1e6,
  maxTheaters: 4071,
  daysOpen: 98,
  freshness: 0.38
}, {
  title: "The Purge: Election Year",
  release: new Date("July 1 2016"),
  rating: "R",
  runtime: 105,
  total: 79042440/1e6,
  openingTotal: 31515110/1e6,
  maxTheaters: 2821,
  daysOpen: 49,
  freshness: 0.55
}, {
  title: "Alice Through the Looking Glass",
  release: new Date("May 27 2016"),
  rating: "PG",
  runtime: 112,
  total: 77041381/1e6,
  openingTotal: 26858726/1e6,
  maxTheaters: 3763,
  daysOpen: 98,
  freshness: 0.30
}, {
  title: "Pete's Dragon",
  release: new Date("August 12 2016"),
  rating: "PG",
  runtime: 102,
  total: 75335573/1e6,
  openingTotal: 21514095/1e6,
  maxTheaters: 3702,
  daysOpen: 74,
  freshness: 0.86
}].sort(function(m1,m2) {
  return m2.total / m2.openingTotal - m1.total / m1.openingTotal;
});