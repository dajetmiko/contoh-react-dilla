
/**
 * 
 * @returns {   [number, () => string]    }
 */
const mencobaReturnArray = () => {
  const fungsiBaru = () => {
    return "1+1abc"
  }
  const angka = 5

  return [angka, fungsiBaru]
}

const mencobaReturnObject = () => {
  const fungsiBaru = () => {
    return "1+1abc"
  }
  const angka = 5

  return {angka, fungsiBaru}
}

//kondisi || untuk assign variable saat nilai di kiri or adalah null
//versi panjang
const takDefinisiPertama = undefined
let abc
if(takDefinisiPertama === undefined || takDefinisiPertama === null || takDefinisiPertama === 0 || takDefinisiPertama === false){
  abc = 5
}
//versi pendek
const takDefinisi = undefined
const abc = takDefinisi || 5



//kondisi && untuk cek menjalankan fungsi 
//versi panjang
const fungsiJalan = () => {
  const abcde = "abcde"
}
if(takDefinisiPertama === true){
  fungsiJalan()
}


//versi pendek
const fungsiJalan = () => {
  const abcde = "abcde"
}
false && fungsiJalan()


//ternary kondisi
const abc = (1 === 2) ? "string benar" : "string salah"

const apakahBenara = false && true


const [angkaRandomNama, fungsiBaruRandomNama] = mencobaReturnArray()
