import React, {useState} from "react";
import apiURL from "../api";

function AddPage({setRefresh, setListView, setIsAddingPage }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    name: "",
    email: "",
    tags: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    setRefresh(false);
    try {
      await fetch(`${apiURL}/wiki`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setListView(true)
      setIsAddingPage(false)
      setRefresh(true)
    } catch (error) {
      console.log(error);
    }
    console.log(formData, "Formdata");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <div>
          <label>
            Title:
            <input
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
          </label>
        </div>
        <div>
          <label>
            Content:
            <input
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              value={formData.content}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
          </label>
        </div>
        <div>
          <label>
            Tags:
            <input
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              value={formData.tags}
            />
          </label>
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary">
          Create Page
        </button>
      </form>
    </>
  );
}

module.exports = AddPage;