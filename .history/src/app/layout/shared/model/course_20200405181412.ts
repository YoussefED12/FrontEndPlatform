import { CoursePlanElement } from "./coursePlanElement";

export class Course {

    id: number;
    trainingName: string;
    image: string;
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

    constructor() {

    }
}