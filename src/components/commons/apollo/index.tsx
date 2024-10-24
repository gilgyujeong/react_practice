import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps):JSX.Element {
    const uploadLink = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    })
    
    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        cache: GLOBAL_STATE,  // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해 놓기
    })

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}