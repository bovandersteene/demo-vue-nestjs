/*
  Warnings:

  - Added the required column `firstname` to the `Owner` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Owner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "firstname" TEXT NOT NULL
);
INSERT INTO "new_Owner" ("id", "name") SELECT "id", "name" FROM "Owner";
DROP TABLE "Owner";
ALTER TABLE "new_Owner" RENAME TO "Owner";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
