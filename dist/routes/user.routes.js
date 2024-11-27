"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa o Router do Express
const user_controller_1 = require("../controllers/user.controller"); // Importa os métodos do controlador
const user_middleware_1 = require("../middlewares/user.middleware"); // Importa o middleware de validação
const user_dto_1 = require("../dtos/user.dto"); // Importa o DTO de usuário
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)(); // Cria uma instância do Router
//Todas as rotas foram verificadas e estão funcionando corretamente
//Corigidas por: Matheus Henrique
router.post('/', (0, user_middleware_1.validate)(user_dto_1.CreateUserDto), user_controller_1.createUser); // Define a rota para criar um usuário
router.get('/', auth_middleware_1.auth, user_controller_1.findAllUsers); // Define a rota para buscar todos os usuários
router.patch('/:id', auth_middleware_1.auth, (0, user_middleware_1.validate)(user_dto_1.UpdateUserDto), user_controller_1.updateUser); // Define a rota para atualizar um usuário
router.delete('/:id', auth_middleware_1.auth, user_controller_1.deleteUser); // Define a rota para deletar um usuário
router.post('/authenticate', user_controller_1.authenticateUser); // Define a rota para autenticar um usuário
exports.default = router; // Exporta o router
