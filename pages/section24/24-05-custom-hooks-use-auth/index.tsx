import { useAuth } from "../../../src/components/commons/hooks/useAuth"

export default function CustomHooksUseAuthPage(): JSX.Element {
    useAuth();

    return <div>프로필 페이지 입니다.</div>
}