"use client";

import { UploadDropzone } from "~/utils/uploadthing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl">
        <UploadDropzone
          endpoint="pdfUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={(name) => {
            console.log("Uploading: ", name);
          }}
          config={{
            mode: "auto"
          }}
        />
      </div>
    </main>
  );
}
