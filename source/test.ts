import morango, { types } from "./morango";


const d = new morango.Dialect({})

const s = new d.Schema();

const em = new s.EntityManager();
new em.Primary();
new em.Column();

// import Schema from "./morango/Schema";
// import EntityManager from "./morango/EntityManager";

// const dialect = new morango.Dialect({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     // database: 'delme'
// });

// // const schema = new dialect.Schema(`ExampleBlog`);
// // const schema = new Schema(dialect, `ExampleBlog`);
// // const schema = new class ExampleBlog extends dialect.Schema { }
// // const schema = new class extends dialect.Schema { }(`ExampleBlog`)

// const schema = new class ExampleBlog extends dialect.Schema {

//     // post = new this.EntityManager(`Post`);
//     // post = new EntityManager(this, `Post`);
//     // post = new class Post extends this.EntityManager { }

//     post = new class Post extends this.EntityManager {
//         title = new this.Column(`title`, types.String(1024));
//         content = new this.Column(`title`, types.String(undefined));
//         // comments = new this.View(this.schema.comment)
//     };

//     comment = new class Comment extends this.EntityManager {
//         content = new this.Column(`content`, types.String(undefined));
//         post = this.schema.post;
//     };

//     tag = new class Tag extends this.EntityManager {
//         name = new this.Column(`name`, types.String(50));
//     };

//     // @notExposed
//     tag_vs_post = new class Tag_Vs_Post extends this.EntityManager {
//         tag = this.schema.tag;
//         post = this.schema.post;
//     };
// }

// new schema.post.Entity();