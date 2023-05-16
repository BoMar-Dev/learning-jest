import { useState } from 'react';



const Login = () => {
  const [inputsFilled, setInputsFilled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputsFilled(value !== '' && name !== '');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic here
  }

  return (
    <main className="container">
      <form className="login" onSubmit={handleSubmit}>
        <h1>Real Example Testing</h1>
        <input
          className="input"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <button disabled={!inputsFilled}>LOGIN</button>
      </form>
    </main>
  );
};
export default Login