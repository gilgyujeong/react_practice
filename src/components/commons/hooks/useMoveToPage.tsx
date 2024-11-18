import { useRouter } from "next/router"
import { visitedPageState } from "../../../commons/stores";
import { useRecoilState } from "recoil";

interface IUseMoveToPageReturn {
    onClickMoveToPage: (path: string) => () => void;
    visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
    const router = useRouter();
    const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

    const onClickMoveToPage = (path: string) => () => {
        setVisitedPage(path);  // 로그인페이지일때는 set 하지 않도록 조건 추가
        // localStorage.setItem("visitedPage", path) // 로컬스토리지도 가능!
        void router.push(path);
    }

    return {
        visitedPage,
        onClickMoveToPage,
    }
}