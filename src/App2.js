import { useState } from 'react';
import './App.css';
import workouts from './workouts';

export default function App() {
  const [daysPerWeek, setDaysPerWeek] = useState('');

  const twoDaysDayOne = workouts[0].programs[0];
  const twoDaysDayTwo = workouts[0].programs[1];
  const threeDaysDayOne = workouts[1].programs[0];
  const threeDaysDayTwo = workouts[1].programs[1];
  const threeDaysDayThree = workouts[1].programs[2];
  const fourDaysDayOne = workouts[2].programs[0];
  const fourDaysDayTwo = workouts[2].programs[1];
  const fourDaysDayThree = workouts[2].programs[2];
  const fourDaysDayfour = workouts[2].programs[3];
  const fiveDaysDayOne = workouts[3].programs[0];
  const fiveDaysDayTwo = workouts[3].programs[1];
  const fiveDaysDayThree = workouts[3].programs[2];
  const fiveDaysDayfour = workouts[3].programs[3];
  const fiveDaysDayfive = workouts[3].programs[4];

  return (
    <div className="App">
      <Form
        daysPerWeek={daysPerWeek}
        setDaysPerWeek={setDaysPerWeek}
      />
      {daysPerWeek === 2 ? (
        <div>
          {' '}
          <TableHead exercises={twoDaysDayOne} />{' '}
          <TableHead exercises={twoDaysDayTwo} />{' '}
        </div>
      ) : null}
      {daysPerWeek === 3 ? (
        <div>
          {' '}
          <TableHead exercises={threeDaysDayOne} />{' '}
          <TableHead exercises={threeDaysDayTwo} />{' '}
          <TableHead exercises={threeDaysDayThree} />{' '}
        </div>
      ) : null}
      {daysPerWeek === 4 ? (
        <div>
          {' '}
          <TableHead exercises={fourDaysDayOne} />{' '}
          <TableHead exercises={fourDaysDayTwo} />{' '}
          <TableHead exercises={fourDaysDayThree} />{' '}
          <TableHead exercises={fourDaysDayfour} />{' '}
        </div>
      ) : null}
      {daysPerWeek === 5 ? (
        <div>
          {' '}
          <TableHead exercises={fiveDaysDayOne} />{' '}
          <TableHead exercises={fiveDaysDayTwo} />{' '}
          <TableHead exercises={fiveDaysDayThree} />{' '}
          <TableHead exercises={fiveDaysDayfour} />{' '}
          <TableHead exercises={fiveDaysDayfive} />{' '}
        </div>
      ) : null}
    </div>
  );
}

function Form({ daysPerWeek, setDaysPerWeek }) {
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
          onChange={e => setDaysPerWeek(Number(e.target.value))}
        ></input>
      </form>
    </div>
  );
}

function TableHead({ exercises }) {
  console.log(exercises);
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
          {exercises.exercises.map(el => (
            <tr>
              <td key={el.id}>{el.name}</td>
              <td key={el.id}>{el.warmUpSets}</td>
              <td key={el.id}>{el.sets}</td>
              <td key={el.id}>{el.reps}</td>
              <td key={el.id}>{el.RPE}</td>
              <td key={el.id}>{el.restTime}</td>
              <td key={el.id}>{el.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
