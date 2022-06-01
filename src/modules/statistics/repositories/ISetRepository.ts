import Set from '../infra/typeorm/entities/Set';

export default interface ISetRepository {
    create(name: string): Promise<Set>;
    findById(set_id: string): Promise<Set | undefined>;
    findByName(name: string): Promise<Set | undefined>;
    findAll(): Promise<Set[]>;
}
