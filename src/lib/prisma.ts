import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

export default function getPrisma() {
  return new PrismaClient({ adapter: new PrismaNeon({ connectionString: process.env.DATABASE_URL! }) })
}
