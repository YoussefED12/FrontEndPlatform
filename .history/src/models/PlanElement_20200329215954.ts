export class PlanElement {

    id: number;
    planName: string;
    duration: string;
    description: string;
    price: nudber;
    startdate= new Date();
    enddate= new Date();

    public isValid(): boolean {
        if (this.planName && this.duration && this.price && this.startdate && this.enddate)
            return true;
        return false;
    }
}