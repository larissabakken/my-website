import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Tags from './Tags';
import { BsFillCalendarWeekFill as Calendar } from 'react-icons/bs';

const Timeline = () => {
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    fetch('/assets/data/experience.json')
      .then((response) => response.json())
      .then((json) => setContent(json));
    console.log(content);
  }, []);

  return (
    <div className="w-full flex justify-center items-center p-5">
      <div>
        <ol className="border-l-2 border-[var(--secondary-color-dark)]">
          {content.map((item: any, index: number) => (
            <li key={index}>
              <div className="flex-start md:flex">
                <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full">
                  <Calendar color="var(--primary-color)" size={25} />
                </div>
                <div className="ml-6 mb-10 block rounded-lg p-6 shadow-md shadow-black/5 bg-[var(--bg-color-light)] sm:max-w-2xl max-w-sm">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-[var(--primary-color)]">
                      {item.title}
                    </span>
                  </div>
                  <div className="mb-4">
                    <Link
                      href={item.company[0].url}
                      className="text-lg font-bold italic text-[var(--primary-color-dark)] cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      {item.company[0].name} - {item.company[0].location}
                    </Link>
                    <p className="text-sm font-extralight italic">
                      {item.dateFrom} - {item.dateTo}
                    </p>
                  </div>
                  <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                    {item.jobDescription}
                  </p>
                  <div className="flex flex-wrap">
                    {item.tags.map((tag: any, index: number) => (
                      <Tags key={index} tag={tag} />
                    ))}
                  </div>

                  <div className="mt-4">
                    <p>Want a reference about my job here?</p>

                    <Link href={item.company[0].reference}>
                      <span className="text-sm underline font-bold text-[var(--secondary-color)] cursor-pointer">
                        You can ask for it here
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
