type Libro<T> = {
  id: T;
  titulo: T;
  autor: T;
  publicacion: T;
  genero: T;
  sipnosis: T;
  paginas: number | undefined;
};

type Usuario<T> = {
  id: T;
  nombre: T;
  apellido: T;
  email: T;
  edad: T;
  residencia: T;
  fotoPerfil: T;
  redes: T[];
};

type Amigo<T> = {
  id: T;
};

type Reseña<T> = {
  id: T;
  idUsuario: T;
  idLibro: T;
  texto: T;
  fecha: Date | undefined;
  likes: number;
};

type Comentario<T> = {
  id: T;
  idUsuario: T;
  idReseña: T;
  text: T;
  likes: number;
  dislikes: number;
};

export type { Libro, Usuario, Amigo, Reseña, Comentario };
