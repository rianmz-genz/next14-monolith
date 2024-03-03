import { prisma } from '@/lib/prisma';

export const getContacts = async (query: string, currentPage: number, limit: number) => {
  const offset = (currentPage - 1) * limit;
  try {
    const contacts = await prisma.contact.findMany({
      skip: offset,
      take: limit,
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};

export const getContactPages = async (query: string, limit: number) => {
  try {
    const contacts = await prisma.contact.count({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            phone: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / limit);
    return totalPages;
  } catch (error) {
    throw new Error('Failed to fetch contact data');
  }
};
