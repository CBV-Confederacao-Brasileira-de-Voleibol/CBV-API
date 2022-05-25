import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from 'typeorm';

export class addColumnCompetitionId1653191080725 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'match',
            new TableColumn({
                name: 'competition_id',
                type: 'uuid',
                isNullable: true,
            }),
        );

        await queryRunner.createForeignKey(
            'match',
            new TableForeignKey({
                name: 'FKMatchAndCompetition',
                referencedTableName: 'competition',
                referencedColumnNames: ['id'],
                columnNames: ['competition_id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('match', 'competition_id');
    }
}
