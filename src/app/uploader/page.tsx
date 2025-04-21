"use client";

import { UploadButton } from "~/utils/uploadthing";
import { FileDropzone } from "~/components/file-dropzone";
import { UploadBox } from "~/components/upload-box";
import { useState } from "react";

export default function Home() {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCurrentFile(file);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FileDropzone
        acceptedFileTypes={["image/*", ".jpg", ".jpeg", ".png", ".webp", ".svg"]}
        dropText="Drop image file"
        setCurrentFile={setCurrentFile}
      >
        {!currentFile ? (
          <UploadBox
            title="Upload your images securely"
            subtitle="Supports most image formats"
            description="Choose an image"
            accept="image/*"
            onChange={handleFileSelect}
          />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium">Selected: {currentFile.name}</p>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                alert("Upload Completed");
                setCurrentFile(null);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>
        )}
      </FileDropzone>
    </main>
  );
}
