import React from "react";

function TaskForm() {
  return (
    <>
      <section className="form">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="text">Task</label>
            <input type="text" id="text" name="text" />
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
