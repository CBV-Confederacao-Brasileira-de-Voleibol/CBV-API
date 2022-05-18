import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createClassification1652454472531 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'classification',

                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'spots',
                        type: 'int',
                    },

                    {
                        name: 'defeat',
                        type: 'int',
                    },

                    {
                        name: 'victory',
                        type: 'int',
                    },

                    {
                        name: 'matches',
                        type: 'int',
                    },

                    {
                        name: 'sets_won',
                        type: 'int',
                    },

                    {
                        name: 'lost_sets',
                        type: 'int',
                    },

                    {
                        name: 'team_id',
                        type: 'uuid',
                    },
                ],

                foreignKeys: [
                    {
                        columnNames: ['team_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'team',
                        name: 'fk_TeamAndCassification',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classification');
    }
}
