Dialect
===

Traduz ações da API para o SGBD alvo (MySQL, MariaDB, Postgre, SQLite).

### Atributos

- [_readonly_] typeof Schema: [Schema_Vs_Dialect](#schema_Vs_dialect)
  - contém uma classe chamada _DialectSchema_ que estende de _Schema_, porém com o método construtor que cria um _Schema_ já com o atributo _Dialect_ já definido como _this_;  

### Métodos

- [_public_] createDatabase([EntityManager](#entitymanager))
  - cria uma nova tabela no SGBD com base nas informações contidas em um EntityManager
- [_public_] storeEntity([Entity](#entity))
  - executa _insert_ ou _update_ dos dados da entidade no SGBD
- [_public_] destroyEntity([Entity](#entity))
  - exclui dados de uma entidade no SGBD

Schema
===

Responsavel por:
- Criar/Atualiza/conectar no esquema relacional do SGBD
- Transformar EntityManagers em tabelas no SGBD

### Atributos

- [_public_] EntityManager: [EntityManager_Vs_Schema](#EntityManager_Vs_Schema)

### Métodos

- construtor([Dialect](#dialect))
- [_public_|_static_] build([Dialect](#dialect)): [Schema_Vs_Dialect](#schema_Vs_dialect)
  - Factory function que constroi uma classe do tipo [Schema_Vs_Dialect](#schema_Vs_dialect)


EntityManager
===

Responsavel por:
- Criar moldes para criação de tabelas no banco de dados
- Criar entidades e relacionamento com outras entidades
- Recuperar instancias/instanciar entidades recuperadas do SGBD
- Descrever os campos das entidades
- Descrever os relacionamentos entre as entidades

### Atributos

- [_public_] Entity: [Entity_Vs_ManagerEntity](#Entity_Vs_ManagerEntity)

### Métodos

- construtor([Schema](#Schema))
- [_public_|_static_] build([Schema](#Schema)): [EntityManager_Vs_Schema](#EntityManager_Vs_Schema)
  - Factory function que constroi uma classe do tipo [EntityManager_Vs_Schema](#EntityManager_Vs_Schema)

Entity
===

Responsavel por:
- Alterar dados da entidade
- Excluir a entidade
- Relacionar a entidade com outras entidades

### Métodos

- construtor([EntityManager](#EntityManager))
- [_public_|_static_] build([EntityManager](#EntityManager)): [Entity_Vs_EntityManager](#Entity_Vs_EntityManager)
  - Factory function que constroi uma classe do tipo [Entity_Vs_EntityManager](#Entity_Vs_EntityManager)

Schema_Vs_Dialect
===

Classe construida em tempo de execução que estende [Schema](#Schema), setando atributo [Dialect](#Dialect) do construtor com um valor padrão, esta classe é fabricada pelo método Schema::build([Schema](#Schema)).

EntityManager_Vs_Schema
===

Classe construida em tempo de execução que estende [EntityManager](#EntityManager), setando atributo [Schema](#Schema) do construtor com um valor padrão, esta classe é fabricada pelo método EntityManager::build([EntityManager](#EntityManager)).

Entity_Vs_ManagerEntity
===

Classe construida em tempo de execução que estende [Entity](#Entity), setando atributo [ManagerEntity](#ManagerEntity) do construtor com um valor padrão, esta classe é fabricada pelo método Entity::build([Entity](#Entity)).