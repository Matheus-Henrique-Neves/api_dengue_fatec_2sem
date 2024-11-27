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
exports.findUserById = exports.deleteUser = exports.updateUser = exports.findUserByEmail = exports.findAllUsers = exports.createUser = void 0;
const user_entities_1 = __importDefault(require("../entities/user.entities")); // Importa o modelo de usuário
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_entities_1.default.create({ data }); // Cria um novo usuário
    return Object.assign(Object.assign({}, newUser), { Senha: undefined }); // Remove a senha do usuário antes de retornar
});
exports.createUser = createUser;
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return user_entities_1.default.findMany(); // Busca todos os usuários
});
exports.findAllUsers = findAllUsers;
const findUserByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
    return user_entities_1.default.findFirst({ where: { Email } }); // Busca um usuário pelo e-mail
});
exports.findUserByEmail = findUserByEmail;
const updateUser = (ID, data) => __awaiter(void 0, void 0, void 0, function* () {
    return user_entities_1.default.update({ where: { ID }, data }); // Atualiza um usuário
});
exports.updateUser = updateUser;
const deleteUser = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return user_entities_1.default.delete({ where: { ID } }); // Deleta um usuário
});
exports.deleteUser = deleteUser;
const findUserById = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    return user_entities_1.default.findFirst({ where: { ID } }); // Busca um usuário pelo id
});
exports.findUserById = findUserById;
