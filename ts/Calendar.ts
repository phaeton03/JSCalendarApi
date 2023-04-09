import {CalendarEvent} from "./CalendarEvent";
import {Repository} from "./Repository";

interface Calendar {
    getEvent(id: number): Promise<CalendarEvent>;

    addOrUpdateEvent(event: CalendarEvent): void;

    deleteEvent(id: number): void;
}

class MyCalendar implements Calendar {
    constructor(storage: Repository) {
        this.storage = storage;
    }

    private storage: Repository;

    async getEvent(id: number): Promise<CalendarEvent | null> {
        return await this.storage.getEvent(id);
    }

    async addOrUpdateEvent(event: CalendarEvent): Promise<void> {
        this.storage.setEvent(event);
    }

    async deleteEvent(id: number): Promise<void> {
        this.storage.removeItem(id);
    }
}