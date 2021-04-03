console.log("JS is working");

let funds = 50;

while (funds > 1 && funds < 100) {

// Размещение ставок
    // Функция генерации рандом чисел для броска костей
    function rand(m, n){
        return m + Math.floor((n - m + 1) * Math.random());
    }

    // Функция генерирующая случайным образом на какую грань упал кубик
    function randFace(){
        return ["crown", "anchor", "heart", " spade", "club", " diamond"]
            [rand(0, 5)];
    }

    // Начальное число кол-во выпавших граней
    const bets = (crown: 0, auchor:0, heart:0, spade:0,  club:0, diamond: 0 );

    // рандомная  ставка
    let totalBet = rand(1, funds);

    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // Случайное распределение всех ставок 
    }
    funds = funds - totalBet;


    // Размещение ставок 
    let remaining = totalBet; 

    do{
        let bet =  rand(1, remaining);
        let face = randFace();
        bets[face] = bets[face] + bet;
        remaining = totalBet - bet;
    } while(remaining > 0); // У словие в цикле do...while пишется в конце
     // Бросок костей

     // Получение выигрыша

// }



