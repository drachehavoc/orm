import mysql from "mysql";
import Schema from "./Schema";
import Schema_Vs_Dialect from "./@types/Schema_Vs_Dialect";

const quote = (str: string) => `\`${str}\``;

const camelCaseToDash = (str: string) =>
    str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

const camelCaseToSlug = (str: string) =>
    str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1_').toLowerCase();

export namespace types {
    export const String = (...p: any) => null
}

export class Dialect {
    readonly Schema
        : typeof Schema_Vs_Dialect
        = Schema.build(this);

    protected connection
        : Promise<mysql.Connection>
        = this.dbConnect();

    constructor(
        protected connectionConfig: mysql.ConnectionConfig
    ) { }

    protected dbConnect() {
        return new Promise<mysql.Connection>((resolve, reject) => {
            let connection = mysql.createConnection(this.connectionConfig);
            connection.connect(err => {
                if (err) reject(err);
                resolve(connection);
            });
        });
    }

    protected query(sql: string, values: any = null) {
        return new Promise<[any, mysql.FieldInfo[] | undefined]>(async (resolve, reject) => {
            let conn = await this.connection;
            conn.query(sql, values, function (error, results, fields) {
                if (error) reject(error);
                resolve([results, fields]);
            });
        })
    }

    sanitizeSchemaName(name: string): string {
        return camelCaseToSlug(name);
    }

    sanitizeTableName(name: string): string {
        return camelCaseToSlug(name);
    }
}

export default Dialect;