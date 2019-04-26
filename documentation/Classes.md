Dialect AAAA <a name="1.">#</a>
===

Traduz ações da API para o SGBD alvo (MySQL, MariaDB, Postgre, SQLite).

As classes que estendem de Dialect, permitem conexão com o banco de dados, cada classe Dialect tem um configurações específicas para o banco de dados ao qual ela prove conexão.

## Responsavel por: <a name="1.1">#</a>

- [ ] ...

### Atributos <a name="Dialect_1.1">#</a>

- [ ] [_readonly_] typeof Schema: [Schema_Vs_Dialect](#schema_Vs_dialect)

### Métodos <a name="Dialect_1.2">#</a>

- [ ] [_public_] createDatabase([EntityManager](#EntityManager))
  - [ ] cria uma nova tabela no SGBD com base nas informações contidas em um EntityManager
- [ ] [_public_] storeEntity([Entity](#Entity))
  - [ ] executa _insert_ ou _update_ dos dados da entidade no SGBD
- [ ] [_public_] destroyEntity([Entity](#Entity))
  - [ ] exclui dados de uma entidade no SGBD





Schema <a name="Schema">#</a>
===

...

## Responsavel por: <a name="Schema_1">#</a>

- [ ] Criar/Atualiza/conectar no esquema relacional do SGBD
- [ ] Transformar EntityManagers em tabelas no SGBD

### Atributos <a name="Schema_1.1">#</a>

- [ ] [_readonly_] EntityManager: [EntityManager_Vs_Schema](#EntityManager_Vs_Schema)

### Métodos <a name="Schema_1.2">#</a>

- [ ] construtor([Dialect](#dialect))
- [ ] [_static_] build([Dialect](#dialect)): [Schema_Vs_Dialect](#schema_Vs_dialect)
  - [ ] Factory function que constroi uma classe do tipo [Schema_Vs_Dialect](#schema_Vs_dialect), fixando o parâmetro [Dialect](#dialect) do construtor como um objeto fixo.





EntityManager <a name="EntityManager">#</a>
===

...

## Responsavel por: <a name="EntityManager_1">#</a>

- [ ] Criar moldes para criação de tabelas no banco de dados
- [ ] Criar entidades e relacionamento com outras entidades
- [ ] Criar novas instancias e salva-las no SGBD
- [ ] Instanciar novas entidades com base em dados contidos no SGBD
- [ ] Descrever os campos das entidades
- [ ] Descrever os relacionamentos entre as entidades

### Atributos <a name="EntityManager_1.1">#</a>

- [ ] [_readonly_] Entity: [Entity_Vs_ManagerEntity](#Entity_Vs_ManagerEntity)

### Métodos <a name="EntityManager_1.2">#</a>

- [ ] construtor([Schema](#Schema))
- [ ] [_static_] build([Schema](#Schema)): [EntityManager_Vs_Schema](#EntityManager_Vs_Schema)
  - [ ] Factory function que constroi uma classe do tipo [EntityManager_Vs_Schema](#EntityManager_Vs_Schema), fixando o parâmetro [Schema](#Schema) do construtor como um objeto fixo.





Entity
===

...

## Responsavel por:

- [ ] Alterar dados da entidade
- [ ] Excluir a entidade
- [ ] Relacionar a entidade com outras entidades

### Atributos

- [ ] ...

### Métodos

- [ ] construtor([EntityManager](#EntityManager))
- [ ] [_static_] build([EntityManager](#EntityManager)): [Entity_Vs_EntityManager](#Entity_Vs_EntityManager)
  - [ ] Factory function que constroi uma classe do tipo [Entity_Vs_EntityManager](#Entity_Vs_EntityManager), fixando o parâmetro [EntityManager](#EntityManager) do construtor como um objeto fixo.




---





Schema_Vs_Dialect
===

Classe construida em tempo de execução que estende [Schema](#Schema), setando atributo [Dialect](#Dialect) do construtor com um valor padrão, esta classe é fabricada pelo método Schema::build([Schema](#Schema)).





EntityManager_Vs_Schema
===

Classe construida em tempo de execução que estende [EntityManager](#EntityManager), setando atributo [Schema](#Schema) do construtor com um valor padrão, esta classe é fabricada pelo método EntityManager::build([EntityManager](#EntityManager)).





Entity_Vs_ManagerEntity
===

Classe construida em tempo de execução que estende [Entity](#Entity), setando atributo [ManagerEntity](#ManagerEntity) do construtor com um valor padrão, esta classe é fabricada pelo método Entity::build([Entity](#Entity)).