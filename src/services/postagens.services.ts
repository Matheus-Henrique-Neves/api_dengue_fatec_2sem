import { createPostagem, deletePostagem, findAllPostagens, findPostagemById, updatePostagem } from '../repositories/postagens.repositories' // Importa os métodos do repositório

export const createPostagemService = async (data: { Titulo: string, Texto: string, Img: string, Visibilidade: boolean, fk_Usuario_ID: number, Data: Date }) => {
  return createPostagem(data) // Cria uma nova postagem
}

export const findAllPostagensService = async () => {
  return findAllPostagens() // Busca todas as postagens
}

export const findPostagemByIdService = async (ID: number) => {
  const postagem = await findPostagemById(ID) // Busca uma postagem pelo id

  if (!postagem) {
    throw new Error('Postagem não encontrada') // Se a postagem não existir, lança um erro
  }

  return postagem
}

export const updatePostagemService = async (ID: number, data: { Titulo: string, Texto: string, Img: string, Visibilidade: boolean, fk_Usuario_ID: number, Data: Date }) => {
  const postagem = await findPostagemById(ID) // Busca uma postagem pelo id

  if (!postagem) {
    throw new Error('Postagem não encontrada') // Se a postagem não existir, lança um erro
  }

  return updatePostagem(ID, data) // Atualiza uma postagem
}

export const deletePostagemService = async (ID: number) => {
  const postagem = await findPostagemById(ID) // Busca uma postagem pelo id

  if (!postagem) {
    throw new Error('Postagem não encontrada') // Se a postagem não existir, lança um erro
  }

  return deletePostagem(ID) // Deleta uma postagem
}