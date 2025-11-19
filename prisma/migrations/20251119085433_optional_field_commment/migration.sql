-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_parent_id_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "car_id" DROP NOT NULL,
ALTER COLUMN "blog_id" DROP NOT NULL,
ALTER COLUMN "parent_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
