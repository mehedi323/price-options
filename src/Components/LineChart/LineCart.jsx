import { LineChart, Line } from 'recharts';

const LineCart = () => {
  const mathMarksData = [
    {id:1, name: 'alice', math: 78},
    {id:2, name: 'jalia', math: 95},
    {id:3, name: 'kaliya', math: 68},
    {id:4, name: 'mailiya', math: 58},
    {id:5, name: 'taliya', math: 57},
    {id:6, name: 'daliya', math: 99},
    {id:7, name: 'uliya', math: 77},
  ];
  return (
    <div>
      <LineChart width={400} height={400} data={mathMarksData}>
        <Line dataKey={'math'}></Line>
      </LineChart>
    </div>
  );
};

export default LineCart;