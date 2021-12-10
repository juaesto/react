import React, { Component } from 'react';
// import { MediaBox } from "react-materialize";

export default class TaskForm extends Component {

    API = 'http://localhost:4000/tasks';

    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
            _id: '',
            tasks: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    addTask(e) {
        e.preventDefault();
        if (this.state._id) {
            fetch(`${this.API}/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: this.state.title,
                    description: this.state.description
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.M.toast({ html: 'Task Actualizada' });
                    this.setState({ _id: '', title: '', description: '' });
                    this.fetchTasks();
                });
        } else {
            fetch(this.API, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.M.toast({ html: 'Task Guardada' });
                    this.setState({ title: '', description: '' });
                    this.fetchTasks();
                })
                .catch(err => console.error(err));
        }
    }

    deleteTask(id) {
        if (window.confirm('¿Está seguro de borrarlo?')) {
            fetch(`${this.API}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.M.toast({ html: 'Task eliminada' });
                    this.fetchTasks();
                });
        }
    }

    editTask(id) {
        fetch(`${this.API}/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    title: data.title,
                    description: data.description,
                    _id: data._id
                });
            });
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks() {
        fetch(this.API)
            .then(res => res.json())
            .then(data => {
                this.setState({ tasks: data });
                console.log(this.state.tasks);
            });
    }

    render() {
        return (
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">APP Tasks</a>
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
                                                <input name="title" onChange={this.handleChange} value={this.state.title} type="text" placeholder="Task Title" autoFocus />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} value={this.state.description} cols="30" rows="10" placeholder="Task Description" className="materialize-textarea"></textarea>
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
                                        this.state.tasks.map(task => {
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