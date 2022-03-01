

const hitungKelipatan = (awal, akhir) => {
    let hitung = [];
    for(let a = awal; a <= akhir; a=a+awal){
        hitung.push(a);
    }
    return hitung;
}

console.log(hitungKelipatan(2,20));

//CRUD ARRAY
// Create
    //unshift = tambah awal
    //push = tambah akhir

// Read
    // index[]

//Update
    //index[] = "";

// Delete
    //shift() = hapus awal
    //pop() = hapus akhir





const bioData = {
    firstName : "Iqbal",
    secondName : null,
    lastName : "Nova",
    age : 20,
    isMarried : false,
    hobbies : ["Main Game", "Makan", "Tidur"],
    myFullName : function (){
        return this.firstName + this.lastName;
    }
}

console.log(bioData.hobbies[2]);
console.log(bioData["hobbies"][1]);

// CRUD OBJECT
// READ
    // dot notation
    // console.log(bioData.myFullName);

    // square notation
    // console.log(bioData["hobbies"][1]);

// Create
// bioData.address = "Klaten";
// bioData.kriteria = {height = "175", weight = "65 lbs"};
// bioData.kriteria.bloodType = "AB"
console.log(bioData);

// Update
bioData.firstName = "iqbaal";
console.log(bioData);

// Delete
delete bioData.lastName;
console.log(bioData);

//Destruction pada array dan object
//ARRAY
const students = ["haha","hihi","huhu"];
let [name1,name2,name3] = students;

console.log()

//OBJECT
let {firstName, hobbies} = bioData
console.log(firstName);
console.log(hobbies[1]);


//Spread operator
//ARRAY
const listStudent = ["iqbal", ...students, "Rico"];
console.log(listStudent);

//Object
const dataAku = {...bioData, kelas : "RN 1"}
console.log(dataAku);