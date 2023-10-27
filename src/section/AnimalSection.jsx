import { useEffect, useState } from 'react';
import { AnimalCard } from '../components/AnimalCard';
import axios from 'axios';

export const AnimalList = ({ animals }) => {
  const [animalList, setAnimalList] = useState([]);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    const handleFetchAnimalList = async () => {
      const response = await axios('https://api.artic.edu/api/v1/artworks/search?q=cats');
      setAnimalList(response?.data?.data);
      setFilterResult(response?.data?.data);
    };
    handleFetchAnimalList();
  }, []);

  const handleSearch = (value) => {
    const searchResult = animalList.filter((item) => item?.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setFilterResult(searchResult);
  };

  return (
    <div>
      {/* Search input */}
      <input
        type='text'
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Search'
        className='border-2 border-blue-500 text-black max-w-[300px] w-full px-4 py-2 my-10 rounded-lg'
      />
      {/* animals list  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 mb-6 max-w-[1400px]  mx-auto'>
        {filterResult?.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
    </div>
  );
};
