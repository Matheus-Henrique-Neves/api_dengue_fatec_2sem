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
exports.deleteAdmin = exports.updateAdmin = exports.findAllAdmins = exports.createAdmin = void 0;
const admin_services_1 = require("../services/admin.services"); // Importa os métodos do serviço
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield (0, admin_services_1.createAdminService)(req.body); // Cria um novo admin
        return res.status(201).json(admin); // Retorna o admin criado
    }
    catch (error) {
        if (error.message === 'Usuário já existe')
            return res.status(400).json({ "message": "usuario ja existe" }); // Retorna um erro  
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.createAdmin = createAdmin;
const findAllAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield (0, admin_services_1.findAllAdminsService)(); // Busca todos os admins
    return res.status(200).json(admins); // Retorna os admins
});
exports.findAllAdmins = findAllAdmins;
const updateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield (0, admin_services_1.updateAdminService)(Number(req.params.id), req.body); // Atualiza um admin
        return res.status(200).json(admin); // Retorna o admin atualizado
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.updateAdmin = updateAdmin;
const deleteAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, admin_services_1.deleteAdminService)(Number(req.params.id)); // Deleta um admin
        return res.status(200).json({ mensagem: "admin deletado" }); // Retorna uma resposta vazia
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.deleteAdmin = deleteAdmin;
