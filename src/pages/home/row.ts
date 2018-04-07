export class Row {
    fullname: string;
    email: string;
    city: string;
    rideingroup: string;
    daysweek: string;
    registration: string;
    iconVisible: boolean = false;

    constructor(fullname: string, email: string, city: string, rideingroup: string, daysweek: string, registration: string) {
        this.fullname = fullname;
        this.email = email;
        this.city = city;
        this.rideingroup = rideingroup;
        this.daysweek = daysweek;
        this.registration = registration;
    }
}