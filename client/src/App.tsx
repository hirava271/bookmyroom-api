import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    DatePickerComponent,
    TimePickerComponent,
} from '@syncfusion/ej2-react-calendars';
import './index.css';
import {Room} from "../../model/interfaces/room.interface";

function App(): JSX.Element {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        axios.get<Room[]>(`${process.env.REACT_APP_URL}rooms`).then(response => {
            setRooms(response.data);
        });
    }, []);

    return (
        <div>
            <div className="datetime-selector">
                <span>Meeting Timing:</span>
                <div className="datepicker-control-section">
                    <DatePickerComponent />
                </div>
                <div className="datetime-selector">
                    <div className="time-picker-control-section">
                        <TimePickerComponent />
                    </div>
                    <span>to</span>
                    <div className="time-picker-control-section">
                        <TimePickerComponent />
                    </div>
                </div>
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
