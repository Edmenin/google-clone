import googleLogo from "./assets/google.png";
import { useState } from "react";
import { Input } from "./components/input/input";
import { SearchButtons } from "./components/buttons/buttons";

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
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <h1 className="text-md hover:underline hover:text-gray-900 font-medium text-gray-600">
          Gmail
        </h1>
        <svg
          className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
        </svg>
        <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600">
          <span className="text-lg font-medium">E</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src={googleLogo} alt="Google Logo" className="w-[380px]" />
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6">
            <Input value={searchTerm} onChange={setSearchTerm} />
          </div>
          <SearchButtons
            buttonText={buttonText}
            onSearch={handleSearch}
            onLuckyClick={handleLuckyClick}
          />
        </div>
      </div>
    </>
  );
}

export default GoogleClone;