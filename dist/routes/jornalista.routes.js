"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa o Router do Express
const jornalista_controller_1 = require("../controllers/jornalista.controller"); // Importa os métodos do controlador
const user_middleware_1 = require("../middlewares/user.middleware"); // Importa o middleware de validação
const user_dto_1 = require("../dtos/user.dto"); // Importa o DTO de usuário (pode ser reutilizado para jornalista)
const router = (0, express_1.Router)(); // Cria uma instância do Router
router.post('/', (0, user_middleware_1.validate)(user_dto_1.CreateUserDto), jornalista_controller_1.createJornalista); // Define a rota para criar um jornalista
router.get('/', jornalista_controller_1.findAllJornalistas); // Define a rota para buscar todos os jornalistas
router.patch('/:id', (0, user_middleware_1.validate)(user_dto_1.CreateUserDto), jornalista_controller_1.updateJornalista); // Define a rota para atualizar um jornalista
router.delete('/:id', jornalista_controller_1.deleteJornalista); // Define a rota para deletar um jornalista
exports.default = router; // Exporta o router
