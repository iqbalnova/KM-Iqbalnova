const {changeWord, checkTypeNumber, checkEmail, isValidPassword, getSplitName, getAngkaTerbesarKedua, getTotalPenjualan} = require('../script');


describe('Tes merubah kata', () => {
    test('should be change', () => {
        expect(changeWord('mencintai','membenci','Andini sangat mencintai kamu selamanya')).toBe('Andini sangat membenci kamu selamanya')
    });

    test('should be change', () => {
        expect(changeWord('puasa','tidak puasa','Aku sekarang sedang puasa')).toBe('Aku sekarang sedang tidak puasa')
    });

    test('should be change', () => {
        expect(changeWord('lemas','semangat','Hari ini Aku sangat lemas')).toBe('Hari ini Aku sangat semangat')
    });

    test.skip('should be change', () => {
        expect(changeWord('senang','sedih','Hari ini Aku sangat lemas')).toBe('Hari ini Aku sangat semangat')
    });
});

// NO 2
describe("test suatu bilangan genap / ganjil", () => {
    test('it should even', () => { 
        expect(checkTypeNumber(6)).toBe("Genap");
    });

    test('it should even', () => { 
        expect(checkTypeNumber(144)).toBe("Genap");
    });

    test('it should even', () => { 
        expect(checkTypeNumber(1080)).toBe("Genap");
    });

    test('it should odds', () => { 
        expect(checkTypeNumber(9)).toBe("Ganjil");
    });

    test('it should odds', () => { 
        expect(checkTypeNumber(155)).toBe("Ganjil");
    });

    test('it should odds', () => { 
        expect(checkTypeNumber(1999)).toBe("Ganjil");
    });
})

// No 3
describe("test cek email", () => {
    test('it should invalid email', () => { 
        expect(checkEmail('apranata@bina')).toBe('INVALID');
    });

    test('it should invalid email', () => { 
        expect(checkEmail('apranata')).toBe('INVALID');
    });

    test('it should invalid email', () => { 
        expect(checkEmail('@')).toBe('INVALID');
    });

    test('it should valid email', () => { 
        expect(checkEmail('apranata@binar.co.id')).toBe('VALID');
    });

    test('it should valid email', () => { 
        expect(checkEmail('apranata@binar.com')).toBe('VALID');
    });

    test('it should valid email', () => { 
        expect(checkEmail('apranata@gmail.com')).toBe('VALID');
    });
})

// NO 4
describe("test cek password", () => {
    test('it should valid password', () => { 
        expect(isValidPassword('Meong2021')).toBe(true + " Karena memenuhi requierement, Meong2021 terdiri dari 9 huruf, ada huruf besar, ada huruf kecil, dan ada angka");
    });

    test('it should valid password', () => { 
        expect(isValidPassword('Meongmeong1')).toBe(true + " Karena memenuhi requierement, Meongmeong1 terdiri dari 11 huruf, ada huruf besar, ada huruf kecil, dan ada angka");
    });

    test('it should valid password', () => { 
        expect(isValidPassword('Password1234')).toBe(true + " Karena memenuhi requierement, Password1234 terdiri dari 12 huruf, ada huruf besar, ada huruf kecil, dan ada angka");
    });

    test('it should invalid password', () => { 
        expect(isValidPassword('Meon')).toBe(false + " Karena Meon hanya terdiri dari 4 huruf");
    });

    test('it should invalid password', () => { 
        expect(isValidPassword('password')).toBe(false + " Karena password tidak ada huruf besar");
    });

    test('it should invalid password', () => { 
        expect(isValidPassword('Password')).toBe(false + " Karena Password tidak ada angka");
    });
})

// NO 5 
describe('test split name', () => {
    test('should true', () => {
        expect(getSplitName('Aldi')).toEqual({firstName: 'Aldi' , middleName: null , lastName: null})
    });
});

// NO 6
describe('test mencari angka terbesar kedua', () => {
    test('should the number is true', () => {
        expect(getAngkaTerbesarKedua([2,1,6,5])).toBe(5)
    });

    test.skip('should the number is false', () => {
        expect(getAngkaTerbesarKedua([1])).toBe('Error: Tidak sesuai parameter')
    });
});

// NO 7
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
// describe('test mencari total penjualan', () => {
//     test('should be true', () => {
//         expect(getTotalPenjualan(dataPenjualanPakAldi)).toBe()
//     });
// });