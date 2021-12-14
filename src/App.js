import "./styles.css";

export default function App() {
  function formSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <>
        <form onSubmit={formSubmit}>
          <h1>SpringCT Test</h1>
          <label>User Name :</label>
          <input type="text" placeholder="username" required />
          <br />
          <br />
          <label>Password :</label>
          <input type="password" placeholder="password" required />
          <br />
          <br />
          <label>ID :</label>
          <input type="email" placeholder="email" />
          <br />
          <br />
          <label>Phone number :</label>
          <input type="number" placeholder="number" maxLength="10" />
          <br />
          <br />
          <label>Role :</label>
          <input type="checkbox" />
          Admin
          <input type="checkbox" />
          Normal
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    </div>
  );
}
