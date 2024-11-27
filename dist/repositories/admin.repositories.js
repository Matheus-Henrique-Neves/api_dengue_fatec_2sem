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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAdminById = exports.deleteAdmin = exports.updateAdmin = exports.findAdminByEmail = exports.findAllAdmins = exports.createAdmin = void 0;
const admin_entities_1 = __importDefault(require("../entities/admin.entities")); // Importa o modelo de admin
const createAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.create({ data }); // Cria um novo admin
});
exports.createAdmin = createAdmin;
const findAllAdmins = () => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.findMany(); // Busca todos os admins
});
exports.findAllAdmins = findAllAdmins;
const findAdminByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.findFirst({ where: { Email } }); // Busca um admin pelo e-mail
});
exports.findAdminByEmail = findAdminByEmail;
const updateAdmin = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.update({ where: { ID }, data }); // Atualiza um admin
});
exports.updateAdmin = updateAdmin;
const deleteAdmin = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.delete({ where: { ID } }); // Deleta um admin
});
exports.deleteAdmin = deleteAdmin;
const findAdminById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return admin_entities_1.default.findFirst({ where: { ID } }); // Busca um admin pelo id
});
exports.findAdminById = findAdminById;
