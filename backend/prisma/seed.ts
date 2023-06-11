import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const actions = await prisma.action.findFirst();
    if (!actions) {
        await prisma.action.createMany({
            data: [
                {
                    name: 'Claws',
                    description: 'The creature slashes its target with its claws.',
                    bonus: '+7',
                    damage_type: 'slashing',
                    damage_dice: '2d8+5'
                },
                {
                    name: 'Beak',
                    description: 'The creature attacks the target with its beak.',
                    bonus: '+7',
                    damage_type: 'piercing',
                    damage_dice: '1d10+5'
                }
            ]
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });