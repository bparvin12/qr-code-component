import Head from 'next/head'
import {
  Container,
} from 'reactstrap'
import QRCard from '../components/QRCard/QRCard';

export default function Home() {
  return (
    <section className="general-layout">
      <Head>
        <title>ReactJS with reactstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <QRCard />
    </section>
  )
}
