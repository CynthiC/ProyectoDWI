import React from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

function Login() {
  return (
    <div className='login'>
          <Container maxWidth='xs' margin>
            <h3>Bienvenido Inicia Sesion</h3>
              <TextField id="outlined-basic" label="Email" variant="outlined" type='email' />
              <TextField id="outlined-basic" label="Contrasena" variant="outlined" type='password' />
              <Button variant="contained">Iniciar Sesion</Button>
              <Button variant="contained">Registrarse</Button>
          </Container>
    </div>
  )
}

export default Login