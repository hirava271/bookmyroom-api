import { RoomsService } from './rooms.service';
export declare class RoomsResolver {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    hello(): Promise<string>;
    rooms(): Promise<import("./interfaces/room.interface").Room[]>;
}
