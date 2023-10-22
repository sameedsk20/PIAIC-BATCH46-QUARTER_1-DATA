// //function overload --> ts

// function add(arg1 :string,  arg2 :string) : string;     //option1
// function add(arg1 :number,  arg2 :number) : number;     //option2
// function add(arg1 :boolean,  arg2 :boolean) : boolean;    //option3
// function add(arg1 :string,  arg2 :number) : boolean;     //option4
// function add(arg1 :number,  arg2 :string) : number;     //option5


// function add (arg1: any, arg2 : any) : any{
//     return arg1 + arg2;
// }

// let result1 = add("hello","str");
// console.log(result1);

// let result2 = add(3,2);
// console.log(result2);

// let result3 = add(false,true);
// console.log(result3);

// let result4 = add("result ",2);
// console.log(result4);

// let result5 = add(8,"is the result");
// console.log(result5);

// //call class --> let objectName = new classname(parameter)
// //print --> console.log(objectName)
// //inheritance -->  1- ChildClass extends ParentClass {}, 
// //inheritance --> 2- super(parentClassParameter) [in constructor]
// class Person4{
//     name : string;

//     constructor (name :string){
//         this.name = name;
//     }
//   }
  
//   class Student4 extends Person4{
//     grade : number ;
//     name : string;
//     age : number;

//     //assign value of grade, \name from parameter
//     constructor( grade : number, name : string,  age : number){
//         //super () //not empty
//         super(name);
//         this.grade = grade; //comming from constractor parameter
//         this.name = name;
//         this.age = age;
//     }
//   }

//   class Teacher4 extends Person4 {
//     name : string;
//     salary : number ;
    
//     //assign value of grade, name from parameter
//     constructor( name : string, salary : number){
//         super(name);
//         this.name = name;
//         this.salary = salary; //comming from constractor parameter 
//     }
//   }

// //super () : call parent class method (call parent constor)
// let stdObj = new Student4(5, "Hamzah",23)
// console.log(stdObj);

// let teaObj = new Teacher4("Imran", 80000)
// console.log(teaObj);

      // CLASS 12
// OOP CONCEPTS
    // INHERITANCE
//  INHERITANCE is parent-child relation of classes
//  INHERITANCE ka concept aaya due to some cases jaise k jab humne multiple classes banani ho aur un main kuch 
//features common ho tou un properties ko utha kr hum parent class bana dety hain

// class Person {
//   name! : string; // ! means k value ko undefined rakhna hai
//   age! : number;
//   address! : string;

//   constructor(name: string, age: number, address ?: string){ // ? laga kr hum kisi parameter ko optional parameter banaty hain
//     this.name  = name;
//     this.age = age;
//     this.address  = address ? address: "Karachi, Pakistan";   // oprtional bana kr base value deni parti hai
//   }
// }

// // let person1 = new Person("SAMEED" , 22 , "Karachi,Pakistan");
// // console.log(person1.address);

// class Student extends Person {
//   rollNo : string;
//   constructor(rollNo: string,name: string, age: number, address : string){
//     super(name,age,address);  // SUPER k through hum parent k constructor ko call krte hain
//     this.rollNo = rollNo;
//   }
// }

// class Toppers extends Student {
//   grade: string;
//   constructor(grade:string,rollNo: string,name: string, age: number, address : string){
//     super(rollNo,name,age,address);  // SUPER k through hum parent k constructor ko call krte hain
//     this.grade = grade;
//   }
// }

// let student1 = new Student("M-20/F-BSCS-26","SAMEED",22,"Karachi");
// console.log(student1);

// let teacher1 = new Toppers("A+", "20F-BSCS-29" , "IQRA KHAN" , 22 , "Garden");
// console.log(teacher1);

    // ENCAPSULATION
// ACCESS MODIFIERS
// Hamari class ki properties ki access ko modify krte hain
// GETTER and SETTER have same names and they both are acted as property not function
// GETTER SETTER k use krne ka faida ye hai k humary syste ki kmm computational power lagti hai as compared to method
// class C {
//   // _length: number;  // _ k saath likhi property ko PRIVATE consider kia jata tha in old time JS
  
//   private length : number = 10;  // PRIVATE keyword to  make property private is the current feature of TS

//   get len(){    // GETTER method to get the private property of the class. GETTER as a property behave krta hai jabhi hum isko call nh krte
//     if(this.length > 10){
//       return this.length;
//     } else{
//       return 0;
//     }
//   }

//   set len(value){
//     if(value > 10){
//       this.length = value;
//     }else{
//     this.length = 10;
//     }
//   }
// }
// let c1 = new C();
// c1.len = 9; // USING SETTER TO ASSIGN VALUE
// console.log(c1.len); // CALLING GETTER

//Structure of interface —> created by class

// interface IPerson{
//   name : string;
// }
// class Person implements IPerson {
//   name!: string;
//   age! : number
// }

// let person1 : IPerson  = new Person()   // implement the type
// person1 = {name: "Sameed"}
// // person1 = {name: "Sameed" , age: 22} // error aayeega as age is not key in IPerson Class
// console.log(person1.name)  //output : Sameed,  RESON property!


//STATIC PROPERTY

//never change the state : property with class

// class Student {
//   name : string
//   rollNo : string
//   static serialNo : number = 0
//   // static serialNo : number = 0

//   constructor(name: string , rollNo: string){
//       this.name = name
//       this.rollNo = rollNo
//       // this.serialNo  // We can't assign it like this in the instance
//       // this.serialNo += 1 //property object base
//       if (Student.serialNo < 5){
//           Student.serialNo += 1
//       }
//   }
// }

// // console.log(Student.serialNo); // We call the static properties like this way
// let studentObj1 = new Student('ali', '20F')
// console.log(`${Student.serialNo}. ${studentObj1.name}`)

// let studentObj2 = new Student('ahmed', '21F')
// console.log(`${Student.serialNo}. ${studentObj2.name}`)

// let studentObj2 = new Student('ali', `${Student.serialNo}`)
// console.log(studentObj2)

// let studentObj3 = new Student('ali' , `${Student.serialNo}`) // This is how we can use the Static property of any class
// console.log(studentObj3)

// let studentObj4 = new Student('ali', `${Student.serialNo}`)
// console.log(studentObj4)

// let studentObj5 = new Student('ali', `${Student.serialNo}`)
// console.log(studentObj5)

// let studentObj6 = new Student('ali', `${Student.serialNo}`)
// console.log(studentObj6)

// let studentObj7 = new Student('ali', `${Student.serialNo}`)
// console.log(studentObj7)

// let studentObj4 = new Student('ali', "123")
// console.log(studentObj4.serialNo)

// let studentObj5 = new Student('ali', "123")
// console.log(studentObj5.serialNo)


// // PROTECTED : Aise property ki value update nh kii ja skti

// class Person{
//   lname! : string
//   protected fname : string = "Sameed"

//   constructor(lname:string){
//     this.lname=lname;
//   }
// }

// class Teacher extends Person {
//   constructor(lname:string){
//     super(lname);
//   }
//    displayName(){
//        return (`${this.fname} ${this.lname}`);
//    }
// }

// let teacherObj2 = new Teacher("Saeed");
// teacherObj2.lname = "Khan"; // lname ko update kr skty hain as it is not protected
// // teacherObj2.fname = "Ibrahim" ; // Error as Protected property ko bahir change nh kia jaa sktaa
// console.log(teacherObj2.displayName());



// //method overriding : POLYMORPHISM

// class Person{
//   name : string
//   age  : number
//   address : string

//   constructor( name: string, age: number, address: string){
//       this.name = name
//       this.age = age
//       this.address = address
//   }
//   //method eat()
//   eat(raita : boolean){
//       console.log("Biryani + With Raita ", raita)
//   }

//   //method play()
//   play(sports: string){
//     console.log(` ${sports}`);
//   }
// }

// class Teacher extends Person{
//   salary !: number
//   constructor ( name: string, age: number, address : string, salary: number){
//     super(name, age, address);  
//     this.salary = salary ;
//   }
//   play(sports: string): void {
//     console.log("Does not love sports.");
//     super.play(`Not plays ${sports}`);
//   }
// }

// class Student extends Person{

//       constructor (name: string, age: number, address : string){
//           super(name, age, address)
//       }
//       eat(){
//           console.log('Burger')
//           super.eat(false) // Parent class ka function Child main aise call hotaa
//       }
//       play(sports: string): void {
//         console.log("Loves to play sports");
//         super.play(`Plays ${sports}`);
//       }
// }

// console.log(`\nteacherObj1`)
// let teacherObj1 = new Teacher('Sameed', 20, 'Pakistan' , 50000 );
// teacherObj1.eat(true)
// teacherObj1.play("Cricket");

// console.log(`\nstudentObj1`)
// let studentObj1 = new Student('Zaviyar', 30, 'Karachi')
// studentObj1.eat() 
// studentObj1.play("Football");






