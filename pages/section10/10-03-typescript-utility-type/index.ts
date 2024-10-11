export interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile>

// type aaa = {
//     name?: string;
//     age?: number;
//     school?: string;
//     hobby?: string;
// }

// 2. Required 타입
type bbb = Required<IProfile>

// type bbb = {
//     name: string;
//     age: number;
//     school: string;
//     hobby: string;
// }

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">

// type ccc = {
//     name: string;
//     age: number;
// }

// 4. Omit 타입
type ddd = Omit<IProfile, "school">

// type ddd = {
//     name: string;
//     age: number;
//     hobby?: string;
// }

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"  // Union 타입
let child: eee = "철수" // 철수, 영희, 훈이 만 됨
let child2: string = "사과" // 모든 string 타입은 다됨.

type fff = Record<eee, IProfile>  // Record 타입

// type fff = {
//     철수: IProfile;
//     영희: IProfile;
//     훈이: IProfile;
// }

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile  // "name" | "age" | "school" | "hobby"

// 7. type vs interface 차이 => interface는 선언병합 가능
export interface IProfile {
    candy: number // 선언병합으로 추가됨
}

// 8. 배운것 응용
let profile: Partial<IProfile> = {
    candy: 10
}