import app from './app';

const porta = '3005';
app.listen(porta, () => {
  console.log(`Escutando na porta ${porta}`);
});
