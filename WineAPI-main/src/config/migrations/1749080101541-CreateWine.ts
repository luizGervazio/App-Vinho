import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWine1749080101541 implements MigrationInterface {
    name = 'CreateWine1749080101541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "producer" character varying NOT NULL, "type" character varying NOT NULL, "year" integer NOT NULL, "country" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "grapeType" character varying NOT NULL, "alcoholPercentage" double precision NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_9533c1931b8e10abae016745f61" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "wines"`);
    }

}
