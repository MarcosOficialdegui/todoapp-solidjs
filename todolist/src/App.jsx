import { createSignal } from 'solid-js';
import './App.css';

function App() {
  // Estado de las tareas
  const [tasks, setTasks] = createSignal([]);

  const [newTask, setNewTask] = createSignal("");

  // Nueva tarea
  const addTask = (e) => {
    e.preventDefault();
    if (newTask().trim()) {
      setTasks([
        ...tasks(),
        { id: tasks().length + 1, text: newTask(), completed: false }
      ]);
      setNewTask("");
    }
  };

  // Tarea c
  const toggleTask = (id) => {
    setTasks(
      tasks().map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks().filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>

      {/* Formulario para añadir nuevas tareas */}
      <form onSubmit={addTask}>
        <input class="input1-class"
          type="text"
          placeholder="Añadir nueva tarea"
          value={newTask()}
          onInput={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>

      {/* Lista de tareas */}
      <ul>
        {tasks().map(task => (
          <li  style={{
            textDecoration: task.completed ? 'line-through' : 'none'
          }} key={task.id}>
            <div>

              <div class="elements-class">
                
                <input
                  type="checkbox"
                  class="input2-class"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <p class="textoDentro-class">{task.text} </p>
                  

              </div>
              
              <div>
                <button onClick={() => deleteTask(task.id)}>Eliminar</button>
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
