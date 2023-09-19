import { useState } from 'react';
import './App.css';
import workouts from './workouts';
import warmUp from './warmUp';

export default function App() {
  const [daysPerWeek, setDaysPerWeek] = useState();

  return (
    <div className="App">
      <Form
        daysPerWeek={daysPerWeek}
        setDaysPerWeek={setDaysPerWeek}
      />

      {daysPerWeek && <WarmUp />}

      {Array.from({ length: daysPerWeek }, (_, i) => (
        <Table
          key={i}
          id={i}
          daysPerWeek={daysPerWeek}
        />
      ))}
    </div>
  );
}

function Form({ daysPerWeek, setDaysPerWeek }) {
  function handleChange(e) {
    if (Number(e.target.value) >= 2 && Number(e.target.value) <= 5) {
      setDaysPerWeek(Number(e.target.value));
    } else {
      setDaysPerWeek('');
    }
  }

  return (
    <div>
      <form>
        <h3>How many 45-60 minute workouts can you do this week?</h3>

        <input
          placeholder="2-5"
          type="number"
          max={5}
          min={2}
          value={daysPerWeek}
          onChange={event => handleChange(event)}
        ></input>
      </form>
    </div>
  );
}

function WarmUp() {
  return (
    <div>
      <h3>Warm Up Protocol (Repeat Before Each Workout)</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {warmUp.map(el => (
            <tr>
              <td key={el.id}>{el.name}</td>
              <td>{el.sets}</td>
              <td>{el.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Table({ id, daysPerWeek }) {
  return (
    <div>
      <table className="Table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Warm Up Sets</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>RPE</th>
            <th>Rest Time</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {workouts[daysPerWeek - 2].programs[id].exercises.map(el => (
            <tr>
              <td>{el.name}</td>
              <td>{el.warmUpSets}</td>
              <td>{el.sets}</td>
              <td>{el.reps}</td>
              <td>{el.RPE}</td>
              <td>{el.restTime}</td>
              <td>{el.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
