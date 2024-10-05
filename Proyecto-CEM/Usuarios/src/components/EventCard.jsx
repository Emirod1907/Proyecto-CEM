import { useEvents } from "../context/EventsContext";
import {Link} from 'react-router-dom';
import days from "dayjs"
import utc from "dayjs/plugin/utc"
days.extend(utc)
function EventCard({ event }) {
    const {deleteEvent} = useEvents()

    return(            
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">{event.title}</h1>
                    <div className="flex gap-x-2 items-center">
                        <button 
                        className="bg-red-600 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={()=>{
                            deleteEvent(event._id)
                        }}
                        >
                            Delete
                        </button>
                        <Link to={`/events/${event._id}`}
                            className="bg-blue-500 hover:bg-blue-500 text=while px-4 py-2 rounded-md"
                        >Edit</Link>
                    </div>
                </header>
                <p className="text-slate-300 font-bold">{event.description}</p>
                <p>{days(event.date).utc().format("DD/MM/YYYY")}</p>
            </div>
    )
}

export default EventCard