import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "p1",
    image:
      "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
    title: "Nextjs is awesome",
    address: "Nairobi Kenya",
  },
  {
    id: "p2",
    image:
      "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
    title: "Nextjs is awesome",
    address: "Nairobi Kenya",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Nextjs is awesome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key='title' />
      </Head>
      <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
      </Layout>
    </>
  );
}
