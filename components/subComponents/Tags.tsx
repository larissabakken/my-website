import React from 'react';

const Tags = (props: any) => {
  const { tag } = props;

  console.log(tag, "tag");
  return <div className='text-sm bg-gradient-to-r from-[var(--secondary-color)] to-[var(--secondary-color-dark)] w-max rounded-2xl py-1 px-5 m-1'>{tag}</div>;
};

export default Tags;
