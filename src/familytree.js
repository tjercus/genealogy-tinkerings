/**
 * Tree modeled on the pure biological family (no marriage and divorce) instead of the gedcom christian marriage/husband/wife concept
 * @type {{people: *[], families: *[]}}
 */
const tree = {
  people: [
    {id: "123abc", fatherId: "456dfa", motherId: "789wsh", lastname: "Valentijn", firstnames: ["Tjerk"], birthdate: "1976-05-18", deathdate: ""},
    {id: "456dfa", fatherId: "abc123", motherId: "def321", lastname: "Valentijn", firstnames: ["Leo", "Gerard"], birthdate: "1952-03-28", deathdate: ""},
    {id: "789wsh", lastname: "Valentijn", firstnames: ["Marianne", "Sophia"], birthdate: "1951-07-18", deathdate: ""},
    {id: "652hsd", fatherId: "456dfa", motherId: "789wsh", lastname: "Valentijn", firstnames: ["Mirthe"], birthdate: "1979-03-14", deathdate: ""},

    {id: "851sdh", lastname: "Volkers", firstnames: ["Tineke"], birthdate: "1983-12-29", deathdate: ""},
    {id: "4815klo", fatherId: "123abc", motherId: "851sdh", lastname: "Valentijn", firstnames: ["Nora", "Luz"], birthdate: "2008-04-02", deathdate: ""},
    {id: "321igf", fatherId: "123abc", motherId: "851sdh", lastname: "Valentijn", firstnames: ["Abigail", "Sophia"], birthdate: "2010-03-07", deathdate: ""},

    {id: "abc123", lastname: "Valentijn", firstnames: ["Cornelis"], birthdate: "1916-04-26", deathdate: "1965-06-01"},
    {id: "def321", lastname: "Visser", firstnames: ["Marijtje"], birthdate: "1918-03-05", deathdate: "1999-06-21"},
  ]
};

export default tree;