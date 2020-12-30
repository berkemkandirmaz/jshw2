//2.1
let citiesAndCountries = [{
    'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
}];

for(let key in citiesAndCountries){
    for (keySecond in citiesAndCountries[key]){
        console.log(keySecond + ' - это ' + citiesAndCountries[key][keySecond])
    }
}

//2.2
function getArray() {
	const amount = 12;
	let arrA = [];
	let arrB = [];
	for (let i = 1; i <= amount; i++) {
	  arrB.push(i);
	  if (i % 3 == 0) {
		arrA.push(arrB);
		arrB = [];
	  }
	}
	console.log(arrA);
  }
  getArray();

//2.3
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    let lang = 'ru';
    let day = 3;
    if(lang == 'en'){
        console.log(namesOfDays.en[(day - 1)])
    }
    if(lang == 'ru'){
        console.log(namesOfDays.ru[(day - 1)])
    }
}

getNameOfDay();

//2.4
const arr = [66, 100, 548, 733, 33];

function SumMinPlus () {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    }
    if (arr[i] - Math.trunc(arr[i]) !=0) {
      arr.splice(i, 1);
    }
} arr.sort(function(a,b){ 
    return a - b;
  })
  console.log(arr[0] + arr[1]);
}

SumMinPlus ();

//2.5
const number = [1, 0, 1, 0, 0, 1, 1];

console.log(parseInt(number.join(''), 2));