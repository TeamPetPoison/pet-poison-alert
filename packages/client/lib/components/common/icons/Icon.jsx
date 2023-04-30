import React from 'react'

import { XCircleIcon } from '@heroicons/react/24/outline';

export const XMark = ({ handleClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <XCircleIcon className="z-10 absolute top-0.5 right-0.5 text-black stroke-2 h-6 w-6" />
    </button>
  );
};

// export const Icon = () => {
//     return (
//         <CheckIcon className="w-6 h-6 pl-1 text-white" />
//   )
// }


