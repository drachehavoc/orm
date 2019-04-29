import EntityManager from "./EntityManager";
import Entity_Vs_ManagerEntity from "./@types/Entity_Vs_ManagerEntity";

export class Entity {
    constructor(
        protected entityManager: EntityManager
    ) { }

    static build(entityManager: EntityManager): typeof Entity_Vs_ManagerEntity {
        return class Entity_Vs_ManagerEntity extends Entity {
            constructor() {
                super(entityManager);
            }
        }
    }
}

export default Entity;