function* fruitGenerator() {
  const what = yield null;
  try {
    yield "Hello world" + what;
  } catch (e) {
    yield "Error" + e.message;
  } finally {
    return "Finally happened";
  }
}

const fruit = fruitGenerator();
fruit.next();
console.log(fruit.next("Mintesinot"));
console.log(fruit.throw(new Error('You didn"t Give your name please')));
console.log(fruit.next());
