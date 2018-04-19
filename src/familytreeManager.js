import uuidv1 from "uuid/v1";

export const findPersonById = (personId, people) => people.find(person => person.id === personId);

export const findSiblingsForPerson = (person, people) => people.filter((_person, index, people) => areSiblings(_person, person));

export const makePerson = props => { return { id: uuidv1(), father: {id: null} } };

export const makeFamily = (person, people) => { return { id: uuidv1(),
  father: findPersonById(person.fatherId, people),
  mother: findPersonById(person.motherId, people), children: findSiblingsForPerson(person, people) } };

export const enrichTree = tree => {
  let newTree = {...tree};
  newTree.people.sort(isBornAfter);
  // TODO use Maybe type
  newTree.people.map(person => {
    person.father = (person.fatherId) ? findPersonById(person.fatherId, newTree.people) : makePerson();
    person.mother = (person.motherId) ? findPersonById(person.motherId, newTree.people) : makePerson();
    return person;
  });
  newTree.families = makeFamilies(newTree.people);
  // console.log("enrichTree returning stuff", JSON.stringify(newTree));
  return newTree;
};

export const makeFamilies = people => {
  // return people.map(person => person);
  const families = new Map();
  people.map(person => {
    if (person.fatherId && person.motherId) {
      const key = person.fatherId + person.motherId;
      if (families.get(key) === undefined) {
        families.set(key, makeFamily(person, people));
      } else {
        const fam = families.get(key);
        fam.children = findSiblingsForPerson(person, people);
        families.set(key, fam);
      }
    }
  });
  // console.log("makeFamilies", families);
  return families;
};

// export const getFamilyByChild = (childId, families) => families.find(family => family.childrenIds.includes(childId));

export const areSiblings = (p1, p2) => (p1.fatherId === undefined || p1.motherId === undefined) ? false : (p1.fatherId === p2.fatherId && p1.motherId === p2.motherId);

export const isParent = (p1, p2) => (p1.fatherId === undefined && p1.motherId === undefined) ? false : (p1.fatherId === p2.id || p1.motherId === p2.id);

export const isBornBefore = (p1, p2) => p1.birthdate < p2.birthdate;

export const isBornAfter = (p1, p2) => p1.birthdate > p2.birthdate;

export const sortPeopleFamilyStyle = tree => {
  const newTree = {...tree};
  newTree.people.sort(isBornAfter);
  // console.log(newTree);
  return newTree;
};
