import { useState } from "react";

export default function UploadPhoto({ onUpload }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Configuração no Cloudinary

    setLoading(true);
    const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setLoading(false);

    onUpload(data.secure_url); // Retorna a URL da imagem
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Carregando...</p>}
    </div>
  );
}
