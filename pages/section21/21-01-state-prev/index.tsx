import { useState } from 'react'

export default function counterLetDocumentPage(): JSX.Element {

    const [ count, setCount ] = useState(0);

    function onClickCountUp(): void {
        // 1. 화살표 함수
        // setCount((prev) => prev + 1 );

        // // 2. 함수 선언식
        // setCount(function (prev) { 
        //     // 로직 추가 가능
        //     // if() 등
        //     // for() 등
        //     // ...
            
        //     return prev + 1
        // });

        // 3. 매개변수 바꾸기
        setCount((ㅂㅈㄷㄱ) => ㅂㅈㄷㄱ + 1 );
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운터 올리기!!!</button>
        </div>
        
    )
}