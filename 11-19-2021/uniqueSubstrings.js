
function getVowelSubstrings(word) {
  let substrings = [];
  let pattern1 = /\b[aeiou]/;
  let pattern2 = /[aeiou]\b/;

  for (let i = 0; i < word.length; i++) {
    for (let k = i + 1; k <= word.length; k++) {
      if (k == word.length) {
        if (word.substring(i).length == 1 && pattern1.test(word.substring(i)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i));
          substrings.push(word.substring(i));
        }
        else if (pattern1.test(word.substring(i)) && pattern2.test(word.substring(i)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i));
          substrings.push(word.substring(i));
        }
      }
      else {
        if (pattern1.test(word.substring(i, k)) && pattern2.test(word.substring(i, k)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i, k));

          substrings.push(word.substring(i, k));
        }
      }
    }
  }

  return substrings.sort();
}

function getConsonantSubstrings(word) {
  let substrings = [];
  let pattern1 = /\b[^aeiou]/;
  let pattern2 = /[^ aeiou]\b/;

  for (let i = 0; i < word.length; i++) {
    for (let k = i + 1; k <= word.length; k++) {
      if (k == word.length) {
        if (word.substring(i).length == 1 && pattern1.test(word.substring(i)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i));
          substrings.push(word.substring(i));
        }
        else if (pattern1.test(word.substring(i)) && pattern2.test(word.substring(i)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i));
          substrings.push(word.substring(i));
        }
      }
      else {
        if (pattern1.test(word.substring(i, k)) && pattern2.test(word.substring(i, k)) && !substrings.includes(word.substring(i))) {
          console.log(word.substring(i, k));

          substrings.push(word.substring(i, k));
        }
      }
    }
  }

  return substrings.sort();
}

console.log(getVowelSubstrings('apple'));
console.log(getVowelSubstrings('hmmmm'));
console.log(getConsonantSubstrings('aviation'));
console.log(getConsonantSubstrings('motor'));