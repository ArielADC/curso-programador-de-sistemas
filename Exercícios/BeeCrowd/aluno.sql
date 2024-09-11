DROP TABLE IF EXISTS turnos;
CREATE TABLE turnos (
    id INTEGER PRIMARY KEY,
    periodo VARCHAR(31)
);
INSERT INTO turnos (id, periodo) VALUES
(1, "Matutino"),
(2,"Vespertino"),
(3,"noturno");

DROP TABLE IF EXISTS cursos;
CREATE TABLE cursos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR (255),
    id_turnos VARCHAR (31)
);

INSERT INTO cursos (id, nome, id_turnos) VALUES
(1, 'Matemática',1 ),
(2, 'Física Geral',3 ),
(3, 'Química Orgânica',2 );

DROP TABLE IF EXISTS generos;
CREATE TABLE generos (
    id INTEGER PRIMARY KEY,
    descricao VARCHAR (255)
);

INSERT INTO generos (id, descricao) VALUES
 (1,'Masculino'),
 (2,'Feminino');


DROP TABLE IF EXISTS alunos;

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR (255),
    id_cursos VARCHAR (255),
    idade INTEGER,
    cpf CHAR (14),
    id_generos VARCHAR (63),
    telefone VARCHAR (18),
    email VARCHAR (255)
);

INSERT INTO alunos (id, nome ,id_cursos, idade, cpf, id_generos, telefone , email)
VALUES 
(1,'fulano',2,34,'012.345.678.90',1,'(62)98765-4321','fulaniho.maverick@example.com' ),
(2, 'Carlos Oliveira', 1, 16, '234.567.890-11', 1, '(21) 91234-5678', 'carlos.oliveira@email.com'),
(3, 'Maria Santos', 3, 14, '345.678.901-22', 2, '(31) 92345-6789', 'maria.santos@email.com'),
(4, 'João Pereira', 2, 15, '456.789.012-33', 1, '(41) 93456-7890', 'joao.pereira@email.com'),
(5, 'Lucia Almeida', 1, 17, '567.890.123-44', 2, '(51) 94567-8901', 'lucia.almeida@email.com'),
(6, 'Pedro Costa', 2, 18, '678.901.234-55', 1, '(61) 95678-9012', 'pedro.costa@email.com'),
(7, 'Fernanda Lima', 1, 16, '789.012.345-66', 2, '(71) 96789-0123', 'fernanda.lima@email.com'),
(8, 'Rafael Martins', 3, 17, '890.123.456-77', 1, '(81) 97890-1234', 'rafael.martins@email.com'),
(9, 'Juliana Rodrigues', 2, 15, '901.234.567-88', 2, '(91) 98901-2345', 'juliana.rodrigues@email.com'),
(10, 'Bruno Souza', 2, 16, '012.345.678-99', 1, '(01) 99012-3456', 'bruno.souza@email.com'),
(11, 'Ana Silva', 3, 15, '123.456.789-00', 2, '(11) 98765-4321', 'ana.silva@email.com');

UPDATE alunos SET idade = 40, email="oldmaverick@example.com"
 WHERE id =1;

SELECT * FROM alunos;

