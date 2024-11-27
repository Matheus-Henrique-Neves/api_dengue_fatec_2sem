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
exports.authenticateUser = exports.deleteUser = exports.updateUser = exports.findAllUsers = exports.createUser = void 0;
const user_services_1 = require("../services/user.services"); // Importa os métodos do serviço
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_services_1.createUserService)(req.body); // Cria um novo usuário
        return res.status(201).json(user); // Retorna o usuário criado
    }
    catch (error) {
        if (error.message === 'Usuário já existe')
            return res.status(400).json({ "message": "usuario ja existe" }); // Retorna um erro  
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.createUser = createUser;
const findAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_services_1.findAllUsersService)(); // Busca todos os usuários
    return res.status(200).json(users); // Retorna os usuários
});
exports.findAllUsers = findAllUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_services_1.updateUserService)(Number(req.params.id), req.body); // Atualiza um usuário
        return res.status(200).json(user); // Retorna o usuário atualizado
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, user_services_1.deleteUserService)(Number(req.params.id)); // Deleta um usuário
        return res.status(204).send(); // Retorna uma resposta vazia
    }
    catch (error) {
        return res.status(400).json({ message: error }); // Retorna um erro
    }
});
exports.deleteUser = deleteUser;
const authenticateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Email, Senha } = req.body;
        if (!Email || !Senha) {
            return res.status(400).json({ message: 'E-mail e senha são obrigatórios' });
        }
        const token = yield (0, user_services_1.authenticateUserService)(Email, Senha);
        return res.status(200).json({ token });
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
});
exports.authenticateUser = authenticateUser;
