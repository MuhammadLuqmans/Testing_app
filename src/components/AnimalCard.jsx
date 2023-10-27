import axios from 'axios';
import React, { useEffect, useState } from 'react';
import clsxm from '../utils/clsxm';
import LinesEllipsis from 'react-lines-ellipsis';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

export const AnimalCard = ({ animal }) => {
  const [animalDetails, setAnimalDetails] = useState();

  useEffect(() => {
    const handleFetchAnimalList = async () => {
      const response = await axios(animal?.api_link);
      setAnimalDetails(response?.data?.data);
      // const categoryTitle = response?.data?.data?.category_titles?.[0];
    };
    handleFetchAnimalList();
  }, []);

  return (
    <div className={clsxm('max-w-sm rounded overflow-hidden shadow-lg m-2 mx-auto w-full', 'hover:bg-slate-200')}>
      <img
        src={animalDetails?.thumbnail?.lqip}
        loading='lazy'
        alt={animal?.title}
        className='w-full h-48 object-cover'
      />
      <div className='px-5 pt-4'>
        <div className='font-bold text-xl text-left pb-1'>
          <LinesEllipsis text={animal?.title} maxLine='1' ellipsis='...' trimRight basedOn='letters' />
          {/* {animalDetails?.category_titles?.[0]} */}
        </div>
        {animalDetails?.description ? (
          <HTMLEllipsis
            unsafeHTML={animalDetails?.description}
            maxLine='8' // Number of lines to display
            ellipsis='...'
            basedOn='letters'
            className={clsxm('font-[400] text-md mb-8 text-left', 'max-h-[180px]')}
          />
        ) : (
          <div className='font-[400] text-sm mb-8 text-left max-h-[200px] overflow-auto'>
            <LinesEllipsis
              text={animalDetails?.thumbnail?.alt_text}
              maxLine='4'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          </div>
        )}
      </div>
    </div>
  );
};
