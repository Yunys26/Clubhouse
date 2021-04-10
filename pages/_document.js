import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
    
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>

                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Welcome Clubhouse</title>
                </Head>
                
                <body>
                    <Main/>
                    <NextScript />
                </body>

            </Html>
        )
    }
}