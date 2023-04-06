import { useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div>{new Date(task.createdAt).toLocaleString("en-US")}</div>
      <h2>{task.title}</h2>
      <h3>{task.text}</h3>
      <button className="close" onClick={() => dispatch(deleteTask(task._id))}>
        X
      </button>
    </div>
  );
}

export default TaskItem;
