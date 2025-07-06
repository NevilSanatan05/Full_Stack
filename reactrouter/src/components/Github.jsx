import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div className="text-center p-6 text-xl">Loading...</div>;

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <br />
      <img src={data.avatar_url} alt="Git picture" width={300} className="mx-auto mt-4 rounded-full" />
    </div>
  );
}

export default Github;
