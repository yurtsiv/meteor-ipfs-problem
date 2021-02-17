import React, { useState } from "react";
import ipfsClient from "ipfs-http-client";

const apiUrl = "https://ipfs.infura.io:5001";

const ipfs = ipfsClient(apiUrl);

async function onUpload(file) {
  const content = await file.arrayBuffer();

  const [{hash}] = await ipfs.add({content}, {pin: true});

  return hash;
}

function FileUpload() {
  const [uploading, setUploading] = useState(false);

  return (
    <>
      <input
        type="file"
        label="Add file"
        onChange={(e) => {
          setUploading(true);
          onUpload(e.target.files[0])
            .then(hash => {
              alert(`Success! File hash: ${hash}`)
            })
            .catch(e => alert(e.message))
            .finally(() => setUploading(false))
        }}
      />
      {uploading && <div>Uploading...</div>}
    </>
  );
}

export default FileUpload;