Dialect
-------

Traduz ações da API para o SGBD alvo (MySQL, MariaDB, Postgre, SQLite).

### Atributos

- [_readonly_] typeof Schema: [SchemaWithDialect](#schemawithdialect)
  - contém uma classe chamada _DialectSchema_ que estende de _Schema_, porém com o método construtor que cria um _Schema_ já com o atributo _Dialect_ já definido como _this_;  

### Métodos

- [_public_] createDatabase([EntityManager](#entitymanager))
  - cria uma nova tabela no SGBD com base nas informações contidas em um EntityManager
- [_public_] storeEntity([Entity](#entity))
  - executa _insert_ ou _update_ dos dados da entidade no SGBD
- [_public_] destroyEntity([Entity](#entity))
  - exclui dados de uma entidade no SGBD






Schema
------

Responsavel por:
- Criar/Atualiza/conectar no esquema relacional do SGBD
- Transformar EntityManagers em tabelas no SGBD

### Atributos

- [_public_] EntityManager: [EntityManagerWithSchema](#entitymanagerwithschema)

### Métodos

- construtor([Dialect](#dialect))
- [_public_|_static_] build([Dialect](#dialect)): [SchemaWithDialect](#schemawithdialect)
  - Factory function que constroi uma classe do tipo [SchemaWithDialect](#schemawithdialect)






EntityManager
-------------

Responsavel por:
- Criar moldes para criação de tabelas no banco de dados
- Criar entidades e relacionamento com outras entidades
- Recuperar instancias/instanciar entidades recuperadas do SGBD

### Atributos

- [_public_] Entity: [EntityManagerEntity](#entitymanagerentity)

### Métodos

- construtor([Schema](#schema))
- [_public_|_static_] build([Schema](#schema)): [EntityManagerWithSchema](#entitymanagerwithschema)
  - Factory function que constroi uma classe do tipo [EntityManagerWithSchema](#entitymanagerwithschema)






Entity
---------
Responsavel por:



*************************************** 


SchemaWithDialect
-------------

...



EntityManagerWithSchema
-------------------

...

EntityManagerEntity
-------------------

...