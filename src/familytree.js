/**
 * Tree modeled on Gedcom standard, instead of the pure biological family (no marriage and divorce)
 * @type {{people: *[], families: *[]}}
 */
const tree = {
  people: [
    {id: "123abc", lastname: "Valentijn", firstnames: ["Tjerk"], birthdate: "1976-05-18", deathdate: ""},
    {id: "456dfa", lastname: "Valentijn", firstnames: ["Leo", "Gerard"], birthdate: "1952-03-28", deathdate: ""},
    {id: "789wsh", lastname: "Valentijn", firstnames: ["Marianne", "Sophia"], birthdate: "1951-07-18", deathdate: ""},
    {id: "652hsd", lastname: "Valentijn", firstnames: ["Mirthe"], birthdate: "1979-03-14", deathdate: ""},

    {id: "851sdh", lastname: "Volkers", firstnames: ["Tineke"], birthdate: "1983-12-29", deathdate: ""},
    {id: "4815klo", lastname: "Valentijn", firstnames: ["Nora", "Luz"], birthdate: "2008-04-02", deathdate: ""},
    {id: "321igf", lastname: "Valentijn", firstnames: ["Abigail", "Sophia"], birthdate: "2010-03-07", deathdate: ""},

    {id: "abc123", lastname: "Valentijn", firstnames: ["Cornelis"], birthdate: "1916-04-26", deathdate: "1965-06-01"},
    {id: "def321", lastname: "Visser", firstnames: ["Marijtje"], birthdate: "1918-03-05", deathdate: "1999-06-21"},
  ],
  families: [
    {id: "g98475kgf", fatherId: "123abc", motherId: "851sdh", childrenIds: ["4815klo", "321igf"]},
    {id: "kgfh98995", fatherId: "456dfa", motherId: "789wsh", childrenIds: ["123abc", "652hsd"]},
    {id: "f54906865", fatherId: "abc123", motherId: "def321", childrenIds: ["456dfa"]},
  ]
};

export default tree;