import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="Description" content={`The work of Eric Frommelt`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/beu6szp.css"></link>
    </Head>
  )
}