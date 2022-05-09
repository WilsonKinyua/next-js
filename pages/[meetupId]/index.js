import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  const router = useRouter();
  return (
    <MeetupDetail
      title="Nextjs is awesome"
      image="https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"
      address="Nairobi Kenya"
      description="description"
    />
  );
}
