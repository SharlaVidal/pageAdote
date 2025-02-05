import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

// Inicialize o cliente do Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function UploadPhoto({ onUpload }: { onUpload: (url: string) => void }) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const sanitizedFileName = file.name.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9.\-_]/g, "");
    const uniqueName = `${uuidv4()}_${sanitizedFileName}`;

    setLoading(true);
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("uploads") // Nome do bucket
      .upload(`public/${uniqueName}`, file);

    if (uploadError) {
      console.error("Erro no upload:", uploadError.message);
    } else {
      // Obtenha a URL pública diretamente
      const { data } = supabase.storage
        .from("uploads")
        .getPublicUrl(`public/${uniqueName}`);

      if (data?.publicUrl) {
        console.log("URL da imagem:", data.publicUrl);
        onUpload(data.publicUrl); // Retorna a URL pública
      } else {
        console.error("Erro ao obter a URL pública.");
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Carregando...</p>}
    </div>
  );
}
