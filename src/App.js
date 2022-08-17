import { useState} from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult]= useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      (ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createdigits = () => {
    const digits = [];

    for(let i=1; i<10; i++){
      digits.push(
        <Button variant="outlined" 
        onClick={() => updateCalc(i.toString())}
         key={i}>{i}</Button>
      )
    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc === '') {
      return;
    }

    // const value = calc.slice(0, -1);
    const value = '';

    setCalc(value);

    const lol = "0";

    setResult(lol)
  }

  return (
    <Box sx={{ backgroundColor: 'primary.dark'}} >
      <div className="App">
        <div className="calculator">
          <div className="display">
            { result ? <span>({result})</span> : '' } &nbsp;
            { calc || "0"}
          </div>
          <Stack className="operators" direction="row" spacing={0.15}>
            <Button variant="contained" onClick={() => updateCalc('/')}>/</Button>
            <Button variant="contained" onClick={() => updateCalc('*')}>*</Button>
            <Button variant="contained" onClick={() => updateCalc('+')}>+</Button>
            <Button variant="contained" onClick={() => updateCalc('-')}>-</Button>

            <Button variant="contained" onClick={deleteLast}>DEL</Button>
          </Stack>

          <div className="digits">
            { createdigits() }
            <Button variant="outlined" onClick={() => updateCalc('0')}>0</Button>
            <Button variant="outlined" onClick={() => updateCalc('.')}>.</Button>
            <Button variant="outlined" onClick={calculate}>=</Button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default App;
