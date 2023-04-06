import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../features/task/taskSlice";

function TaskForm() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const { title, text } = formData;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      title,
      text,
    };

    dispatch(createTask(taskData));
    setFormData((prevState) => ({
      ...prevState,
      title: "",
      text: "",
    }));
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Task</label>
            <input
              type="text"
              id="text"
              name="text"
              onChange={handleChange}
              value={text}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default TaskForm;
