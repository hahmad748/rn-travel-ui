import Tours from "./Tours";

export default [
  {
    id: 1,
    title: "Sights",
    tours: shuffle([...Tours, ...Tours,...Tours]),
  },
  {
    id: 2,
    title: "Tours",
    tours: shuffle([...Tours, ...Tours, ...Tours]),
  },
  {
    id: 3,
    title: "Adventures",
    tours: shuffle([...Tours, ...Tours, ...Tours, ...Tours].reverse()),
  },
  {
    id: 4,
    title: "Honeymoon",
    tours: shuffle([...Tours, ...Tours]),
  }
];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
