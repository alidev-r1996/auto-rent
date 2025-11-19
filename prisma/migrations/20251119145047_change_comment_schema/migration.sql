/*
  Warnings:

  - You are about to drop the column `ancestors` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_parent_id_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "ancestors";
