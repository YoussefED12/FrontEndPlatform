import { PlanElement } from "./PlanElement";

export class NewCourse {

    trainingName: string = "";
    image: File;
    ritme :string;
    etablissement: string = "";
    nbrparticipant: number =0;
    startdate: Date;
    endDate :Date ;
    nombreofhours: number ;
    preRequests: string[] = []; // to add
    maxSubscribers: number = 0; // to add
    idInstructor: number; // toadd
    description: string;
    plan=  new Array<PlanElement>();

    constructor() { }

}