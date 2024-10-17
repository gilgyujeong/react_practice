// class Date {
//     qqq = 3
    
//     getFullYear() {

//     }

//     getMonth() {

//     }
// }

// const date = new Date();

class Monster {
    power = 50;

    attack() {
        console.log("공격합니다")
    }
}

// 상속
class 슈퍼몬스터 extends Monster {
    run() {
        console.log("도망가자!!")
    }

    attack() {
        console.log("슈퍼몬스터 필살기!!!")
    }
}