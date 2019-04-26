Dialect
===

Antes de criar um esquema, entityManagerName ou mesmo uma entidade, é preciso instanciar um objeto do tipo [Dialect](Classes.md#dialect), no exemplo a seguir instanciaremos um dialeto do tipo [MySQL](DialectClasses.md#MySQL), as definições de outros dialetos podem ser apreciadas no item [Dialect Classes](DialectClasses.md) desta documentação:

```ts
import morango from "./morango";
const dialect = new morango.MySQL({ 
    host: 'localhost',
    user: 'root',
    database: 'test'
 }); 
```

Schema
===

com o um objeto do tipo Dialect instanciado você pode criar um novo esquema, existem duas maneiras disto ser feito, apelidamos estas maneiras de __aninhado__ e __desgarrado__ [confira em nosso glossário](Glossario.md#Maneiras-Sintáticas).

Schema com EntityManager Aninhado
---

```ts
const dialect = new Dialect(... ?);

new class DbSchemaName extends dialect.Schema {
    entityManagerName = new class DbTableName extends this.EntityManager {
        columnName = new this.Column(`db_column_name`, ... ?);
    }

    otherEntitiManager = new class OtherTableName extends this.EntityManager {
        foreignColumnLink = new this.Foreign(this.schema.entityManagerName, ... ?);
    }
};
```

Schema com EntityManager Desgarrado
---

```ts
const dialect = new Dialect(... ?);

const schema = new dialect.Schema(`db_schema_name`);

const entityManagerName = new schema.EntityManager(`db_table_name`)

const columnName = new entityManagerName.Column(`db_column_name`, ... ?);

const otherEntitiManager = new class OtherTableName extends this.EntityManager {
        // ...
}

const foreignColumnLink = new otherEntitiManager.Foreign(entityManagerName, ... ?);
```

EntityManager
===