-- CreateTable
CREATE TABLE `Jogador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `posicao` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Time` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `anoFundacao` INTEGER NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `tecnico` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partida` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `placar` VARCHAR(191) NOT NULL,
    `timeCasaId` INTEGER NOT NULL,
    `timeVisitanteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JogadorTime` (
    `jogadorId` INTEGER NOT NULL,
    `timeId` INTEGER NOT NULL,

    PRIMARY KEY (`jogadorId`, `timeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Partida` ADD CONSTRAINT `Partida_timeCasaId_fkey` FOREIGN KEY (`timeCasaId`) REFERENCES `Time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Partida` ADD CONSTRAINT `Partida_timeVisitanteId_fkey` FOREIGN KEY (`timeVisitanteId`) REFERENCES `Time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JogadorTime` ADD CONSTRAINT `JogadorTime_jogadorId_fkey` FOREIGN KEY (`jogadorId`) REFERENCES `Jogador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JogadorTime` ADD CONSTRAINT `JogadorTime_timeId_fkey` FOREIGN KEY (`timeId`) REFERENCES `Time`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
