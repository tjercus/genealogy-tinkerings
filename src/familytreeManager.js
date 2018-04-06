
export const findPersonById = (personId, people) => people.find(person => person.id === personId);

export const enrichTree = tree => {
  const newTree = {...tree};
  newTree.families.map(fam => {
    fam.father = findPersonById(fam.fatherId, tree.people);
    fam.mother = findPersonById(fam.motherId, tree.people);
    fam.children = fam.childrenIds.map(cid => findPersonById(cid, tree.people));
    return fam;
  });

  newTree.people.map(person => {
    const fam = getFamilyByChild(person.id, newTree.families);
    if (fam) {
      person.father = findPersonById(fam.fatherId, tree.people);
      person.mother = findPersonById(fam.motherId, tree.people);
      // TODO set siblings in person?
    }
    return fam;
  });
  return newTree;
};

export const getFamilyByChild = (childId, families) => families.find(family => family.childrenIds.includes(childId));

export const isParent = (p1, p2) => (p1.father === undefined) ? false : (p1.father.id === p2.id || p1.mother.id === p2.id);

export const sortPeopleFamilyStyle = tree => {
  const newTree = {...tree};
  newTree.people.sort(isParent);
  console.log(newTree);
  return newTree;
};
