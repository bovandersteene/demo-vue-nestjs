-- CreateTable
CREATE TABLE "Dog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "totalTeeths" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Dog_name_key" ON "Dog"("name");
