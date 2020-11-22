import app from './app';

const porta = '3001';
app.listen(porta, () => {
  console.log(`Escutando na porta ${porta}`);
});
