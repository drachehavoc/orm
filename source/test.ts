import morango from "./morango";

const dialect = new morango.Dialect(); 


// Dialect();

// const schema = class ExampleBlog extends dialect.Schema {
//     post = new Post extends this.EntityManager {
//     title = new this.Column(`title`, type.String(1024));
//     content = new this.Column(`title`, type.String(undefined));
//     comments = new this.View(this.schema.comment)
// };

// comment = new Comment extends this.EntityManager {
//     content = new this.Column(`content`, type.String(undefined));
//     post = this.schema.post;
// };

// tag = new Tag extends this.EntityManager {
//     name = new this.Column(`name`, type.String(50));
// };

// @notExposed
// tag_vs_post = new Tag_Vs_Post extends this.EntityManager {
//     tag = this.schema.tag;
//     post = this.schema.post;
// };
// }