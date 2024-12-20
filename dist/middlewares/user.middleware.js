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
exports.validate = void 0;
const class_transformer_1 = require("class-transformer"); // Importa a função plainToInstance
const class_validator_1 = require("class-validator"); // Importa a função validate do class-validator
const validate = (dto) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const data = (0, class_transformer_1.plainToInstance)(dto, req.body); // Converte os dados para a classe
        const errors = yield (0, class_validator_1.validate)(data); // Valida os dados
        if (errors.length > 0) {
            return res.status(400).json({ message: 'Dados inválidos', errors }); // Retorna um erro
        }
        req.body = data; // Define os dados validados
        next(); // Chama o próximo middleware
    });
};
exports.validate = validate;
