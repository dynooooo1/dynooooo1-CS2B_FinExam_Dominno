const groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  groceryStack.push(item);
  console.log(Pushed: ${item}. Current stack: ${groceryStack});
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    const poppedItem = groceryStack.pop();
    console.log(Popped: ${poppedItem}. Current stack: ${groceryStack});
  }
}

for (let i = 0; i < 5; i++) {
  const item = prompt(Enter grocery item ${i + 1}:);
  push(item);
}

pop();

console.log(Top of the stack: ${peek()});
