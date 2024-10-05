import {useForm} from 'react-hook-form';
import { useEvents } from '../context/EventsContext';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from "dayjs" 
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)
function EventFormPage() {
    const { register, handleSubmit, setValue }= useForm();
    const { createEvent, getEvent, updateEvent} = useEvents();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
    async function loadEvent(){
            if(params.id){
                const event = await getEvent(params.id);
                console.log(event);
                setValue('title', event.title)
                setValue('description', event.description)
                setValue("date", dayjs(event.date).utc().format("YYYY-MM-DD"))           
            }
        }
    loadEvent()
    }, [])

    const onSubmit = handleSubmit( (data)=> {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
        }
    
        if (params.id) {
            updateEvent(params.id,dataValid);
        } else {
            createEvent(dataValid)
        }

        navigate("/events");
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <label htmlFor="title">/title</label>
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register('title')}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    autoFocus
                />
                <label htmlFor="description">description</label>
                <textarea 
                    rows="3" 
                    placeholder="Description"
                    {...register('description')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>

                <label htmlFor="date">Date</label>
                <input type="date" {... register("date")}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                />
                <button className="bg-indigo-500 px-3 py-2 rounded-md">Save
                </button>
            </form>
        </div>
        </div>
    )
}

export default EventFormPage