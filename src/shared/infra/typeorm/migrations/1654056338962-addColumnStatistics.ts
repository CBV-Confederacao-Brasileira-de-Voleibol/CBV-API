import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class addColumnStatistics1654056338962 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'statistics',

            new TableColumn({
                name: 'match_id',
                type: 'uuid',
                isNullable: true,
            }),
        );
        await queryRunner.createForeignKey(
            'statistics',
            new TableForeignKey({
                name: 'FKMatchAndStatistics',
                referencedTableName: 'match',
                referencedColumnNames: ['id'],
                columnNames: ['match_id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('statistics', 'match_id');
    }
}
