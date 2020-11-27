SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";


DROP TABLE IF EXISTS tblconsumo;
DROP TABLE IF EXISTS tblusuario;
DROP TABLE IF EXISTS tblactividad;

CREATE TABLE IF NOT EXISTS tblactividad (
  codigo int(5) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  PRIMARY KEY (codigo)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

INSERT INTO tblactividad (codigo, nombre) VALUES
(1, 'aseo casa'),
(2, 'bañarse'),
(3, 'lavar baño'),
(4, 'lavar platos');

CREATE TABLE IF NOT EXISTS tblusuario (
  cedula varchar(10) NOT NULL,
  nombre varchar(40) NOT NULL,
  apellido varchar(20) NOT NULL,
  contraseña varchar(40) NOT NULL,
  PRIMARY KEY (cedula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO tblusuario (cedula, nombre, apellido, contraseña) VALUES
('11', 'Nancy', 'Correa', '125452658'),
('22', 'Nancy', 'Machado', '8459641'),
('33', 'Elena', 'Jimenez', '4582166542'),
('44', 'Jorge', 'Gonzalez', '452163556');



CREATE TABLE IF NOT EXISTS tblconsumo (
  consecutivo int(30) NOT NULL AUTO_INCREMENT,
  cedusuario varchar(10) NOT NULL,
  actividad int(5) NOT NULL,
  tiempo_horas float NOT NULL,
  cantidad_mt_cubicos float NOT NULL,
  consumo_dias varchar(40) NOT NULL,

  fecharegistro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (consecutivo),
   FOREIGN KEY (actividad) REFERENCES tblactividad (codigo),
   FOREIGN KEY (cedusuario) REFERENCES tblusuario (cedula)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;






