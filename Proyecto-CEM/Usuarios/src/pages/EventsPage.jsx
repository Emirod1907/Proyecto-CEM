import { useEffect } from "react";
import { useEvents } from "../context/EventsContext"
import EventCard from '../components/EventCard'

function EventsPage() {
    const { getEvents, events } = useEvents();

    useEffect(() => {
        getEvents();
     },[])

     if(events.lenght === 0) return (<h1>No Events</h1>);

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {events.map((event) => (
                <EventCard event={event} key={event._id}/>
            ))}
        </div>
    );
}

export default EventsPage