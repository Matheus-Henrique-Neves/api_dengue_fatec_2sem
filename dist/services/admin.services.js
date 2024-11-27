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
exports.deleteAdminService = exports.updateAdminService = exports.findAllAdminsService = exports.createAdminService = void 0;
const admin_repositories_1 = require("../repositories/admin.repositories"); // Importa os métodos do repositório
const createAdminService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield (0, admin_repositories_1.findAdminByEmail)(data.Email); // Busca um admin pelo e-mail
    if (admin) {
        throw new Error('Admin já existe'); // Se o admin já existir, lança um erro
    }
    return (0, admin_repositories_1.createAdmin)(data); // Cria um novo admin
});
exports.createAdminService = createAdminService;
const findAllAdminsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, admin_repositories_1.findAllAdmins)(); // Busca todos os admins
});
exports.findAllAdminsService = findAllAdminsService;
const updateAdminService = (ID, Data) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield (0, admin_repositories_1.findAdminById)(ID); // Busca um admin pelo id
    if (!admin) {
        throw new Error('Admin não encontrado'); // Se o admin não existir, lança um erro
    }
    return (0, admin_repositories_1.updateAdmin)(ID, Data); // Atualiza um admin
});
exports.updateAdminService = updateAdminService;
const deleteAdminService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield (0, admin_repositories_1.findAdminById)(ID); // Busca um admin pelo id
    if (!admin) {
        throw new Error('Admin não encontrado'); // Se o admin não existir, lança um erro
    }
    return (0, admin_repositories_1.deleteAdmin)(ID); // Deleta um admin
});
exports.deleteAdminService = deleteAdminService;
