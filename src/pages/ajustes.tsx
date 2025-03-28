import Layout from "../components/template/Layout";
import PainelButton from "../components/painelbuton";
import router from "next/router";

export default function Ajustes() {
  const listarUsuarios = () => {
    router.push("/usuario");
  };

  return (
    <Layout
      titulo="Ajustes & Configurações"
      subtitulo="Personalize o sistema por aqui!"
    >
      <div className="flex h-screen items-top justify-left">
        <PainelButton titulo="Usuários" submeter={listarUsuarios} />
      </div>
    </Layout>
  );
}
