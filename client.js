const bugsWithValues = [
  { name: 'bee', value: 1 },
    { name: 'beetle', value: 2 },
      { name: 'ladybug', value: 3 },
        { name: 'spider', value: 4 },
          { name: 'ant', value: 5 }
];

console.log(bugsWithValues.pop());
// The output is the object: { name: 'ant', value: 5 }

console.log(bugsWithValues);
// Expected output: Array of objects [{ name: 'bee', value: 1 }, { name: 'beetle', value: 2 }, { name: 'ladybug', value: 3 }, { name: 'spider', value: 4 }]

bugsWithValues.pop();
// Remove the last object from the array

console.log(bugsWithValues);
// Expected output: Array of objects [{ name: 'bee', value: 1 }, { name: 'beetle', value: 2 }, { name: 'ladybug', value: 3 }]

const count = bugsWithValues.push({ name: 'moth', value: 6 });
console.log(count);
// Expected output: 4
console.log(bugsWithValues);
// Expected output: Array of objects [{ name: 'bee', value: 1 }, { name: 'beetle', value: 2 }, { name: 'ladybug', value: 3 }, { name: 'moth', value: 6 }]

bugsWithValues.push({ name: 'butterfly', value: 7 });
console.log(bugsWithValues);
// Expected output: Array of objects [{ name: 'bee', value: 1 }, { name: 'beetle', value: 2 }, { name: 'ladybug', value: 3 }, { name: 'moth', value: 6 }, { name: 'butterfly', value: 7 }]

const findBug = function(bug) {
  return bug.name === 'bee';
};

console.log(bugsWithValues.find(findBug));
// Expected output: { name: 'bee', value: 1 }

console.log(bugsWithValues.map(bug => bug.name));
// Expected output: Array of bug names ['bee', 'beetle', 'ladybug', 'moth', 'butterfly']


console.log("Key-Value Pairs:");
for (const [key, value] of bugsWithValues.entries()) {
  console.log(`${key}: ${value}`);
}
// Log key-value pairs for each object using Object.entries()

console.log("Keys:");
// Log the keys of the objects in the array
console.log(Object.keys(bugsWithValues[0])); 
// Assuming all objects have the same keys