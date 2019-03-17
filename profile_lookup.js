//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    let noProp = "No such property";
    let noContact = "No such contact";
    let eachContact = null;
    let answer = null;
    
        for (let key in contacts) {
            eachContact = contacts[key];
    
                if (eachContact["firstName"] === name) {
                      if (!eachContact[prop]) {
                          return noProp;
                      }
                }
                if (eachContact["firstName"] !== name) {
                    answer = noContact;
                }
    
                if (eachContact["firstName"] === name && eachContact[prop]) {
                    answer = eachContact[prop];
                    break;
                }
        }
        return answer;
    }

// Change these values to test your function
// lookUpProfile("Kristian", "lastName"); // "Vos"
// lookUpProfile("Sherlock", "likes"); // ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry", "likes"); // an array
// lookUpProfile("Bob", "number"); // "No such contact"
// lookUpProfile("Bob", "potato"); // "No such contact"
lookUpProfile("Akira", "address"); // "No such contact"