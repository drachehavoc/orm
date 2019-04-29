import Schema from "./Schema";
import Entity from "./Entity";
import Column from "./Column";
import Entity_Vs_ManagerEntity from "./@types/Entity_Vs_ManagerEntity";
import EntityManager_Vs_Schema from "./@types/EntityManager_Vs_Schema";
import Column_Vs_ManagerEntity from "./@types/Column_Vs_ManagerEntity";

export class EntityManager {
    readonly Entity
        : typeof Entity_Vs_ManagerEntity
        = Entity.build(this);

    readonly Primary
        : any
        = {};

    readonly Foreign
        : any
        = {};

    readonly Column
        : typeof Column_Vs_ManagerEntity
        = Column.build(this);

    readonly View
        : any
        = {};

    protected _name
        : string;

    constructor(
        readonly schema: Schema,
        name?: string
    ) {
        this._name = name ? name : this.constructor.name;
        if (this._name === `EntityManager_Vs_Schema` || this._name === `EntityManager`)
            throw `è preciso definir um/outro nome ao EntityManager, o nome ${this._name} é inválido!`;
    }

    static build(schema: Schema): typeof EntityManager_Vs_Schema {
        return class EntityManager_Vs_Schema extends EntityManager {
            constructor(...p: any[]) {
                super(schema, ...p);
            }
        }
    }
}

export default EntityManager;