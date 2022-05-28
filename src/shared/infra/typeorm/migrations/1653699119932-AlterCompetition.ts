import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterCompetition1653699119932 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('competition', 'year');

        await queryRunner.addColumn(
            'competition',
            new TableColumn({
                name: 'description',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'competition',
            new TableColumn({
                name: 'year',
                type: 'int',
            }),
        );
    }
}
