"use client";

import { UploadButton } from "~/utils/uploadthing";
import { FileDropzone } from "~/components/file-dropzone";
import { useState } from "react";

export default function Home() {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <FileDropzone
        acceptedFileTypes={["image/*", ".jpg", ".jpeg", ".png", ".webp", ".svg"]}
        dropText="Drop image file"
        setCurrentFile={(file) => setCurrentFile(file)}
      >
        <div className="mt-4 p-6 border border-gray-300 rounded-lg">
          {currentFile ? (
            <p>Selected file: {currentFile.name}</p>
          ) : (
            <p>Drag and drop an image here or click the upload button above</p>
          )}
        </div>
      </FileDropzone>
    </main>
  );
}
