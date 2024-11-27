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
exports.findPostagemWithAuthorById = exports.deletePostagem = exports.updatePostagem = exports.findPostagemById = exports.findAllPostagens = exports.createPostagem = void 0;
const postagem_services_1 = require("../services/postagem.services"); // Importa os métodos do serviço
const createPostagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postagem = yield (0, postagem_services_1.createPostagemService)(req.body); // Cria uma nova postagem
        return res.status(201).json(postagem); // Retorna a postagem criada
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.createPostagem = createPostagem;
const findAllPostagens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postagens = yield (0, postagem_services_1.findAllPostagensService)(); // Busca todas as postagens
    return res.status(200).json(postagens); // Retorna as postagens
});
exports.findAllPostagens = findAllPostagens;
const findPostagemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postagem = yield (0, postagem_services_1.findPostagemByIdService)(Number(req.params.id)); // Busca uma postagem pelo id
        return res.status(200).json(postagem); // Retorna a postagem
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.findPostagemById = findPostagemById;
const updatePostagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postagem = yield (0, postagem_services_1.updatePostagemService)(Number(req.params.id), req.body); // Atualiza uma postagem
        return res.status(200).json(postagem); // Retorna a postagem atualizada
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.updatePostagem = updatePostagem;
const deletePostagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, postagem_services_1.deletePostagemService)(Number(req.params.id)); // Deleta uma postagem
        return res.status(204).send(); // Retorna uma resposta vazia
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.deletePostagem = deletePostagem;
const findPostagemWithAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postagem = yield (0, postagem_services_1.findPostagemWithAuthorByIdService)(Number(req.params.id)); // Busca uma postagem pelo id e inclui o jornalista
        return res.status(200).json(postagem); // Retorna a postagem com o jornalista
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.findPostagemWithAuthorById = findPostagemWithAuthorById;
