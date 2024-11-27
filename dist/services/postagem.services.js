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
exports.findPostagemWithAuthorByIdService = exports.deletePostagemService = exports.updatePostagemService = exports.findPostagemByIdService = exports.findAllPostagensService = exports.createPostagemService = void 0;
const postagem_repositories_1 = require("../repositories/postagem.repositories"); // Importa os métodos do repositório
const createPostagemService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, postagem_repositories_1.createPostagem)(data); // Cria uma nova postagem
});
exports.createPostagemService = createPostagemService;
const findAllPostagensService = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, postagem_repositories_1.findAllPostagens)(); // Busca todas as postagens
});
exports.findAllPostagensService = findAllPostagensService;
const findPostagemByIdService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, postagem_repositories_1.findPostagemById)(ID); // Busca uma postagem pelo id
});
exports.findPostagemByIdService = findPostagemByIdService;
const updatePostagemService = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    const postagem = yield (0, postagem_repositories_1.findPostagemById)(ID); // Busca uma postagem pelo id
    if (!postagem) {
        throw new Error('Postagem não encontrada'); // Se a postagem não existir, lança um erro
    }
    return (0, postagem_repositories_1.updatePostagem)(ID, data); // Atualiza uma postagem
});
exports.updatePostagemService = updatePostagemService;
const deletePostagemService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const postagem = yield (0, postagem_repositories_1.findPostagemById)(ID); // Busca uma postagem pelo id
    if (!postagem) {
        throw new Error('Postagem não encontrada'); // Se a postagem não existir, lança um erro
    }
    return (0, postagem_repositories_1.deletePostagem)(ID); // Deleta uma postagem
});
exports.deletePostagemService = deletePostagemService;
const findPostagemWithAuthorByIdService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const postagem = yield (0, postagem_repositories_1.findPostagemWithAuthorById)(ID); // Busca uma postagem pelo id e inclui o jornalista
    if (!postagem) {
        throw new Error('Postagem não encontrada'); // Se a postagem não existir, lança um erro
    }
    return postagem; // Retorna a postagem com o jornalista
});
exports.findPostagemWithAuthorByIdService = findPostagemWithAuthorByIdService;
