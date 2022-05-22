import React, { Component } from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Editing,
} from 'devextreme-react/data-grid';

export default class HomeTasks extends Component {

  API = 'http://localhost:4000/tasks';

  constructor() {
    super();
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');

    this.state = {
      tasks: []
    }
  }

  logEvent(eventName, e) {
    if (eventName === 'RowRemoved') {
      this.deleteTask(e.key);
    }
    if (eventName === 'RowUpdated') {
      this.addTask(e.data);
    }
    if (eventName === 'RowInserted') {
      e.data._id = '';
      this.addTask(e.data);
    }
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

  addTask(task) {
    if (task._id) {
      fetch(`${this.API}/${task._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: task.title,
          description: task.description
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.fetchTasks();
        });
    } else {
      fetch(this.API, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ title: '', description: '' });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }
  }

  deleteTask(id) {
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
        this.fetchTasks();
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Tareas de casa</h2>

        <DataGrid
          className={'dx-card wide-card'}
          dataSource={this.state.tasks}
          showBorders={false}
          keyExpr="_id"
          focusedRowEnabled={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
          onRowUpdated={this.onRowUpdated}
          onRowRemoved={this.onRowRemoved}
          onRowInserted={this.onRowInserted}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />
          <Editing
            mode="row"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          />

          {/* <Column dataField={'_id'} width={90} hidingPriority={2} /> */}
          <Column
            dataField={'title'}
            width={500}
            caption={'Title'}
          />
          <Column
            dataField={'description'}
            caption={'Description'}
          />
        </DataGrid>
      </React.Fragment>
    );
  }
}
