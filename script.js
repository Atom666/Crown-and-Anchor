console.log("JS is working");

let funds = 50;

// while (funds > 1 && funds < 100) {

     // Размещение ставок

     // Бросок костей

     // Получение выигрыша

// }

// Функция генерации рандом чисел для броска костей
function rand(m, n){
    return m + Math.floor((n - m + 1) * Math.random());
}

// Функция генерирующая случайным образом на какую грань упал кубик
function randFace(){
    return ["crown", "anchor", "heart", " spade", "club", " diamond"]
        [rand(0, 5)];
}




