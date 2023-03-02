import { File, UploadFile } from "@domain/models";

export interface FileUpload {
  upload: (files: File[]) => Promise<UploadFile>;
}
