import { useState } from 'react'

export default function Child2(props: any): JSX.Element {

    return (
        <div>
            <div>자식2의 카운트: {props.count}</div>
            <button onClick={props.onClickCount}>카운터 올리기!!!</button>
        </div>
        
    )
}