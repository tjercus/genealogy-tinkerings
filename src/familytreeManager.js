import uuidv1 from "uuid/v1";

export const findPersonById = (personId, people) => people.find(person => person.id === personId);

export const makePerson = props => { return { id: uuidv1(), father: {id: null} } };

export const enrichTree = tree => {
  const newTree = {...tree};
  // TODO use Maybe type
  newTree.people.map(person => {
    person.father = (person.fatherId) ? findPersonById(person.fatherId, tree.people) : makePerson();
    person.mother = (person.motherId) ? findPersonById(person.motherId, tree.people) : makePerson();
    // TODO set siblings in person?
    return person;
  });
  return newTree;
};

// export const getFamilyByChild = (childId, families) => families.find(family => family.childrenIds.includes(childId));

export const isParent = (p1, p2) => (p1.father === undefined) ? false : (p1.father.id === p2.id || p1.mother.id === p2.id);

export const sortPeopleFamilyStyle = tree => {
  const newTree = {...tree};
  newTree.people.sort(isParent);
  console.log(newTree);
  return newTree;
};
