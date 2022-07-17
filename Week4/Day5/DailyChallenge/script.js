function compare(a, b) {
  y = a.split("").sort();
  z = b.split("").sort();
  for (i = 0; i < y.length; i++) {
    if (y.length === z.length) {
      if (y[i] === z[i]) {
        console.log(`${a} is an anagram of ${b}`);
        break;
      } else {
        console.log(`${a} is not anagram of ${b}`);
        break;
      }
    } else {
      console.log(`${a} has a different amount of letters than ${b}`);
    }
    break;
  }
}
compare("Astronomer", "Moon stare");
compare("school master", "The classroom");
compare("The Morse Code", "Here come dots");
