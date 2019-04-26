Glossário
===

Classe Filha Fixada
---

São classes geradas em tempo de execução pelos métodos fabrica `Schema::build`, `EntityManager::build`, e `Entity::build`, estas classes são criadas para fixar os [elementos pai](#Elemento%20Pai) de cada uma destas classes, a fim de facilitar o relacionamento entre [elementos pai](#Elemento%20Pai) e [elementos filho](#Elemento%20Filho).

Maneiras Sintáticas
---

Criamos dois nomes para definir duas possiveis maneiras de instanciação de objetos, a primeira chamamos de (Sinataxe Aninhada)[#Sinataxe Aninhada] e a segunda maniera chamamos de (Sintaxe Desgarrada)[#Sintaxe Desgarrada]

### Sinataxe Aninhada

Chamamos de Sintaxe Aninhada quando os elementos filhos são adicionados ao elemento pai dentro da classe do elemento pai, você pode ver alguns exemplos nos links a baixo:

- ???

### Sintaxe Desgarrada

...

Elemento Pai
---

Elementos pai são os que são referenciados por objetos dos (elementos filhos)[#Elemento Filho], veja a tabela a seguir:

| Classe Pai    | Classe Filha  | Classe Filhas (Fixada)   |
| ------------- | ------------  | ------------------------ |
| Dielect       | Schema        | Schema_Vs_Dialect        |
| Schema        | EntityManager | EntityManager_Vs_Schema  |
| EntityManager | Entity        | Entity_Vs_EntityManager  |


Elemento Filho
---

...