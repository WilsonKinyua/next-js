import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "p1",
        },
      },
      {
        params: {
          meetupId: "p2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Nextjs is awesome",
        image:
          "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
        address: "Nairobi Kenya",
        description: "description",
      },
    },
  };
}

export default function MeetupDetails() {
  const router = useRouter();
  return (
    <MeetupDetail
      title="nn"
      image="https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"
      address="Nairobi Kenya"
      description="description"
    />
  );
}
