"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa o Router do Express
const admin_controller_1 = require("../controllers/admin.controller"); // Importa os métodos do controlador
const user_middleware_1 = require("../middlewares/user.middleware"); // Importa o middleware de validação
const admin_dto_1 = require("../dtos/admin.dto"); // Importa o DTO de admin
const router = (0, express_1.Router)(); // Cria uma instância do Router
//Todas as rotas foram verificadas e estão funcionando corretamente
//Corigidas por: Matheus Henrique
router.post('/', (0, user_middleware_1.validate)(admin_dto_1.CreateAdminDto), admin_controller_1.createAdmin); // Define a rota para criar um admin
router.get('/', admin_controller_1.findAllAdmins); // Define a rota para buscar todos os admins
router.patch('/:id', (0, user_middleware_1.validate)(admin_dto_1.UpdateAdminDto), admin_controller_1.updateAdmin); // Define a rota para atualizar um admin
router.delete('/:id', admin_controller_1.deleteAdmin); // Define a rota para deletar um admin
exports.default = router; // Exporta o router
