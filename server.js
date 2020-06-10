import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import tasksRoutes from './server/routes/tasks';

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/ma_bd',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connexion à MongoDB réussie'))
	.catch(() => console.log('Connexion à MongoDB échouée'))
;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/', tasksRoutes);

app.listen(port, () => {
	console.log(`Serveur démarré sur le port ${port}`);
	console.log(`http://localhost:${port}`);
})
