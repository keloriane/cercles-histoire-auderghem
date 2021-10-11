import '../styles/globals.css';
import {GraphQLClient, ClientContext} from 'graphql-hooks';
import {ShowFilterProvider} from "../context/showFilterContext";
import Layout from "./Layout";

const client = new GraphQLClient({
    url: 'https://cha.pxl-studio.com/graphql',

    headers: {
        Authorization: process.env.REACT_APP_DATO_CMS_AUTHORIZATION,
    },
});

export function App({Component, pageProps}) {

    return (
        <ShowFilterProvider>
            <ClientContext.Provider value={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ClientContext.Provider>
        </ShowFilterProvider>

    )
}

export default App;
