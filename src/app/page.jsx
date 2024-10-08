import Cabecalho from "@/components/Cabecalho";
import CardList from "@/components/CardList";
import Contador from "@/components/Contador";
import Form from "@/components/Form";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <div>
      <Cabecalho />
      <Contador />
      <Form />
      <CardList />
      <Rodape />
    </div>
  );
}
