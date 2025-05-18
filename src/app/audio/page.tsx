"use client";

import { UploadDropzone } from "~/utils/uploadthing";
import { useState } from "react";

export default function Home() {
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl">
        {uploadedFileUrl && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Upload Successful!</h3>
            <p className="mb-2">Your file is available at:</p>
            <a 
              href={uploadedFileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline break-all"
            >
              {uploadedFileUrl}
            </a>
          </div>
        )}

        <UploadDropzone
          endpoint="audioUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            setUploadedFileUrl(res[0].ufsUrl);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={(name) => {
            console.log("Uploading: ", name);
            setUploadedFileUrl(null);
          }}
          config={{
            mode: "auto"
          }}
        />
      </div>
    </main>
  );
}
