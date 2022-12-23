import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx)

		return initalProps
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />				
				</Head>
				<body id="root">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument