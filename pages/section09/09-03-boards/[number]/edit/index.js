import BoardWrite from "@/src/components/units/board/09-write/BoardWrite.container"

export default function GraphqlMutationPage() {



    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            <div>############### 여기는 index.js 입니다. ##############</div>
            <BoardWrite isEdit={true} />
            <div>############### 여기는 index.js 입니다. ##############</div>
        </div>
        
    )
}