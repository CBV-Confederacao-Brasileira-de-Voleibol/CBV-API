import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnRound1653187954847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'match',
            new TableColumn({
                name: 'round',
                type: 'int',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('match', 'round');
    }
}
