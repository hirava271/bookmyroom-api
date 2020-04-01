import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './index.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Room} from "../../model/interfaces/room.interface";

function App(): JSX.Element {
    const currentDate = new Date();
    const [rooms, setRooms] = useState<Room[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
    const [startTime, setStartTime] = useState<Date>(getStartTime(currentDate));
    const [endTime, setEndTime] = useState<Date>(getEndTime(startTime));

    useEffect(() => {
        axios.get<Room[]>(`${process.env.REACT_APP_URL}rooms`).then(response => {
            setRooms(response.data);
        });
    }, []);

    function getStartTime(currentTime: Date): Date {
        if(currentTime.getMinutes() <= 25) {
            return setTime(currentTime, currentTime.getHours(), 30);
        }
        if(currentTime.getMinutes() > 35 ) {
            return setTime(currentTime, currentTime.getHours() + 1, 0);
        }
        return currentTime;
    }

    function getEndTime(startTime: Date): Date {
        if(startTime.getMinutes() == 0) {
            return setTime(startTime, startTime.getHours(), 30);
        }
        if(startTime.getMinutes() == 30 ) {
            return setTime(startTime, startTime.getHours() + 1, 0);
        }
        return startTime;
    }

    function setTime(date: Date, hours: number, minutes: number): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
    }
    return (
        <div>
            <div className="datetime-selector">
                <span>Meeting Timing:</span>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date: Date) => {setSelectedDate(date)}}
                    showPopperArrow={true}
                />
                <DatePicker
                    selected={startTime}
                    onChange={(date: Date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
                <DatePicker
                    selected={endTime}
                    onChange={(date: Date) => setEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
            </div>
            {rooms.length > 0 &&
            rooms.map((room: Room, index: number) => {
                return (
                    <div key={index}>
                        <span>{room.name}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
