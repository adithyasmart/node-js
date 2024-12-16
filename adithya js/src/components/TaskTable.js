import React from 'react';
import { Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';
import './TaskTable.css';

const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  const tableRef = React.useRef(null);

  React.useEffect(() => {
    const table = new Tabulator(tableRef.current, {
      data: tasks,
      layout: 'fitColumns',
      columns: [
        { title: 'Task ID', field: 'id', width: 100 },
        { title: 'Title', field: 'title', editor: 'input', cellEdited: (cell) => updateTask({ ...cell.getData(), title: cell.getValue() }) },
        { title: 'Description', field: 'description', editor: 'input', cellEdited: (cell) => updateTask({ ...cell.getData(), description: cell.getValue() }) },
        { title: 'Status', field: 'status', editor: 'select', editorParams: { values: { 'To Do': 'To Do', 'In Progress': 'In Progress', 'Done': 'Done' } }, cellEdited: (cell) => updateTask({ ...cell.getData(), status: cell.getValue() }) },
        { title: 'Actions', formatter: () => '<button class="btn btn-danger">Delete</button>', cellClick: (e, cell) => deleteTask(cell.getData().id) }
      ]
    });
    return () => table.destroy();
  }, [tasks]);

  return <div ref={tableRef} />;
};

export default TaskTable;
