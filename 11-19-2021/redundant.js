function redundant(word) {
  let funct = function (word) {
    return word;
  }

  return funct(word);
}

const f1 = redundant("apple");
console.log(f1);

const f2 = redundant("pear");
console.log(f2);

const f3 = redundant("");
console.log(f3);