import EntityManager from "./EntityManager";
import Column_Vs_ManagerEntity from "./@types/Column_Vs_ManagerEntity";

export default class Column {
    constructor(
        protected entityManager: EntityManager
    ) { }

    static build(entityManager: EntityManager): typeof Column_Vs_ManagerEntity {
        return class Entity_Vs_ManagerEntity extends Column {
            constructor() {
                super(entityManager);
            }
        }
    }
}