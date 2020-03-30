import { RoomsService } from './rooms.service';
import { Room } from './interfaces/room.interface';
import { AddRoomsDto } from './dto/add-rooms.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    getRooms(): Promise<Room[]>;
    addRoom(beingAddedRoom: AddRoomsDto): Promise<Room>;
}
