import googleLogo from "./assets/google.png";
import { useState } from "react";

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
          <div className="flex flex-row items-center justify-center gap-2 relative mt-6">
            <input
              type="text"
              placeholder="Pesquise no Google ou digite uma URL"
              className="ml-2 w-[500px] h-[50px] rounded-full border-2 border-gray-400 p-2 pl-10 pr-20 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ml-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <div className="absolute right-4 flex items-center gap-4">
              <svg
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <svg
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 mt-8">
            <button
              className="bg-blue-500 w-[150px] hover:bg-blue-600 hover:translate-y-[-2px] transition-all duration-300 text-white p-2 rounded-md"
              onClick={handleSearch}
            >
              Pesquisa Google
            </button>
            <button
              className="bg-blue-500 w-[150px] hover:bg-blue-600 hover:translate-y-[-2px] transition-all duration-300 text-white p-2 rounded-md"
              onClick={handleLuckyClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleClone;