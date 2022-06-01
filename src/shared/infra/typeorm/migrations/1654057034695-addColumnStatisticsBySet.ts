import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class addColumnStatisticsBySet1654057034695
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'statistics_by_set',

            new TableColumn({
                name: 'match_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'statistics_by_set',

            new TableForeignKey({
                name: 'FKMatchAndStatisticsBySet',
                referencedTableName: 'match',
                referencedColumnNames: ['id'],
                columnNames: ['match_id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('statistics_by_set', 'match_id');
    }
}
