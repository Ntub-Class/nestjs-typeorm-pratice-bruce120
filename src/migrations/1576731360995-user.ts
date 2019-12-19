import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576731360995 implements MigrationInterface {
    name = 'user1576731360995'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_cace4a159ff9f2512dd4237376` (`id`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_cace4a159ff9f2512dd4237376` ON `user`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
