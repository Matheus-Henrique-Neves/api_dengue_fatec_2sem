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
exports.findJornalistaById = exports.deleteJornalista = exports.updateJornalista = exports.findJornalistaByEmail = exports.findAllJornalistas = exports.createJornalista = void 0;
const jornalista_entities_1 = __importDefault(require("../entities/jornalista.entities")); // Importa o modelo de jornalista
const createJornalista = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.create({ data }); // Cria um novo jornalista
});
exports.createJornalista = createJornalista;
const findAllJornalistas = () => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.findMany(); // Busca todos os jornalistas
});
exports.findAllJornalistas = findAllJornalistas;
const findJornalistaByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.findFirst({ where: { Email } }); // Busca um jornalista pelo e-mail
});
exports.findJornalistaByEmail = findJornalistaByEmail;
const updateJornalista = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.update({ where: { ID }, data }); // Atualiza um jornalista
});
exports.updateJornalista = updateJornalista;
const deleteJornalista = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.delete({ where: { ID } }); // Deleta um jornalista
});
exports.deleteJornalista = deleteJornalista;
const findJornalistaById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return jornalista_entities_1.default.findFirst({ where: { ID } }); // Busca um jornalista pelo id
});
exports.findJornalistaById = findJornalistaById;
