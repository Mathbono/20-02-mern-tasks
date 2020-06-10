import Tasks from '../models/tasks';

const origin = "http://localhost:3000";

export const createTask = async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", origin);
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	const text = req.body.text;
	console.log("REQUEST : ", text);
	const id = await Tasks.countDocuments();
	const task = new Tasks({
		text: text,
		id: id,
		//text: `Test ${id}`,
		deleted: false
	});
	task.save()
		.then((task) => {
			res.status(201).json({
				tasks: task,
				message: "Task saved successfully"
			});
		})
		.catch(() => {
			res.status(400).json({
				tasks: [],
				message: "Task failed to save"
			});
		});
};

export const getAllTasks = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", origin);
	Tasks.find({})
		.then((tasks) => {
			res.status(200).json({
				tasks: tasks,
				message: "Tasks retrieved successfully"
			});
		})
		.catch(() => {
			res.status(400).json({
				tasks: [],
				message: "Tasks failed to retrieve"
			});
		});
};

export const getTask = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", origin);
	Tasks.findOne({id: parseInt(req.params.id, 10)})
		.then((task) => {
			res.status(200).json({
				tasks: task,
				message: "Task retrieved successfully"
			});
		})
		.catch(() => {
			res.status(404).json({
				tasks: [],
				message: "Task failed to retrieve"
			});
		});
};

export const toggleTask = async (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", origin);
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, PUT");
/*
	Tasks.findOne({id: parseInt(req.params.id, 10)}, (err, task) => {
		task.deleted = !task.deleted;
		task.save()
			.then((task) => {
				res.status(201).json({
					tasks: task,
					message: "Task toggled successfully"
				});
			})
			.catch(() => {
				res.status(400).json({
					tasks: [],
					message: "Task failed to toggle"
				});
			});
	});
*/
	Tasks.findOne({id: parseInt(req.params.id, 10)})
		.then((task) => {
			const bool = task.deleted;
			console.log(bool);
			task.deleted = !bool;
			task.save()
				.then((task) => {
					res.status(201).json({
						tasks: task,
						message: "Task toggled successfully"
					});
				})
				.catch(() => {
					res.status(400).json({
						tasks: [],
						message: "Task failed to toggle"
					});
				})
		.catch(() => {
			res.status(400).json({
				tasks: [],
				message: "Task failed to retrieve before toggle"
			});
		});
	});
	/*
	const task = await Tasks.findOne({id: parseInt(req.params.id, 10)});
	const bool = task.deleted;

	Tasks.updateOne({id: parseInt(req.params.id, 10)}, {deleted: !bool})
		.then((task) => {
			res.status(201).json({
				tasks: task,
				message: "Task toggled successfully"
			});
		})
		.catch(() => {
			res.status(400).json({
				tasks: [],
				message: "Task failed to toggle"
			});
		});
	*/
}

export const cleanAllTasks = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", origin);
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE");
	Tasks.deleteMany({})
		.then(() => {
			res.status(200).json({
				tasks: [],
				message: "Tasks deleted successfully"
			});
		})
		.catch(() => {
			res.status(400).json({
				tasks: [],
				message: "Failed to clean tasks"
			});
		});
};
