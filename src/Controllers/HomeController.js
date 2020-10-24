import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoALuno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Da Silva',
      email: 'pedro@email.com',
      idade: 112,
      peso: 300,
      altura: 2.30,
    });
    res.json(
      novoALuno,
    );
  }
}

export default new HomeController();
