interface Person {
  name: string;
  age: number;
  weight: number;
}

interface Animal {
  name: string;
  age: number;
  weight: number;
}

function getPersonName(p: Person): Partial<Animal> {
  return p;
}
