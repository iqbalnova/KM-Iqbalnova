//nomor 1
console.log("Nomor 1 ");
function changeWord (selectedText, changedText, text){
    const kalimat = text;
    const ubah = kalimat.replace(selectedText, changedText);
    return ubah;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1));
console.log(changeWord('bromo','semeru',kalimat2));


console.log(" ");
console.log("Nomor 2 ");
//nomor 2
const checkTypeNumber = (givenNumber) => {
    let hasil;
    if (typeof givenNumber === "object"){
        hasil = "Error: Invalid data type";
    }
    else if (typeof givenNumber === 'undefined'){
        hasil = "Error: Bro where is the parameter?"
    }
    else if (typeof givenNumber === 'string'){
        hasil = "Error: Invalid data type"
    }
    else if (givenNumber%2===0){
        hasil = "Genap";
    }
    else if (givenNumber%2!==0){
        hasil = "Ganjil";
    }
    
    return hasil;
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber());



console.log(" ");
console.log("Nomor 3 ");
// nomor 3
const checkEmail = (email) =>{
    let result = "VALID";
   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email===undefined){
       result = "Error karena tidak ada parameter"
   }
   else if(!email.match(regexEmail)){
       result = "INVALID";
   }
   return result;
}
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
//console.log(checkTypeNumber(checkEmail(3322))); //Uncaught TypeError: email.match is not a function
console.log(checkEmail()); //Uncaught TypeError: Cannot read properties of undefined (reading 'match')



console.log(" ");
console.log("Nomor 4 ");
// nomor 4
const isValidPassword = (email) => {
    // const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    // if(!email.match(regexPassword)){
    //     result = false;
    // }
    // return result;
    /*
        /^
            (?=.*\d)          // should contain at least one digit
            (?=.*[a-z])       // should contain at least one lower case
            (?=.*[A-Z])       // should contain at least one upper case
            [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
        $/
    */
    
    let result = true + " Karena memenuhi requierement, "+email+" terdiri dari "+email.length+" huruf, ada huruf besar, ada huruf kecil, dan ada angka";
    if((!email.match(/\d/))&&(!email.match(/[A-Z]/))){
        result = false + " Karena "+email+" tidak ada angka dan hanya terdiri dari "+email.length+" huruf";
    }
    else if(email.length < 8){
        result = false + " Karena "+email+" hanya terdiri dari "+email.length+ " huruf";
    }
    else if (!email.match(/[a-z]/)){
        result = false;
    }
    else if (!email.match(/[A-Z]/)){
        result = false + " Karena "+email+" tidak ada huruf besar";
    }
    else if(!email.match(/\d/)){
        result = false + " Karena "+email+" tidak ada angka";
    }
    
    return result;
}

console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
// console.log(isValidPassword(0)); error karena tidak bisa menerima parameter angka
// console.log(isValidPassword()); //error karena tidak ada parameter yang diberikan



console.log(" ");
console.log("Nomor 5 ");
// nomor 5
const getSplitName = (personName) =>{
    if(personName!==undefined && typeof personName === 'string'){
        const hasilSplit = personName.split(" ");
        if(hasilSplit.length<=1){
            return {firstName: hasilSplit[0] , middleName: null , lastName: null};
        }
        else if(hasilSplit.length<=2){
            return {firstName: hasilSplit[0] , middleName: null , lastName: hasilSplit[1]};
        }
        else if(hasilSplit.length<=3){
            return {firstName: hasilSplit[0] , middleName: hasilSplit[1] , lastName: hasilSplit[2]};
        }
        else if(hasilSplit.length>3){
            return "Error: This Function is only for 3 character name";
        }
    }else{
        return "Error: Parameter tidak sesuai"
    } 
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName()); //Cannot read properties of undefined (reading 'split')
console.log(getSplitName(2));



console.log(" ");
console.log("Nomor 6 ");
//nomor 6
const getAngkaTerbesarKedua = (angka) =>{
    if(angka){
        const urutan = [...new Set(angka.sort().reverse())];
    return urutan[1];
    }else{
        return "Error: Tidak sesuai parameter"
    }
    
}
const dataAngka = [9,9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0)); //Uncaught TypeError: angka.sort is not a function
console.log(getAngkaTerbesarKedua()); //Uncaught TypeError: Cannot read properties of undefined (reading 'sort')



console.log(" ");
console.log("Nomor 7 ");
//nomor 7
const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
];
let sum =0;
const getTotalPenjualan = (value) =>{
    value.forEach((element) => {
       sum += element.totalTerjual
    });
    return 'Totalnya adalah '+sum
    
}
console.log(getTotalPenjualan(dataPenjualanPakAldi));




console.log(" ");
console.log("Nomor 8 ");
//nomor 8

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

const getInfoPenjualan = (value) =>{
    if(value){
        let modal = 0, untung = 0, persentaseUntung;
        let totalKeuntunganBersih = 0;
        
        for(let i=0; i<value.length; i++){
            modal += (value[i].hargaBeli * (value[i].sisaStok + value[i].totalTerjual));
            untung += (value[i].hargaJual * value[i].totalTerjual);
        }
        
        const penulisPalingTerlaris = (value) => {
            let most = value.reduce((total, value) => value.totalTerjual > total.totalTerjual ? value : total);
            if (value.penulis === 0) {
            return undefined;
            }
            return most.penulis;
        }

        const bukuPalingTerlaris = (value) => {
            let most = value.reduce((total, value) => value.totalTerjual > total.totalTerjual ? value : total);
            if (value.namaProduk === 0) {
            return undefined;
            }
            return most.namaProduk;
        }

        totalKeuntunganBersih = (untung-modal);
        persentaseUntung = (totalKeuntunganBersih/modal)*100;

        const konversiRupiah = (nilai) =>{
            const format = nilai.toString().split('').reverse().join('');
            const convert = format.match(/\d{1,3}/g);
            return 'Rp ' + convert.join('.').split('').reverse().join('')
        }

        return {totalKeuntungan : konversiRupiah(totalKeuntunganBersih),
        totalModal : konversiRupiah(modal),
        persentaseKeuntungan : persentaseUntung.toFixed(2)+"%",
        penulisTerlaris : penulisPalingTerlaris(dataPenjualanNovel),
        produkBukuTerlaris : bukuPalingTerlaris(dataPenjualanNovel)
        };
    }else{
        return "Maaf parameter tidak valid"
    }
    
}

console.log(getInfoPenjualan(dataPenjualanNovel))
console.log(getInfoPenjualan())

