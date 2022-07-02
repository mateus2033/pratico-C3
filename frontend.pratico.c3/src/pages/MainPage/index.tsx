import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getEmpresas} from '../../services/http';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Dev Web II
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const divStyle = {
  margin: '10px',
  padding: '10px',
  border: '1px solid #ccc',
  boxShadow: "2px 2px 2px #9E9E9E",
  borderRadius: 5,
}; 

const td = {
  width:'350px',
  height:'30px',
  border: '1px solid #ccc'
};

const tr = {

 borderRadius: 2,
 border: '1px solid  #9E9E9E',
 width:'350px',
  
};

const h3 = {
  textAlign:'center'
};

const theme = createTheme();
export default function MainPage() {


  var [botao1, setBotao1] = useState(false);
  var [empresas, setEmpresas] = useState();
 
  async function informations() {
    
    if (botao1) {
      const empresas = await getEmpresas();
      setEmpresas(empresas.data)
      setBotao1(false);
    }
  }

  informations();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Aplicação de dev web II
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm"> 
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom> Logo </Typography>

   
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">

              <Button variant="contained" color="warning" onClick={() => {
                setBotao1(true);
              }}>Exibir Empresas</Button>

            </Stack>
          </Container>
        </Box>


        <Container maxWidth="sm"> 

          <div style={divStyle }> 
          <h3 style={h3}>Empresas</h3>
          <table>
            <thead>
              <tr>
                <th style={tr}>Nome</th>
                <th style={tr}>Site</th>
              </tr>
            </thead>
            <tbody>
              {empresas && empresas.map(empresa =>
                <tr key={empresa.id}>
                
                  <td style={td}>{empresa.nome}</td>
                  <td style={td}>{empresa.site}</td>
                  
                </tr>
              )}
            </tbody>
          </table>

        </div>
        </Container>

      
      </main>
   
    </ThemeProvider >
  );
}