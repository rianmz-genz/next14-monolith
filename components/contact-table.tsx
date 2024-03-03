import { getContacts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { EditButton, DeleteButton } from '@/components/buttons';

const ContactTable = async ({
  query,
  currentPage,
  currentLimit
}: {
  query: string;
  currentPage: number;
  currentLimit: number
}) => {
  const contacts = await getContacts(query, currentPage, currentLimit);

  return (
    <table className='w-full text-sm text-left text-gray-500'>
      <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th className='py-3 px-6'>#</th>
          <th className='py-3 px-6'>Name</th>
          <th className='py-3 px-6'>Phone Number</th>
          <th className='py-3 px-6'>Created At</th>
          <th className='py-3 px-6 text-center'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length === 0 && (
          <tr className='bg-white border-b'>
            <td
              colSpan={5}
              className='py-3 px-6 text-center'
            >
              Contact Not Found..
            </td>
          </tr>
        )}
        {contacts.map((contact, index) => (
          <tr
            key={contact.id}
            className='bg-white border-b'
          >
            <td className='py-3 px-6'>{index + 1}</td>
            <td className='py-3 px-6'>{contact.name}</td>
            <td className='py-3 px-6'>{contact.phone}</td>
            <td className='py-3 px-6'>
              {formatDate(contact.createdAt.toString())}
            </td>
            <td className='flex justify-center gap-1 py-3'>
              <EditButton id={contact.id} />
              <DeleteButton id={contact.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
