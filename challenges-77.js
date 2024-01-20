// #Question - anagrham

function isAnagrahm(s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === s.split("").sort().join("");
}

isAnagrahm("anagram", "nagaram");
