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
exports.findPostagemWithAuthorById = exports.deletePostagem = exports.updatePostagem = exports.findPostagemById = exports.findAllPostagens = exports.createPostagem = void 0;
const postegens_entities_1 = __importDefault(require("../entities/postegens.entities")); // Importa o modelo de postagens
const createPostagem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.create({ data }); // Cria uma nova postagem
});
exports.createPostagem = createPostagem;
const findAllPostagens = () => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.findMany(); // Busca todas as postagens
});
exports.findAllPostagens = findAllPostagens;
const findPostagemById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.findFirst({ where: { ID } }); // Busca uma postagem pelo id
});
exports.findPostagemById = findPostagemById;
const updatePostagem = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.update({ where: { ID }, data }); // Atualiza uma postagem
});
exports.updatePostagem = updatePostagem;
const deletePostagem = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.delete({ where: { ID } }); // Deleta uma postagem
});
exports.deletePostagem = deletePostagem;
const findPostagemWithAuthorById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return postegens_entities_1.default.findFirst({
        where: { ID },
        include: { jornalista: true } // Inclui o jornalista que escreveu a postagem
    }); // Busca uma postagem pelo id e inclui o jornalista
});
exports.findPostagemWithAuthorById = findPostagemWithAuthorById;
