import { Router } from 'express' // Importa o Router do Express
import { createPostagem, deletePostagem, findAllPostagens, findPostagemById, updatePostagem, findPostagemWithAuthorById } from '../controllers/postagem.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/user.middleware' // Importa o middleware de validação
import { CreatePostagemDto } from '../dtos/postagem.dto' // Importa o DTO de postagens

const router = Router() // Cria uma instância do Router

router.post('/', validate(CreatePostagemDto), createPostagem) // Define a rota para criar uma postagem
router.get('/', findAllPostagens) // Define a rota para buscar todas as postagens
router.get('/:id', findPostagemById) // Define a rota para buscar uma postagem pelo id
router.patch('/:id', validate(CreatePostagemDto), updatePostagem) // Define a rota para atualizar uma postagem
router.delete('/:id', deletePostagem) // Define a rota para deletar uma postagem
router.get('/:id/author', findPostagemWithAuthorById) // Define a rota para buscar uma postagem pelo id e incluir o jornalista

export default router // Exporta o router