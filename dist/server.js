"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)(); // Criando uma nova aplicação Express
const PORT = 3000; // Define a porta do servidor
app.use(express_1.default.json()); // Habilita o uso de JSON nas requisições
app.use((0, cors_1.default)()); // Permitindo todas as solicitações CORS
// Rota que irá lidar com a solicitação
app.use('/apiserver', routes_1.default); // Define o prefixo para as rotas
app.get('/apidengue/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fazendo a solicitação para a API
        const apiRes = yield axios_1.default.get('https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=16&ey_start=2023&ew_end=17&ey_end=2024');
        // Enviando a resposta da API de volta ao cliente
        res.json(apiRes.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao acessar a API');
    }
})); // Iniciando o servidor na porta 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}, acesse http://localhost:${PORT}/apiserver`));
