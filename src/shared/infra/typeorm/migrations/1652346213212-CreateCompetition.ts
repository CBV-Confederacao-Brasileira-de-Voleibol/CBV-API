import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompetition1652346213212 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'competition',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'year',
                        type: 'int',
                    },
                    {
                        name: 'date_start',
                        type: 'timestamp',
                    },
                    {
                        name: 'date_end',
                        type: 'timestamp',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('competition');
    }
}
