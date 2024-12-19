import React, { useEffect, useState } from 'react';

  function DynamicTitle2() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
      setTimeOfDay('Morning Reset');
    } else if (hours >= 12 && hours < 18) {
      setTimeOfDay('Afternoon Reset');
    } else {
      setTimeOfDay('Evening Reset');
    }
  }, []);

  return <p>{timeOfDay}</p>;
}

export default DynamicTitle2;
