import Postagem from '../entities/postagens.entities' // Importa o modelo de postagens

export const createPostagem = async (data: { Titulo: string, Texto: string, Img: string, Visibilidade: boolean, fk_Usuario_ID: number, Data: Date }) => {
  return Postagem.create({ data }) // Cria uma nova postagem
}

export const findAllPostagens = async () => {
  return Postagem.findMany() // Busca todas as postagens
}

export const findPostagemById = async (ID: number) => {
  return Postagem.findFirst({ where: { ID } }) // Busca uma postagem pelo id
}

export const updatePostagem = async (ID: number, data: { Titulo: string, Texto: string, Img: string, Visibilidade: boolean, fk_Usuario_ID: number, Data: Date }) => {
  return Postagem.update({ where: { ID }, data }) // Atualiza uma postagem
}

export const deletePostagem = async (ID: number) => {
  return Postagem.delete({ where: { ID } }) // Deleta uma postagem
}