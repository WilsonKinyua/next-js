import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

export default function NewMeetup() {
  const meetupDataHandler = (meetupData) => {
    console.log(meetupData);
  };
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={meetupDataHandler} />
    </Layout>
  );
}
