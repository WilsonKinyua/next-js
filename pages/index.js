import MeetupList from "../components/meetups/MeetupList";

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

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1, // rebuild or refetch data after every 1 sec
  };
}

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
