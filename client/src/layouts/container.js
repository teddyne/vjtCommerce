import React from 'react'
import { 
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client'
import DefaultLayout from './defaultLayout'

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
        <DefaultLayout isHome={isHome}>
            {component}
        </DefaultLayout>
    )
}

export { withContainer, withLayout }