import { useMutation, gql } from "@apollo/client"
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc"

const 나의그래프큐엘셋팅 = gql`
    mutation {
        createBoard(writer: "창수", title:"하이", contents: "안녕하세요") {
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage(): JSX.Element {

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async (): Promise<void> => {
        const result = await 나의함수()
        console.log(result)
    }




    // 한 줄일때는 괄호() 필요 없음
    return (
        <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청하기</button>
    )
}