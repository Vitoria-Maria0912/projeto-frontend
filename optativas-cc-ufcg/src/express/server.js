import express from 'express';

const app = express();
app.use(express.json());

app.post('/protected/disciplines', (req, res) => disciplineController.createDiscipline());
app.delete('/protected/disciplines/:id', (req, res) => disciplineController.deleteDiscipline());
app.put('/protected/disciplines/:id', (req, res) => disciplineController.updateDiscipline());
app.get('/protected/disciplines/:id', (req, res) => disciplineController.getAllDisciplines());
app.get('/disciplines', (req, res) => disciplineController.getAllDisciplines());