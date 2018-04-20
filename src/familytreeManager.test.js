
// import tree from "./familytree";
import {areSiblings, isBornBefore, isParent, findSiblingsForPerson, makeFamilies} from "./familytreeManager";

const nora = {id: "4815klo", fatherId: "123abc", motherId: "851sdh", lastname: "Valentijn", firstnames: ["Nora", "Luz"], birthdate: "2008-04-02", deathdate: ""};
const abby = {id: "321igf", fatherId: "123abc", motherId: "851sdh", lastname: "Valentijn", firstnames: ["Abigail", "Sophia"], birthdate: "2010-03-07", deathdate: ""};
const walter = {id: "dsgf865", fatherId: "sdm8564", motherId: "dfjg8954", lastname: "Roos", firstnames: ["Walter"], birthdate: "1958-04-02", deathdate: "1985-01-01"};
const leo = {id: "456dfa", fatherId: "abc123", motherId: "def321", lastname: "Valentijn", firstnames: ["Leo", "Gerard"], birthdate: "1952-03-28", deathdate: ""};
const tjerk = {id: "123abc", fatherId: "456dfa", motherId: "789wsh", lastname: "Valentijn", firstnames: ["Tjerk"], birthdate: "1976-05-18", deathdate: ""};
const tineke = {id: "851sdh", lastname: "Volkers", firstnames: ["Tineke"], birthdate: "1983-12-29", deathdate: ""};
const marianne = {id: "789wsh", lastname: "Valentijn", firstnames: ["Marianne", "Sophia"], birthdate: "1951-07-18", deathdate: ""};

describe("makeFamilies", () => {
  it("return all families for a list of people", () => {
    const fams = makeFamilies([walter, nora, abby, tjerk, tineke]);
    //expect(fams).toEqual({});
    expect(fams.length).toEqual(3);
    const entries = fams.entries();
    const waltersFam = entries.next().value[1];
    expect(waltersFam.children.length).toEqual(1);
    expect(waltersFam.children[0].id).toEqual("dsgf865");
    expect(waltersFam.id).toMatch(/-/);
    expect(waltersFam.father).toBeUndefined(); // not in test dataset
    expect(waltersFam.mother).toBeUndefined(); // not in test dataset
    const tjerksFam = entries.next().value[1];
    expect(tjerksFam.children.length).toEqual(2);
    expect(tjerksFam.children[0].id).toEqual("4815klo");
    expect(tjerksFam.children[1].id).toEqual("321igf");
    expect(tjerksFam.id).toMatch(/-/);
    expect(tjerksFam.father.id).toEqual("123abc");
    expect(tjerksFam.mother.id).toEqual("851sdh");
    const tjerksFamc = entries.next().value[1];
    expect(tjerksFamc.children.length).toEqual(1);
    expect(tjerksFamc.children[0].id).toEqual("123abc");
    expect(tjerksFamc.id).toMatch(/-/);
    expect(tjerksFamc.father).toBeUndefined(); // not in test dataset
    expect(tjerksFamc.mother).toBeUndefined(); // not in test dataset
  });
});

describe("findSiblingsForPerson", () => {
  it("return all siblings for a person", () => {
    expect(findSiblingsForPerson(nora, [walter, nora, abby])).toEqual([nora, abby]);
  });
  // it("return all siblings for a person when person is not included in the people", () => {
  //   expect(findSiblingsForPerson(nora, [abby])).toEqual([nora, abby]);
  // });
});

describe("areSiblings", () => {
  it("p1 is a sibling of p2 when motherId and fatherId are shared exactly", () => {
    expect(areSiblings(nora, abby)).toBe(true);
  });
  it("p1 is NOT a sibling of p2 when motherId is same but fatherId is different", () => {
    const p1 = {id: "4815klo", fatherId: "iets", motherId: "851sdh", lastname: "Valentijn", firstnames: ["p1"], birthdate: "2008-04-02", deathdate: ""};
    const p2 = {id: "321igf", fatherId: "anders", motherId: "851sdh", lastname: "Valentijn", firstnames: ["p2"], birthdate: "2010-03-07", deathdate: ""};
    expect(areSiblings(p1, p2)).toBe(false);
  });
});

describe("isBornBefore", () => {
  it("p1 is before p2", () => {
    expect(isBornBefore(nora, abby)).toBe(true);
   });
});

describe("isParent", () => {
  it("father is parent of son", () => {
    expect(isParent(leo, tjerk)).toBe(true);
  });
  it("son is NOT a parent of father", () => {
    expect(isParent(tjerk, leo)).toBe(false);
  });
  it("p2 has no parents", () => {
    const p1 = {id: "dfgdfgf", lastname: "orphan2", firstnames: ["a"], birthdate: "1952-03-28", deathdate: ""};
    const p2 = {id: "345gdff", lastname: "orphan2", firstnames: ["b"], birthdate: "1976-05-18", deathdate: ""};
    expect(isParent(p2, p1)).toBe(false);
    expect(isParent(p1, p2)).toBe(false);
  });
  it("p1 is parent of p1, via mother", () => {
    expect(isParent(marianne, tjerk)).toBe(true);
  });
});

//
// describe("getFamilyByChild", () => {
//   it("gets it", () => {
//     expect(getFamilyByChild("123abc", tree.families).id).toEqual("kgfh98995");
//   });
// });

