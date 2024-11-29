import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsDate } from 'class-validator' // Importa os decoradores de validação

export class CreatePostagemDto {
  @IsString()
  @IsNotEmpty()
  Titulo!: string

  @IsString()
  @IsNotEmpty()
  Texto!: string

  @IsNotEmpty()
  Img!: string

  @IsNotEmpty()
  Data!: Date

  @IsOptional()
  @IsBoolean()
  Visibilidade?: boolean

  @IsOptional()
  fk_Usuario_ID?: number
}

export class UpdatePostagemDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  Titulo?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  Texto?: string

  @IsOptional()
  @IsNotEmpty()
  Img?: string
  
  @IsOptional()
  @IsNotEmpty()
  Data?: Date

  @IsOptional()
  @IsBoolean()
  Visibilidade?: boolean

  @IsOptional()
  fk_Usuario_ID?: number
}