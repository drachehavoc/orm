Schema
===

```ts

const dialect = new Dialect();

const schema = class ___NOME_DO_SCHEMA__ extends dialect.Schema {
    @notExposed | @exposed
    public __NOME_DA_COLEÇÃO_EXPOSTA_NA_API___ = new __NOME_DA_TABELA_NO_SGBD__ extends this.EntityManager {
        @notExposed | @exposed
        public __NOME_DA_COLUNA_EXPOSTA_NA_API__ = new this.Column(`__NOME_DA_COLUNA_NO_SGBD`, type.TIPO_DA_COLUNA(... CONFIGURACOES_DA_COLUNA))
        @notExposed | @exposed
        public __NOME_DO_RELACIONAMENTO_EXPOSTA_NA_API__ = INSTANCIA_DO_ENTITYMANEGER_RELACIONADO
        @notExposed | @exposed
        public __NOME_DA_LISTAGEM_EXPOSTA_NA_API__ = new this.View(INSTANCIA_DO_ENTITYMANEGER_RELACIONADO)
    }  
}

```

Exemplo
---

```ts
const dialect = new Dialect();

const schema = class ExampleBlog extends dialect.Schema {
    post = new Post extends this.EntityManager {
        title = new this.Column(`title`, type.String(1024));
        content = new this.Column(`title`, type.String(undefined));
        comments = new this.View(this.schema.comment)
    };

    comment = new Comment extends this.EntityManager {
        content = new this.Column(`content`, type.String(undefined));
        post = this.schema.post;
    };

    tag = new Tag extends this.EntityManager {
        name = new this.Column(`name`, type.String(50));
    };

    @notExposed
    tag_vs_post = new Tag_Vs_Post extends this.EntityManager {
        tag = this.schema.tag;
        post = this.schema.post;
    };
}
```