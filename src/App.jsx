import { Eye } from "@phosphor-icons/react";
import "./App.css";
import cartao from "./assets/imagens/cartao-de-credito.png";
import InputValue from "./components/InputValue/InputValue";
import TitleData from "./components/TitleData/TitleData";
import Button from "./components/Button/Button";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#111827] flex flex-col justify-center items-center gap-5 px-4">
      <div className="w-full max-w-[500px] mx-auto flex flex-col items-center gap-5">
        <h1 className="text-3xl sm:text-4xl leading-snug text-white font-semibold text-center">
          Veja se seu cartão <br />
          <span className="bg-gray-700 py-1 px-2 rounded">vazou</span> na
          internet
        </h1>

        <img
          src={cartao}
          alt="Cartão de Crédito"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto"
        />

        <div className="w-full flex flex-col gap-4">
          <div>
            <TitleData label="Nome no cartão" />
            <InputValue
              type="text"
              id="nome-no-cartao"
              placeholder="Nome completo como está no cartão"
              className="w-full"
            />
          </div>

          <div>
            <TitleData label="Número do cartão" />
            <InputValue
              type="number"
              id="numero-do-cartao"
              placeholder="1234 5678 9012 3456"
              className="w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <TitleData label="Data de Expiração" />
              <div className="flex gap-2">
                <InputValue
                  type="text"
                  id="mes"
                  placeholder="MM"
                  className="w-full"
                />
                <InputValue
                  type="text"
                  id="ano"
                  placeholder="AA"
                  className="w-full"
                />
              </div>
            </div>

            <div className="sm:w-[40%]">
              <TitleData label="CVV" />
              <InputValue
                type="text"
                id="cvv"
                placeholder="000"
                className="w-full"
              />
            </div>
        </div>

          <div>
            <TitleData label="Senha do cartão" />
           
           <div className="relative w-full">
              <InputValue
                type="password"
                id="senha-do-cartao"
                placeholder="**********"
                className="w-full pr-10"
              />
              <Eye size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
              </div>

           </div>  

           <Button
           title="Verificar"
           className="bg-[#4338ca] w-full hover:bg-[#4438cad0]"
           /> 

            <h2 className="text-gray-400 m-1 mb-4  flex justify-center text-xs">* É verdadeiro este site</h2>
          
        </div>
      </div>
    </main>
  );
}

export default App;
