"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.authenticateUserService = exports.deleteUserService = exports.updateUserService = exports.findAllUsersService = exports.createUserService = void 0;
const user_repositories_1 = require("../repositories/user.repositories"); // Importa os métodos do repositório
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repositories_1.findUserByEmail)(data.Email); // Busca um usuário pelo e-mail
    if (user) {
        throw new Error('Usuário já existe'); // Se o usuário já existir, lança um erro
    }
    const Senha = yield bcrypt_1.default.hash(data.Senha, 10); // Criptografa a senha e escolhe o número de rounds, quanto maior o número, mais seguro é o hash (mas também mais lento)
    return (0, user_repositories_1.createUser)(Object.assign(Object.assign({}, data), { Senha })); // Aqui devemos passar a senha criptografada, estamos usando os 3 pontos para copiar todas as propriedades de data e adicionar a senha criptografada (é uma forma de fazer um merge de objetos, isso leva o nome de spread operator)
});
exports.createUserService = createUserService;
const findAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return (0, user_repositories_1.findAllUsers)(); // Busca todos os usuários
});
exports.findAllUsersService = findAllUsersService;
const updateUserService = (ID, Data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repositories_1.findUserById)(ID); // Busca um usuário pelo id
    if (!user) {
        throw new Error('Usuário não encontrado'); // Se o usuário não existir, lança um erro
    }
    return (0, user_repositories_1.updateUser)(ID, { Nome: Data.Nome, Email: Data.Email, Senha: Data.Senha }); // Atualiza um usuário
});
exports.updateUserService = updateUserService;
const deleteUserService = (ID) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repositories_1.findUserById)(ID); // Busca um usuário pelo id
    if (!user) {
        throw new Error('Usuário não encontrado'); // Se o usuário não existir, lança um erro
    }
    return (0, user_repositories_1.deleteUser)(ID); // Deleta um usuário
});
exports.deleteUserService = deleteUserService;
const jose = __importStar(require("jose"));
const authenticateUserService = (Email, Senha) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_repositories_1.findUserByEmail)(Email); // Busca um usuário pelo e-mail
    if (!user) {
        throw new Error('Usuário não encontrado'); // Se o usuário não existir, lança um erro
    }
    const isValid = yield bcrypt_1.default.compare(Senha, user.Senha); // Compara a senha criptografada com a senha informada
    if (!isValid) {
        throw new Error('Senha inválida'); // Se a senha for inválida, lança um erro
    }
    const payload = { ID: user.ID, Email: user.Email }; // Cria um payload com o id e o e-mail do usuário
    const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Pega a chave secreta do JWT do arquivo .env - essa chave é usada para assinar o token e não deve ser exposta
    const alg = 'HS256'; // Define o algoritmo de criptografia
    const token = yield new jose.SignJWT(payload)
        .setProtectedHeader({ alg })
        .setIssuedAt() // Define a data de emissão do token
        .setIssuer('http://localhost:3000') // Define o emissor do token
        .setSubject('users') // Define o assunto do token
        .setExpirationTime('1h') // Define o tempo de expiração do token
        .sign(secret); // Assina o token com a chave secreta
    return token; // Retorna o token
});
exports.authenticateUserService = authenticateUserService;
