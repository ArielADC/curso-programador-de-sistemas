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
) ;
INSERT INTO alunos (id, nome ,curos, idade, cpf, genero, telefone , email)
VALUES 
(1,'fulano','programador de sistemas',34,'012.345.678.90','masculino','(62)98765-4321','fulaniho.maverick@example.com' ),

(2, 'Carlos Oliveira', '1A', 16, '234.567.890-11', 'Masculino', '(21) 91234-5678', 'carlos.oliveira@email.com'),
(3, 'Maria Santos', '2B', 14, '345.678.901-22', 'Feminino', '(31) 92345-6789', 'maria.santos@email.com'),
(4, 'João Pereira', '2B', 15, '456.789.012-33', 'Masculino', '(41) 93456-7890', 'joao.pereira@email.com'),
(5, 'Lucia Almeida', '3C', 17, '567.890.123-44', 'Feminino', '(51) 94567-8901', 'lucia.almeida@email.com'),
(6, 'Pedro Costa', '3C', 18, '678.901.234-55', 'Masculino', '(61) 95678-9012', 'pedro.costa@email.com'),
(7, 'Fernanda Lima', '4D', 16, '789.012.345-66', 'Feminino', '(71) 96789-0123', 'fernanda.lima@email.com'),
(8, 'Rafael Martins', '4D', 17, '890.123.456-77', 'Masculino', '(81) 97890-1234', 'rafael.martins@email.com'),
(9, 'Juliana Rodrigues', '5E', 15, '901.234.567-88', 'Feminino', '(91) 98901-2345', 'juliana.rodrigues@email.com'),
(10, 'Bruno Souza', '5E', 16, '012.345.678-99', 'Masculino', '(01) 99012-3456', 'bruno.souza@email.com'),
(11, 'Ana Silva', '1A', 15, '123.456.789-00', 'Feminino', '(11) 98765-4321', 'ana.silva@email.com');

UPDATE alunos SET idade = 40, email="oldmaverick@example.com"
 WHERE id =1;

UPDATE alunos SET id;

SELECT * FROM alunos;

SELECT alunos.nome, idade , cursos.nome
FROM cursos JOIN alunos
ON 
cursos.id = alunos.cursos_id
WHERE
cursos.id;

SELECT cursos.nome, turnos.turnoss
FROM cursos JOIN turnoss
ON
turnos.id = cursos.turnos_id;