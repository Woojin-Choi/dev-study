import React, { useState, useSyncExternalStore } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.prevenrDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">이름</label>
      <input
        type="text"
        value={name}
        onChange={handleChangeName}
        id="nameInput"
      />
      <br />
      <label htmlFor="genderInput">성별</label>
      <select
        name="genderInput"
        id="genderInput"
        value={gender}
        onChange={handleChangeGender}
      >
        <option value="남자">남자</option>
        <option value="여자">여자</option>
      </select>
      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;
