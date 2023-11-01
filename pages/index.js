import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lammfest WS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Lammfest WS" />
        <p className="description">
          This is a workspace for the Lammfest project.
          {/* Get started by editing <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
