import React, { useEffect, useState } from 'react';
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => { 
    const fetchWorkouts = async () => {
        const response = await fetch('http://localhost:3000/api/workouts')
        const json = await response.json()  

        if (response.ok) {
            setWorkouts(json);
        }
    }
   }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <div key={workout._id}>
            <p>{workout.title}</p>
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
       </div>
  );
}

export default Home;