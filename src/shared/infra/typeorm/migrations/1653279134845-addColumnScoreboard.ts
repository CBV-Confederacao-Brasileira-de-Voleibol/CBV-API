import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnScoreboard1653279134845 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'match',

            new TableColumn({
                name: 'scoreboard_team1',
                type: 'int',
                isNullable: true,
            }),
        );

        await queryRunner.addColumn(
            'match',

            new TableColumn({
                name: 'scoreboard_team2',
                type: 'int',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('match', 'scoreboard_team1');
        await queryRunner.dropColumn('match', 'scoreboard_team1');
    }
}
