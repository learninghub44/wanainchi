import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../services/cloudinary";

export default function ImageUpload({ files, setFiles }) {

  const onDrop = async (acceptedFiles) => {
    try {

      // limit check
      const totalFiles = files.length + acceptedFiles.length;

      if (totalFiles > 5) {
        alert("Maximum 5 images allowed");
        return;
      }

      const uploadedFiles = [];

      for (const file of acceptedFiles) {

        // create preview immediately
        const previewFile = {
          file,
          preview: URL.createObjectURL(file),
          uploading: true
        };

        setFiles((prev) => [...prev, previewFile]);

        // upload to cloudinary
        const uploaded = await uploadImage(file);

        uploadedFiles.push({
          file,
          preview: previewFile.preview,
          url: uploaded.url,
          public_id: uploaded.public_id,
          uploading: false
        });

      }

      // replace uploading files with uploaded results
      setFiles((prev) => {
        const updated = prev.filter((f) => !f.uploading);
        return [...updated, ...uploadedFiles];
      });

    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": []
    },
    maxFiles: 5
  });

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>

      <div {...getRootProps()} className="upload-box">

        <input {...getInputProps()} />

        <p>Drag & Drop Images Here</p>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Max 5 images • JPG, PNG supported
        </p>

      </div>

      <div className="preview-grid">

        {files.map((file, index) => (
          <div key={index} className="preview-card">

            <img
              src={file.preview}
              alt="preview"
            />

            {file.uploading && (
              <p style={{ fontSize: "12px", color: "#007bff" }}>
                Uploading...
              </p>
            )}

            {file.url && (
              <p style={{ fontSize: "12px", color: "#006600" }}>
                Uploaded
              </p>
            )}

            <button
              type="button"
              onClick={() => removeFile(index)}
            >
              Remove
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}