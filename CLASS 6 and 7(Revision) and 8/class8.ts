 let student1 = {
    name: "Sameed",
    age: 22,
    section: "A",
    subjects: ["OOP", "COAL", "DAA", "PF"],
    // NESTED OBJECT
    address: {
        house: "PLOT ST-16",
        sector: "35-E"
    }
 };

 console.log(student1); // ENTIRE OBJECT
 console.log(student1.age,student1.section);
 console.log(student1.address.house);   // parentObject.childObject.value
 console.log(student1.subjects[1]);