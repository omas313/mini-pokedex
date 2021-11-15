const capitalize = str =>
  str
    .split("-")
    .reduce(
      (word, current) =>
        word + " " + current[0].toUpperCase() + current.slice(1),
      ""
    )
    .trim();

export default capitalize;
