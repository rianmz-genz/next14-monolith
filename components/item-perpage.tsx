'use client';

import { limitOptions } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react';

const LimitData = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentLimit = Number(searchParams.get('limit')) || 5;
  const createPageURL = (limitNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('limit', limitNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLimit = e.target.value;
    const newURL = createPageURL(newLimit);
    // Redirect or perform any action with the new URL
    router.push(newURL);
  };

  return (
    <select
      title='Limit data'
      className='bg-white rounded-md border px-4 py-2 text-black/30'
      onChange={handleChange} // Call handleChange function when option is changed
      value={currentLimit} // Set the value of the select element
    >
      {limitOptions.map((limit, index) => (
        <option
          value={limit}
          key={index}
        >
          {limit}
        </option>
      ))}
    </select>
  );
};

export default LimitData;
