import React, { useEffect, useState } from 'react';

  function DynamicTitle() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
      setTimeOfDay('Good Morning');
    } else if (hours >= 12 && hours < 18) {
      setTimeOfDay('Good Afternoon');
    } else {
      setTimeOfDay('Good Evening');
    }
  }, []);

  return <h1>{timeOfDay}</h1>;
}

export default DynamicTitle;
