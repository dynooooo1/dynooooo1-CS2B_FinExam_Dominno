const subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; // names
const subArray2 = [24, 65, 21, 5, 9]; // ages

const restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

console.log("Restructured array:");
for (const pair of restructuredArray) {
  console.log(pair);
}
