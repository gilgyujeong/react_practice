import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from "next/router"

export default function BoardWrite(props) {
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {   // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-04-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        const myVariables = {
            number: Number(router.query.number)
        }
        if (title) {
            myVariables.title = title
        }

        if (writer) {
            myVariables.writer = writer
        }
            
        if (contents) {
            myVariables.contents = contents
        }
        
        // 여기서 수정
        const result = await updateBoard({
            variables: myVariables
        })
        router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    return (
        <div>
            <div>$$$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$</div>
            <BoardWriteUI 
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                data={props.data} // undefined 이거나. data 이거나 둘 중 하나!
            />
            <div>$$$$$$$$$$$$$$$$$ 여기는 컨테이너 입니다. $$$$$$$$$$$$$$$</div>    
        </div>
        
    )
}