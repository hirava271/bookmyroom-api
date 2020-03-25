import { Model } from 'mongoose';
import { Room } from './interfaces/room.interface';
export declare class RoomsService {
    private roomModel;
    constructor(roomModel: Model<Room>);
    getAll(): Promise<Room[]>;
    addRoom(beingAddedRoom: Room): Promise<Room>;
}
