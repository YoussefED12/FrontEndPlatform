import { CoursePlanElement } from "./coursePlanElement";

export class Course {

    id: number;
    trainingName: string;
    image: any;
    ritme;
    etablissement;
    nombreofhours;
    nbrparticipant;
    description;
    startdate;
    endDate;
    preRequests: string[];
    maxSubscribers;
    user = null ;
    plan: CoursePlanElement[];
    started: number;
    constructor() {

    }
}