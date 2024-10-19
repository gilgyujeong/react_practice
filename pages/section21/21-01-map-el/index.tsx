export default function MapElPage(): JSX.Element {

    // 1. 기본방법
    // ["철수", "영희", "훈이"].forEach((el, index) => {
    //     console.log("el: ", el)
    //     console.log("index: ", index)
    // });

    // 2. 매개변수 변경한 방법
    // ["철수", "영희", "훈이"].forEach((qwer, asdf) => {
    //     console.log("el: ", qwer)
    //     console.log("index: ", asdf)
    // });

    // 3. 함수 선언식 방법
    // ["철수", "영희", "훈이"].forEach(function (qwer, asdf) {
    //     console.log("el: ", qwer)
    //     console.log("index: ", asdf)
    // });

    // 4. el과 index 바꾸기
    ["철수", "영희", "훈이"].forEach((index, el) => {
        console.log("el: ", el)
        console.log("index: ", index)
    });

    return (
        <>
        
        </>
    )
}