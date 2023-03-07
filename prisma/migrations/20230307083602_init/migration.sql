-- CreateEnum
CREATE TYPE "NodeStatus" AS ENUM ('OPEN', 'START');

-- CreateEnum
CREATE TYPE "NodeRole" AS ENUM ('ECN', 'CN', 'TN', 'LN', 'SSN');

-- CreateEnum
CREATE TYPE "ProposalTicketType" AS ENUM ('APPROVE', 'AGAINST');

-- CreateTable
CREATE TABLE "User" (
    "id" INT4 NOT NULL,
    "avatar" STRING NOT NULL,
    "name" STRING NOT NULL,
    "pubKey" STRING NOT NULL,
    "priKey" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Node" (
    "id" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "location" STRING NOT NULL,
    "role" "NodeRole" NOT NULL,
    "status" "NodeStatus" NOT NULL,
    "ownerId" INT4 NOT NULL,

    CONSTRAINT "Node_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "id" INT4 NOT NULL,
    "title" STRING NOT NULL,
    "content" STRING NOT NULL,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProposalTicket" (
    "id" INT4 NOT NULL,
    "proposalId" INT4 NOT NULL,
    "userId" INT4 NOT NULL,
    "type" "ProposalTicketType" NOT NULL,

    CONSTRAINT "ProposalTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Node" ADD CONSTRAINT "Node_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalTicket" ADD CONSTRAINT "ProposalTicket_proposalId_fkey" FOREIGN KEY ("proposalId") REFERENCES "Proposal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProposalTicket" ADD CONSTRAINT "ProposalTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
