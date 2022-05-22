import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import TaskService from '../services/TaskService';

export default class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.addTask = this.addTask.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            title: '',
            description: '',
            id: '',
            tasks: [],
            logout: false
        };
    }

    async componentDidMount() {
        await this.getAllTasks();
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    addTask(e) {
        e.preventDefault();
        if (this.state.id) {
            const task = {
                id: this.state.id,
                title: this.state.title,
                description: this.state.description
            }

            TaskService.update(task, this.state.id)
                .then((response) => {
                    window.M.toast({ html: 'Task Actualizada' });
                    this.setState({ id: '', title: '', description: '' });
                    this.getAllTasks();
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            const task = {
                title: this.state.title,
                description: this.state.description
            }

            TaskService.create(task)
                .then((response) => {
                    window.M.toast({ html: 'Task Guardada' });
                    this.setState({ title: '', description: '' });
                    this.getAllTasks();
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    deleteTask(id) {
        if (window.confirm('¿Está seguro de borrarlo?')) {
            TaskService.delete(id)
                .then((response) => {
                    console.log(response.data);
                    window.M.toast({ html: 'Task eliminada' });
                    this.getAllTasks();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    editTask(id) {
        const task = {
            title: this.state.title,
            description: this.state.description
        }

        TaskService.get(id)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                });
            });
    }

    async getAllTasks() {
        await TaskService.getAll()
            .then(response => {
                this.setState({ tasks: response.data });
                // console.log(this.state.tasks);
            });
    }

    logout() {
        AuthService.logout();
        this.setState({ logout: true });
    }

    render() {
        let { logout } = this.state;
        return (
            <div>
                {/* NAVIGATION */}
                {logout && (
                    <Navigate to="/" replace={true} />
                )}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">APP Tasks TSX</a>
                            <button onClick={this.logout} style={{ float: 'right', marginTop: '10px' }} className="btn light-yellow darken-4">
                                LOGOUT
                            </button>
                        </div>
                        <div>

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
                                                <tr key={task.id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button onClick={() => this.deleteTask(task.id)} className="btn light-blue darken-4">
                                                            <span className="material-icons">delete</span>
                                                        </button>
                                                        <button onClick={() => this.editTask(task.id)} className="btn light-blue darken-4" style={{ margin: '4px' }}>
                                                            <span className="material-icons">edit</span>
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