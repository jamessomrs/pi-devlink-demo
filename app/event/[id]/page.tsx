import { EventDetail } from "@/devlink";
import Form from "../../components/form";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Event({ params }: { params: { id: string } }) {
  const eventDetail = await getData(params.id);

  return (
    <>
      <main>
        <EventDetail
          eventDetailTitle={eventDetail.data.seminar_details.name}
          eventDetailInfo={eventDetail.data.seminar_details.remark}
          eventDetailTime={`${new Date(eventDetail.data.start_timestamp).getDate()} ${new Date(
            eventDetail.data.start_timestamp
          ).toLocaleString("default", { month: "short" })} ${new Date(
            eventDetail.data.start_timestamp
          ).getHours()}:${new Date(eventDetail.data.start_timestamp)
            .getMinutes()
            .toString()
            .padStart(2, "0")} - ${new Date(
            eventDetail.data.end_timestamp
          ).getHours()}:${new Date(eventDetail.data.end_timestamp)
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}
          eventDetailLocation={
            eventDetail.data.hotel + ", " + eventDetail.data.town
          }
          formBody={ <Form seminarterminsId={eventDetail.data.id}  seminarsId={eventDetail.data.seminar_details.id}/>}
        />
      </main>
    </>
  );
}
