var infoLastName = prompt('Ваша фамилия')
var infoName = prompt('Ваше имя')
var info = prompt('Ваше отчество')
var infoYear = prompt ('Ваш возраст','0')
var gender = confirm('Ваш пол мужской')
if (gender === true) {
   var gender = 'Мужчина'
} else {
    var gender = 'Женщина'
}
var infoPension = infoYear < 59
 if (infoPension === true) {
    var infoPension = 'нет'
 } else {
    var infoPension = 'да'
 }
 

console.log(gender)
console.log(infoYear)
console.log(infoLastName)
console.log(infoName)
console.log(info)

var infoDay = (infoYear * 365) //Получили количество дней
console.log(infoDay)
alert('Ваше ФИО:' + ' ' + (infoLastName) + ' ' + (infoName) + ' ' + (info) + '\n' + 'Ваш возраст в годах:' + ' ' + (infoYear)
+ '\n' + 'Ваш возраст в днях:' + ' ' + (infoDay) + '\n' + 'Ваш пол:' + ' ' + (gender) + '\n' + 'Вы на пенсии:' + ' ' + (infoPension))
     




