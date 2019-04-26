Glossário
===

Classe Filha Com Pai Fixado
---

São classes geradas em tempo de execução pelos métodos fabrica `Schema::build`, `EntityManager::build`, e `Entity::build`, estas classes são criadas para fixar os [elementos pai](#Elemento-Pai) de cada uma destas classes, a fim de facilitar o relacionamento entre [elementos pai](#Elemento-Pai) e [elementos filho](#Elemento-Filho).

Tome como exemplo a seguinte situação, temo um [esquema](Classe.md#Schema) e precisamos relacionar um novo [EntityManager](#Classes.md#EntityManager) a este, sem _Classe Filha Com Pai Fixado_ o código ficaria como o exemplo a seguir:

```ts
const dialect = new Dialect(... ?);
const schema = new Schema(`name`, dialect, ... ?);
new entityManager = new EntityManager(schema, ... ?);
```

já com a utilização de _Classe Filha Com Pai Fixado_ o código ficaria conforme o exemplo a seguir:

```ts
const dialect = new Dialect(... ?);
const schema = new dialect.Schema(`name`);
new entityManager = new schema.EntityManager(... ?);
```

Maneiras Sintáticas
---

Nesta documentação criamos dois apelidos para definir duas possiveis maneiras de instanciação de objetos, o primeiro chamamos de [Sinataxe Aninhada](#Sinataxe-Aninhada) e a segunda maniera chamamos de [Sintaxe Desgarrada](#Sintaxe-Desgarrada).

### Sinataxe Aninhada

Chamamos de Sintaxe Aninhada quando os [elementos filhos](#Elemento-Filho) são adicionados ao [elemento pai](#Elemento-Pai) dentro da classe do elemento pai, você pode ver alguns exemplos nos links a baixo:

- [Schema com EntityManager Aninhado](Sintax.md#Schema-com-EntityManager-Aninhado)

### Sintaxe Desgarrada

Chamamos de Sintaxe Aninhada quando os [elementos filhos](#Elemento-Filho) __NÃO__ são adicionados ao [elemento pai](#Elemento-Pai) dentro da classe do elemento pai, você pode ver alguns exemplos nos links a baixo:

- [Schema com EntityManager Desgarrado](Sintax.md#Schema-com-EntityManager-Desgarrado)

Elemento Pai
---

Elementos pai são os que são referenciados por objetos dos (elementos filhos)[#Elemento Filho], veja a tabela a seguir:

| Classe Pai    | Classe Filha  | Classe Filha Com Pai Fixado   |
| ------------- | ------------  | ------------------------ |
| Dielect       | Schema        | Schema_Vs_Dialect        |
| Schema        | EntityManager | EntityManager_Vs_Schema  |
| EntityManager | Entity        | Entity_Vs_EntityManager  |


Elemento Filho
---

...