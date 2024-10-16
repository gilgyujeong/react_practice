import { useQuery, gql } from "@apollo/client"
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types"
import { type MouseEvent, useState } from "react"
import CommentItem from "../../../src/components/units/16-comment-item";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page){
            _id
            writer
            title
            contents
        }
    }
`
    export default function StaticRoutingMovedPage() {
        const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);


    return(
        <div>
            {data?.fetchBoards.map((el) => (
                <CommentItem key={el._id} el={el} />
            )
        )}
        </div>
    )
}