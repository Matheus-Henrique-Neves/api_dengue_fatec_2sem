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
exports.deleteJornalista = exports.updateJornalista = exports.findAllJornalistas = exports.createJornalista = void 0;
const jornalista_services_1 = require("../services/jornalista.services"); // Importa os métodos do serviço
const createJornalista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jornalista = yield (0, jornalista_services_1.createJornalistaService)(req.body); // Cria um novo jornalista
        return res.status(201).json(jornalista); // Retorna o jornalista criado
    }
    catch (error) {
        if (error.message === 'Usuário já existe')
            return res.status(400).json({ "message": "usuario ja existe" }); // Retorna um erro  
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.createJornalista = createJornalista;
const findAllJornalistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jornalistas = yield (0, jornalista_services_1.findAllJornalistasService)(); // Busca todos os jornalistas
    return res.status(200).json(jornalistas); // Retorna os jornalistas
});
exports.findAllJornalistas = findAllJornalistas;
const updateJornalista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jornalista = yield (0, jornalista_services_1.updateJornalistaService)(Number(req.params.id), req.body); // Atualiza um jornalista
        return res.status(200).json(jornalista); // Retorna o jornalista atualizado
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.updateJornalista = updateJornalista;
const deleteJornalista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, jornalista_services_1.deleteJornalistaService)(Number(req.params.id)); // Deleta um jornalista
        return res.status(204).send(); // Retorna uma resposta vazia
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.deleteJornalista = deleteJornalista;
