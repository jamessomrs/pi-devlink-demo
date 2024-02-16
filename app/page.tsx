import { EventListHeader, EventListItem, Hero } from "@/devlink";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const events = await getData();

  return (
    <>
      <main>
        <Hero />
        <EventListHeader />
        <section className="padding-global" id="jobs">
          <div className="container-large">
            {events.data.map((event: any) => (
              <EventListItem
                key={event.id}
                eventTitle={event.seminar_details.name}
                eventLocation={`${event.hotel}, ${event.town}`}
                eventTime={new Date(event.start_timestamp).toLocaleString(
                  "en-DE",
                  {
                    day: "numeric", // Numeric day of the month
                    month: "short", // Abbreviated month name
                  }
                )}
                eventDetailLink={{ href: "/event/" + event.id }}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
