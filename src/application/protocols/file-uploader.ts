import { File, UploadFile } from "@/domain/models";

export interface FileUploader {
  upload: (
    files: File | File[]
  ) => Promise<UploadFile | UploadFile[] | undefined>;
}
