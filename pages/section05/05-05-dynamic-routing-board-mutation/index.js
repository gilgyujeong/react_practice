import { useMutation, gql } from "@apollo/client"
import { useRouter } from "next/router"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){

        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
    }
}
`

export default function GraphqlMutationPage() {
    const router = useRouter()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        try { 
            // try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고, catch에 있는 내용이 실행됨.

            const result = await 나의함수({
                variables: {   // variables 이게 $ 역할을 함
                    writer: "맹구",
                    title: "안녕~!",
                    contents: "방가방가"
                }
            })
            console.log(result)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        } catch(error) {
            alert(error.message)
        }

    }

    // 한 줄일때는 괄호() 필요 없음
    return (
        <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    )
}