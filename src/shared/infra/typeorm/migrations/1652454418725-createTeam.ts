import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTeam1652454418725 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'team',
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
                        name: 'img',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'competition_id',
                        type: 'uuid',
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['competition_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'competition',
                        name: 'fk_teamAndCompetition',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('team');
    }
}
