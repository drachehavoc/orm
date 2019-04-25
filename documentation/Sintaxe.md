Schema
===

```ts

const dialect = new Dialect();

const schema = class ___NOME_DO_SCHEMA__ extends dialect.Schema {
    public __NOME_DA_COLEÇÃO_EXPOSTA_NA_API___ = new __NOME_DA_TABELA_NO_SGBD__ extends this.EntityManager {
        public __NOME_DA_COLUNA_EXPOSTA_NA_API__ = new this.Column(`__NOME_DA_COLUNA_NO_SGBD`, type.TIPO_DA_COLUNA(... CONFIGURACOES_DA_COLUNA))
    }  
}

```

Exemplo
---

```ts



```