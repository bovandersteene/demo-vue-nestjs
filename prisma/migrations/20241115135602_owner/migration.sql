/*
  Warnings:

  - Made the column `ownerId` on table `Email` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    CONSTRAINT "Email_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Email" ("email", "id", "ownerId") SELECT "email", "id", "ownerId" FROM "Email";
DROP TABLE "Email";
ALTER TABLE "new_Email" RENAME TO "Email";
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
