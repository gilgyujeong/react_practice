export default function CommentItem(): JSX.Element {
    
    return (
        <div>
            {!myIndex[index] ? (
                <div key={el._id}>
                    <span style={{ margin: "10px"}}>{el.title}</span>
                    <span style={{ margin: "10px"}}>{el.writer}</span>
                    <button id={String(index)} onClick={onClickEdit}>수정하기</button>
                </div>
                ) : (
                    <input type="text" key={el._id} />
                )}
        </div>
    )
}