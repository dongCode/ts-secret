{
  function logName(something: { name: string }) {
    console.log(something.name);
  }

  logName({ name: "matt" }); // okay
  logName({ name: "matt", job: "error" }); // 报错
}

{
  function logIfHasName(something: { name?: string }) {
    if (something.name) {
      console.log(something.name);
    }
  }
  var person = { name: "matt", job: "being awesome" };
  var animal = { name: "cow", diet: "vegan, but has milk of own species" };

  logIfHasName(person);
  logIfHasName(animal);
  logIfHasName({ name: "cc" });
}

