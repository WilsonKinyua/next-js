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

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
