import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function meetupDataHandler(meetupData) {
    console.log(meetupData);
  }
  return <NewMeetupForm onAddMeetup={meetupDataHandler} />;
}
