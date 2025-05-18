"use client";

import { UploadDropzone } from "~/utils/uploadthing";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="inline-block mb-8 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>

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
          endpoint="textUploader"
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
