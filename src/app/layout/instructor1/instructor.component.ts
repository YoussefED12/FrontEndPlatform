import { OnInit, Component } from "@angular/core";
import { TokenStorageService } from "src/app/authentication/token storage/token-storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'instructor-module',
    templateUrl: './instructor.component.html',
    styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

    public logedInAsInstructor = false;
    constructor(private tokenStorage: TokenStorageService, private routerService: Router) { }

    ngOnInit() {
        this.verifyUser();
    }

    public verifyUser() {
        // this.tokenStorage.getAuthorities().forEach(authority => {
        //     if (authority == 'ROLE_INSTRUCTOR') {
        //         this.logedInAsInstructor = true;
        //     }
        // });
        // if (!this.logedInAsInstructor) {
        //     this.routerService.navigate(['/auth/login']);
        // }

    }
} 