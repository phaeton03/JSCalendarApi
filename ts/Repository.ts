import {CalendarEvent} from "./CalendarEvent";

export interface Repository {
    getEvent(id: number): Promise<CalendarEvent> ;

    setEvent(event: CalendarEvent): void;

    removeItem(id: number): void;
}

export class RepositoryLocalStorage implements Repository {
    private storage: Storage;

    constructor() {
        this.storage = localStorage;
    }

    async getEvent(id: number): Promise<CalendarEvent | null> {

        return JSON.parse(this.storage.getItem(id.toString()));
    }

    async removeItem(id: number): Promise<void> {
        return this.storage.removeItem(id.toString());
    }

    async setEvent(event: CalendarEvent): Promise<void> {
        return this.storage.setItem(event.id.toString(), JSON.stringify(event));
    }

}