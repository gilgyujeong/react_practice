import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import { useState } from "react"
import FetchPolicyExample from "../../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    
    const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)

    // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
    const onClickIsOpen = () => {
        setIsOpen(true);
    }

    return(
        <div>
            <button onClick={onClickIsOpen}>
                버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
            </button>
            {isOpen && <FetchPolicyExample />}
        </div>
    )
}