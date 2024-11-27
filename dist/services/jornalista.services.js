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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJornalistaService = exports.updateJornalistaService = exports.findAllJornalistasService = exports.createJornalistaService = void 0;
const jornalista_repositories_1 = require("../repositories/jornalista.repositories"); // Importa os métodos do repositório
const createJornalistaService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const jornalista = yield (0, jornalista_repositories_1.findJornalistaByEmail)(data.Email); // Busca um jornalista pelo e-mail
    if (jornalista) {
        throw new Error('Jornalista já existe'); // Se o jornalista já existir, lança um erro
    }
    return (0, jornalista_repositories_1.createJornalista)(data); // Cria um novo jornalista
});
exports.createJornalistaService = createJornalistaService;
const findAllJornalistasService = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, jornalista_repositories_1.findAllJornalistas)(); // Busca todos os jornalistas
});
exports.findAllJornalistasService = findAllJornalistasService;
const updateJornalistaService = (ID, Data) => __awaiter(void 0, void 0, void 0, function* () {
    const jornalista = yield (0, jornalista_repositories_1.findJornalistaById)(ID); // Busca um jornalista pelo id
    if (!jornalista) {
        throw new Error('Jornalista não encontrado'); // Se o jornalista não existir, lança um erro
    }
    return (0, jornalista_repositories_1.updateJornalista)(ID, Data); // Atualiza um jornalista
});
exports.updateJornalistaService = updateJornalistaService;
const deleteJornalistaService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const jornalista = yield (0, jornalista_repositories_1.findJornalistaById)(ID); // Busca um jornalista pelo id
    if (!jornalista) {
        throw new Error('Jornalista não encontrado'); // Se o jornalista não existir, lança um erro
    }
    return (0, jornalista_repositories_1.deleteJornalista)(ID); // Deleta um jornalista
});
exports.deleteJornalistaService = deleteJornalistaService;
