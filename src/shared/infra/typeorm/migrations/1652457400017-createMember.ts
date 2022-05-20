import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class member1652457400017 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'member',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'age',
                        type: 'date',
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
                        name: 'fk_MemberAndTeam',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('member');
    }
}
