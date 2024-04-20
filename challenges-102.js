// // #Question
// There is a group of people which also includes two monsters in this group and they split these groups among the people to kill them. When Monsters come into the group of people, then at that time people leave their group.
// After that, the breaking of the group will continue due to the monster's entry. And at last, the group with the minimum length will be killed by the monsters.
// -Two types of monsters are present there namely "@" and "$".
// People are represented as a string "P"
// Now you have to find out the minimum length of the group which will be killed by Monsters

// #Solution

function minPeoplesLeft(str) {
  return Math.min(...str.split(/[@$]/g).map((item) => item.length));
}

minPeoplesLeft("pppp@ppp@pp$pp");
