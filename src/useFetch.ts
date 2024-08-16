import { useEffect, useState } from "react";
import IProfissional from "./types/IProfissional";

export default function useFetch<T>({ url }: { url: string }) {
  const [dados, setDados] = useState<IProfissional | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/${url}`)
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados))
      .catch((erro) => setErro(erro));
  }, [url]);
  return { dados, erro };
}
