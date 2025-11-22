-- DropIndex
DROP INDEX "public"."Comment_blog_id_car_id_idx";

-- DropIndex
DROP INDEX "public"."user_email_name_idx";

-- CreateIndex
CREATE INDEX "Availability_start_date_end_date_idx" ON "Availability"("start_date", "end_date");

-- CreateIndex
CREATE INDEX "Blog_title_slug_status_idx" ON "Blog"("title", "slug", "status");

-- CreateIndex
CREATE INDEX "Comment_blog_id_car_id_verified_idx" ON "Comment"("blog_id", "car_id", "verified");

-- CreateIndex
CREATE INDEX "Discount_active_title_idx" ON "Discount"("active", "title");

-- CreateIndex
CREATE INDEX "user_email_name_phoneNumber_idx" ON "user"("email", "name", "phoneNumber");
