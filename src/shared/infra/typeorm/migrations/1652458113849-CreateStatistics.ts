import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStatistics1652458113849 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'statistics',
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
                        name: 'right_attack',
                        type: 'int',
                    },
                    {
                        name: 'wrong_attack',
                        type: 'int',
                    },

                    {
                        name: 'member_id',
                        type: 'uuid',
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['member_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'member',
                        name: 'fk_MemberAndStatistics',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('statistics');
    }
}
