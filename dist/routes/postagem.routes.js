"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa o Router do Express
const postagem_controller_1 = require("../controllers/postagem.controller"); // Importa os métodos do controlador
const user_middleware_1 = require("../middlewares/user.middleware"); // Importa o middleware de validação
const postagem_dto_1 = require("../dtos/postagem.dto"); // Importa o DTO de postagens
const router = (0, express_1.Router)(); // Cria uma instância do Router
router.post('/', (0, user_middleware_1.validate)(postagem_dto_1.CreatePostagemDto), postagem_controller_1.createPostagem); // Define a rota para criar uma postagem
router.get('/', postagem_controller_1.findAllPostagens); // Define a rota para buscar todas as postagens
router.get('/:id', postagem_controller_1.findPostagemById); // Define a rota para buscar uma postagem pelo id
router.patch('/:id', (0, user_middleware_1.validate)(postagem_dto_1.CreatePostagemDto), postagem_controller_1.updatePostagem); // Define a rota para atualizar uma postagem
router.delete('/:id', postagem_controller_1.deletePostagem); // Define a rota para deletar uma postagem
router.get('/:id/author', postagem_controller_1.findPostagemWithAuthorById); // Define a rota para buscar uma postagem pelo id e incluir o jornalista
exports.default = router; // Exporta o router
