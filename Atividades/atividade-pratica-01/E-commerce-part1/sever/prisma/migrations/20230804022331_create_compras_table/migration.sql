/*
  Warnings:

  - You are about to drop the `endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "endereco";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "enderecos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "Complemento" TEXT NOT NULL,
    "Bairro" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "enderecos_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "compras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataa" TEXT NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "compras_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
