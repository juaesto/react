import { ChangeEvent, Component } from 'react';
import TaskService from '../services/task.service';
import ITask from '../types/task.type';

type Props = {};

type State = ITask & {
    tasks: Array<ITask>
};

export default class TaskForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            _id: '',
            tasks: []
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    async componentDidMount() {
        await this.getAllTasks();
    }

    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e: ChangeEvent<HTMLTextAreaElement>) {
        this.setState({
            description: e.target.value
        });
    }

    public addTask(e: any) {
        e.preventDefault();
        if (this.state._id) {
            const task: ITask = {
                _id: this.state._id,
                title: this.state.title,
                description: this.state.description
            }

            TaskService.update(task, this.state._id)
                .then((response: any) => {
                    window.M.toast({ html: 'Task Actualizada' });
                    this.setState({ _id: '', title: '', description: '' });
                    this.getAllTasks();
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        } else {
            const task: ITask = {
                title: this.state.title,
                description: this.state.description
            }

            TaskService.create(task)
                .then((response: any) => {
                    window.M.toast({ html: 'Task Guardada' });
                    this.setState({ title: '', description: '' });
                    this.getAllTasks();
                    console.log(response.data);
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    }

    deleteTask(id: any | null) {
        if (window.confirm('¿Está seguro de borrarlo?')) {
            TaskService.delete(id)
                .then((response: any) => {
                    console.log(response.data);
                    window.M.toast({ html: 'Task eliminada' });
                    this.getAllTasks();
                })
                .catch((e: Error) => {
                    console.log(e);
                });
        }
    }

    editTask(id: any | null) {
        const task: ITask = {
            title: this.state.title,
            description: this.state.description
        }

        TaskService.get(id)
            .then((response: any) => {
                console.log(response.data);
                this.setState({
                    _id: response.data._id,
                    title: response.data.title,
                    description: response.data.description,
                });
            });
    }

    public async getAllTasks() {
        await TaskService.getAll()
            .then(response => {
                this.setState({ tasks: response.data });
                // console.log(this.state.tasks);
            });
    }

    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">APP Tasks TSX</a>
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.onChangeTitle} value={this.state.title} type="text" placeholder="Task Title" autoFocus />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.onChangeDescription} value={this.state.description} placeholder="Task Description" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map((task) => {
                                            return (
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{ margin: '4px' }}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}