DROP TABLE EXISTS turno;
CREATE TABLE turno (
    id INTEGER PRIMARY KEY,
    turno VARCHAR(31)
)
INSERT INTO turno (id, turno) VALUES
(1, "Matutino"),
(2,"Vespertino"),
(3,"noturno");

DROP TABLE EXISTS curso;
CREATE TABLE curso (
    id INTEGER PRIMARY KEY,
    nome VARCHAR (255),
    turma VARCHAR (31)
);

INSERT INTO curso (id, nome, turma) VALUES
(1, 'Matemática I',1 ),
(2, 'Física Geral',3 ),
(3, 'Química Orgânica',2 );



DROP TABLE EXISTS aluno;

CREATE TABLE aluno (
    id INTEGER PRIMARY KEY,
    nome VARCHAR (255),
    curso VARCHAR (255),
    idade INTEGER,
    cpf CHAR (14),
    genero VARCHAR (63),
    telefone VARCHAR (18),
    email VARCHAR (255)
) ;
INSERT INTO aluno (id, nome, idade, cpf, genero, telefone , email)
VALUES 
(1,"fulano","programador de sistemas",34,"012.345.678.90","masculino","(62)98765-4321","fulaniho.maverick@example.com" )

(2, 'Carlos Oliveira', '1A', 16, '234.567.890-11', 'Masculino', '(21) 91234-5678', 'carlos.oliveira@email.com'),
(3, 'Maria Santos', '2B', 14, '345.678.901-22', 'Feminino', '(31) 92345-6789', 'maria.santos@email.com'),
(4, 'João Pereira', '2B', 15, '456.789.012-33', 'Masculino', '(41) 93456-7890', 'joao.pereira@email.com'),
(5, 'Lucia Almeida', '3C', 17, '567.890.123-44', 'Feminino', '(51) 94567-8901', 'lucia.almeida@email.com'),
(6, 'Pedro Costa', '3C', 18, '678.901.234-55', 'Masculino', '(61) 95678-9012', 'pedro.costa@email.com'),
(7, 'Fernanda Lima', '4D', 16, '789.012.345-66', 'Feminino', '(71) 96789-0123', 'fernanda.lima@email.com'),
(8, 'Rafael Martins', '4D', 17, '890.123.456-77', 'Masculino', '(81) 97890-1234', 'rafael.martins@email.com'),
(9, 'Juliana Rodrigues', '5E', 15, '901.234.567-88', 'Feminino', '(91) 98901-2345', 'juliana.rodrigues@email.com'),
(10, 'Bruno Souza', '5E', 16, '012.345.678-99', 'Masculino', '(01) 99012-3456', 'bruno.souza@email.com');
(11, 'Ana Silva', '1A', 15, '123.456.789-00', 'Feminino', '(11) 98765-4321', 'ana.silva@email.com'),

UPDATE aluno SET idade = 40, email="oldmaverick@example.com"
 WHERE id =1;

UPDATE aluno SET id

SELECT * FROM aluno;

SELECT aluno.nome, idade , curso.nome
FROM curso JOIN aluno
ON 
curso.id = aluno.curso_id
WHERE
curso.id;

SELECT curso_id, curso.nome, turno.turnos
FROM curso JOIN turnos