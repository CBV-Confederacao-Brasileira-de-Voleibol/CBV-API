import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createMatch1652456194409 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'match',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'date',
                        type: 'date',
                    },
                    {
                        name: 'time',
                        type: 'time',
                    },
                    {
                        name: 'team1',
                        type: 'uuid',
                    },

                    {
                        name: 'team2',
                        type: 'uuid',
                    },
                    {
                        name: 'phase_id',
                        type: 'uuid',
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['phase_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'phase',
                        name: 'fk_MatchAndPhase',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        columnNames: ['team1_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'team',
                        name: 'fk_MatchAndTeam1',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                    {
                        columnNames: ['team2_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'team',
                        name: 'fk_MatchAndTeam2',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('match');
    }
}
