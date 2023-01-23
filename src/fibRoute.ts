// Endpoint for querying the fibonacci numbers

import { fibonacci } from "./fib";

export default (req: {
  params: {
    num: string
  }
}, res: {
  send: (number) => void
}) => {
  const { num } = req.params;

  const fibN = (fibonacci as (number) => number)(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
