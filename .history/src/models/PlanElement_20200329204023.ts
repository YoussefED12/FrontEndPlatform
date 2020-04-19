export class PlanElement {

    id: number;
    planName: string;
    duration: string;
    description: string;
    price: number;
    startdate= new Date();
    enddate= new Date();

    public isValid(): boolean {
        if (this.planName && this.duration && this.price && this.startdate && this.enddate)
            return true;
        return false;
    }
}