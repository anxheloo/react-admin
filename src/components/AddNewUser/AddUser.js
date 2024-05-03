import React, { useEffect } from "react";

const AddUser = ({ setOpenModal }) => {
  useEffect(() => {
    // Store the initial overflow value
    const initialOverflow = document.body.style.overflow;

    // Disable scroll when the component mounts
    document.body.style.overflow = "hidden";

    // Enable scroll when the component is unmounted or when you want to enable scrolling again
    return () => {
      document.body.style.overflow = initialOverflow;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submited");
  };

  const handelChange = (event) => {};

  return (
    <div className=" fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(000,000,000,0.5)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] h-[400px] bg-mainBg p-7 rounded-md flex flex-col justify-between relative"
      >
        <div
          className="absolute top-2 right-3 font-bold cursor-pointer hover:opacity-85 active:opacity-70"
          onClick={() => setOpenModal(false)}
        >
          x
        </div>
        <h1 className="text-xl font-bold">Add new user</h1>

        <div className="flex flex-col w-full gap-4 justify-between ">
          <div className="addUserContainer">
            <div className="addUserInputsContainer">
              <label className="addUserLabel">Avatar</label>
              <input
                type="text"
                name="avatar"
                value={""}
                onChange={handelChange}
                placeholder="avatar"
                className="addUserInput"
              ></input>
            </div>

            <div className="addUserInputsContainer">
              <label className="addUserLabel">First name</label>
              <input
                type="text"
                name="firstName"
                value={""}
                onChange={handelChange}
                placeholder="firstName"
                className="addUserInput"
              ></input>
            </div>

            <div className="addUserInputsContainer">
              <label className="addUserLabel">Last name</label>
              <input
                type="text"
                name="lastName"
                value={""}
                onChange={handelChange}
                placeholder="lastName"
                className="addUserInput"
              ></input>
            </div>
          </div>

          <div className="addUserContainer">
            <div className="addUserInputsContainer">
              <label className="addUserLabel">Email</label>
              <input
                type="email"
                name="email"
                value={""}
                onChange={handelChange}
                placeholder="email"
                className="addUserInput"
              ></input>
            </div>
            <div className="addUserInputsContainer">
              <label className="addUserLabel">Phone</label>
              <input
                type="text"
                name="phone"
                value={""}
                onChange={handelChange}
                placeholder="phone"
                className="addUserInput"
              ></input>
            </div>
            <div className="addUserInputsContainer">
              <label className="addUserLabel">Create At</label>
              <input
                type="text"
                name="createdAt"
                value={""}
                onChange={handelChange}
                placeholder="createdAt"
                className="addUserInput"
              ></input>
            </div>
          </div>

          <div className="addUserContainer">
            <div className="addUserInputsContainer">
              <label className="addUserLabel">Verified</label>
              <input
                type="text"
                name="verified"
                value={""}
                onChange={handelChange}
                placeholder="verified"
                className="addUserInput"
              ></input>
            </div>

            {/* <div className="addUserInputsContainer">
              <input
                type="file"
                name="upload"
                value={""}
                onChange={handelChange}
                // className="addUserInput"
              ></input>
            </div> */}
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-mainColor text-darkColor hover:opacity-80 active:opacity-70"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default AddUser;
