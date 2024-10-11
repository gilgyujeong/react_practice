import { useQuery, gql, useMutation } from "@apollo/client"

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    // const myStyles = {
    //     margin: "10px",
    // }

    const onClickDelete = (event) => {
        deleteBoard({
            variables: {
                number: Number(event.target.id)
            },
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return(
        <div>
            {/* 특별한 이유가 없으면? Fragment(<> </>)로 감싸자! <div/>는 1개 더 그려야되서 조금 느려짐 */}
            {data?.fetchBoards.map((el, index) => (
                // 1. 프레그먼트란? <></>, <Fragment></Fragment>
                // 2. 프레그먼트에 key 입력하는 방법? <Fragment key={1}></Fragment> import 해야함
                <div key={el.number}> {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음 */}
                    <span>
                        <input type="checkbox"></input>
                    </span>
                    <span style={{ margin: "10px"}}>{el.number}</span>
                    <span style={{ margin: "10px"}}>{el.title}</span>
                    <span style={{ margin: "10px"}}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
            
        </div>
        
    )
}