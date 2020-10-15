import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /></Head>
                <body>
                <div id={"portal"}></div>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument