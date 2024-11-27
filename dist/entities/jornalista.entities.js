"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client"); // Importa o PrismaClient
const prisma = new client_1.PrismaClient(); // Cria uma instância do PrismaClient
exports.default = prisma.jornalista; // Exporta o modelo de usuário
