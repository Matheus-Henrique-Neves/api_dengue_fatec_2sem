import { Router } from 'express' // Importa o Router do Express
import { createJornalista, deleteJornalista, findAllJornalistas, updateJornalista } from '../controllers/jornalista.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/user.middleware' // Importa o middleware de validação
import { CreateUserDto } from '../dtos/user.dto' // Importa o DTO de usuário (pode ser reutilizado para jornalista)

const router = Router() // Cria uma instância do Router

router.post('/', validate(CreateUserDto), createJornalista) // Define a rota para criar um jornalista
router.get('/', findAllJornalistas) // Define a rota para buscar todos os jornalistas
router.patch('/:id', validate(CreateUserDto), updateJornalista) // Define a rota para atualizar um jornalista
router.delete('/:id', deleteJornalista) // Define a rota para deletar um jornalista

export default router // Exporta o router