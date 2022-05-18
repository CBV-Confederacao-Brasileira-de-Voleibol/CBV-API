import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStatisticsBySet1652458439394 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'statistics_by_set',

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
                        name: 'withdraw',
                        type: 'int',
                    },

                    {
                        name: 'block',
                        type: 'int',
                    },

                    {
                        name: 'member_id',
                        type: 'uuid',
                    },
                    {
                        name: 'set_id',
                        type: 'uuid',
                    },
                ],

                foreignKeys: [
                    {
                        columnNames: ['member_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'member',
                        name: 'fk_MemberAndStatisticsBySet',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        columnNames: ['set_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'set',
                        name: 'fk_StatisticsAndSet',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('statistics_by_set');
    }
}
