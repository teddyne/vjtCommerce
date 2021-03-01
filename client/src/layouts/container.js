import React from 'react'
import { 
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client'
import DefaultLayout from './defaultLayout'
import Store from '../store/store'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

const withContainer = (Component) => {
    class ContainerWrapper extends React.PureComponent {
        render() {
            return (
                <ApolloProvider client={client}>
                    <Component />
                </ApolloProvider>
            )
        }
    }
    return ContainerWrapper
}

const withLayout = (component, isHome) => {
    return (
        <Store>
            <DefaultLayout isHome={isHome}>
                {component}
            </DefaultLayout>
        </Store>
    )
}

export { withContainer, withLayout }