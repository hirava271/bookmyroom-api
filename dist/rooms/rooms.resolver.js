"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const rooms_service_1 = require("./rooms.service");
const get_rooms_dto_1 = require("./dto/get-rooms.dto");
let RoomsResolver = class RoomsResolver {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    async hello() {
        return 'hello';
    }
    async rooms() {
        return this.roomsService.getAll();
    }
};
__decorate([
    graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomsResolver.prototype, "hello", null);
__decorate([
    graphql_1.Query(() => [get_rooms_dto_1.GetRoomsDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomsResolver.prototype, "rooms", null);
RoomsResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsResolver);
exports.RoomsResolver = RoomsResolver;
//# sourceMappingURL=rooms.resolver.js.map