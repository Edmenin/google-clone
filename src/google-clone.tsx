import { useState } from "react";
import { Header } from "./components/header/header";
import { Logo } from "./components/logo/logo";
import { SearchContainer } from "./components/search-container/search-container";

function GoogleClone() {
  const [searchTerm, setSearchTerm] = useState("");
  const [buttonText, setButtonText] = useState("Estou com sorte");

  const handleSearch = async () => {
    console.log("Pesquisa:", searchTerm);
    alert("Verifique seu terminal");

    try {
      const cep = searchTerm.replace(/\D/g, "");

      if (cep.length !== 8) {
        console.log("CEP deve conter 8 dígitos");
        return;
      }

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!data.erro) {
        console.log(`Endereço encontrado para o CEP ${cep}:`);
        console.log(`Rua: ${data.logradouro}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.localidade}`);
        console.log(`Estado: ${data.uf}`);
      } else {
        console.log("CEP não encontrado");
      }
    } catch {
      console.log("Erro ao buscar CEP");
    }
  };

  const handleLuckyClick = () => {
    if (searchTerm.trim()) {
      setButtonText(searchTerm);
    } else {
      setButtonText("Estou com sorte");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Logo />
        <SearchContainer
          searchTerm={searchTerm}
          buttonText={buttonText}
          onSearchTermChange={setSearchTerm}
          onSearch={handleSearch}
          onLuckyClick={handleLuckyClick}
        />
      </div>
    </>
  );
}

export default GoogleClone;