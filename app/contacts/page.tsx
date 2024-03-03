import ContactTable from '@/components/contact-table';
import Search from '@/components/search';
import Pagination from '@/components/pagination';
import { CreateButton } from '@/components/buttons';
import { getContactPages } from '@/lib/data';
import { Suspense } from 'react';
import { TableSkeleton } from '@/components/skeleton';
import LimitData from '@/components/item-perpage';

const Contacts = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    limit?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const currentLimit = Number(searchParams?.limit) || 5;

  const totalPages = await getContactPages(query, currentLimit);

  return (
    <div className='max-w-screen-md mx-auto mt-5'>
      <h1 className='title text-2xl mb-3'>Contacts</h1>
      <div className='flex items-center justify-between gap-3 mb-5'>
        <Search />
        <CreateButton />
      </div>
      <Suspense
        key={query + currentPage + currentLimit}
        fallback={<TableSkeleton />}
      >
        <ContactTable
          query={query}
          currentPage={currentPage}
          currentLimit={currentLimit}
        />
      </Suspense>
      <div className='flex justify-center mt-4 space-x-3'>
        <LimitData />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Contacts;
