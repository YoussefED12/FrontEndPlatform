import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { TokenStorageService } from "src/app/authentication/token storage/token-storage.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  title = "File-Upload-Save";
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  public formData: FormData;

  constructor(
    private uploadService: UserService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit() {}

  downloadFile() {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", "_File_Saved_Path");
    link.setAttribute("download", "file_name.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  change($event) {
    this.changeImage = true;
  }

  changedImage(event) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService
      .pushFileToStorage(
        this.currentFileUpload,
        Number.parseInt(this.tokenStorage.getUserId())
      )
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(
            (100 * event.loaded) / event.total
          );
        } else if (event instanceof HttpResponse) {
          alert("File Successfully Uploaded");
        }
        this.selectedFiles = undefined;
      });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
