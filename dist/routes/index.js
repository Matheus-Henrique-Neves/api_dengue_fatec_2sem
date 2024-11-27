"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa o Router do Express
const user_routes_1 = __importDefault(require("./user.routes")); // Importa as rotas de usuário
const jornalista_routes_1 = __importDefault(require("./jornalista.routes")); // Importa as rotas de jornalista
const admin_routes_1 = __importDefault(require("./admin.routes")); // Importa as rotas de admin
const postagem_routes_1 = __importDefault(require("./postagem.routes")); // Importa as rotas de postagens
const router = (0, express_1.Router)(); // Cria uma instância do Router
router.use('/users', user_routes_1.default); // Define o prefixo para as rotas de usuário
router.use('/jornalistas', jornalista_routes_1.default); // Define o prefixo para as rotas de jornalista
router.use('/admins', admin_routes_1.default); // Define o prefixo para as rotas de admin
router.use('/postagens', postagem_routes_1.default); // Define o prefixo para as rotas de postagens
exports.default = router; // Exporta o router
