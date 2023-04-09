export class CalendarEvent {
    constructor(id: number, title: string, date: string, startTime: string, endTime: string) {
        this.assertIsNotEmpty(title);
        this.assertIsNotNull(id);
        this.assertIsValidTime(startTime);
        this.assertIsValidTime(endTime);
        this.assertIsEndTimeGreaterThanStartTime(startTime, endTime);
        this.assertIsDate(date);

        this._id = id;
        this._title = title;
        this._date = date;
        this._startTime = startTime;
        this._endTime = endTime;
    }

    private _id: number;
    private _title: string;
    private _date: string;
    private _startTime: string;
    private _endTime: string;

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get startTime(): string {
        return this._startTime;
    }

    get endTime(): string {
        return this._endTime;
    }

    get date(): Date {
        return new Date(this._date);
    }

    private assertIsNotEmpty(title: string): void {
        if (!title || title.trim().length === 0) throw new Error("Title is empty or null");
    }

    private assertIsNotNull(id: number): void {
        if (!id) throw new Error("_id is null");
    }

    private assertIsValidTime(time: string): void {
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(time)) throw new Error("Time is not valid format");
    }

    private assertIsDate(date: string ): void {
        const timeRegex = /^(?:19|20)\d\d-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:19(?:[2468][048]|[13579][26]|0[48])|(?:20(?:[02468][048]|[13579][26])|(?:0[48])))-02-29$/;

        if (!timeRegex.test(date)) throw new Error("Date is not valid format");
    }

    private assertIsEndTimeGreaterThanStartTime(startTime: string, endTime: string) {
        const start = new Date(`1970-01-01T${startTime}:00`);
        const end = new Date(`1970-01-01T${endTime}:00`);
        return end > start;
    }
}