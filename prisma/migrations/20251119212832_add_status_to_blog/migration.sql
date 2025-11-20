-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('Published', 'Archived', 'Draft');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'Published',
ALTER COLUMN "views" SET DEFAULT 0;
