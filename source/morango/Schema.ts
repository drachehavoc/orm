import Schema_Vs_Dialect from "./@types/Schema_Vs_Dialect";
import Dialect from "./Dialect";
import EntityManager from "./EntityManager";
import EntityManager_Vs_Schema from "./@types/EntityManager_Vs_Schema";

export class Schema {
    readonly EntityManager
        : typeof EntityManager_Vs_Schema
        = EntityManager.build(this);

    protected _name
        : string;

    constructor(
        readonly dialect: Dialect,
        name?: string
    ) {
        this._name = name ? name : this.constructor.name;
        if (this._name === `Schema_Vs_Dialect` || this._name === `Schema`)
            throw `è preciso definir um/outro nome ao schema, o nome ${this._name} é inválido!`;
    }

    static build(dialect: Dialect): typeof Schema_Vs_Dialect {
        return class Schema_Vs_Dialect extends Schema {
            constructor(...p: any[]) {
                super(dialect, ...p);
            }
        }
    }
}

export default Schema;