function Form() {
  return (
    <div className="form-group ">
    
    <label>Email </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter email"
    />
    <label>Password </label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Enter Password"
    />

  </div>
  )
}

export default Form; 