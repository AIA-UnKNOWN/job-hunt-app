import useRegisterForm from './hook';

const RegisterForm = ({ onSubmit }) => {
  const {
    firstname, setFirstname,
    lastname, setLastname,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword
  } = useRegisterForm();

  return (
    <div className="p-4 m-4 border border-black">
      <div className="mb-2 flex">
        <div className="mr-1">
          <label className="text-[14px] ml-1 mb-1 block">Firstname</label>
          <input
            className="block w-full rounded-md h-[40px] bg-light-gray"
            name="first_name"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
        </div>
        <div className="ml-1">
          <label className="text-[14px] ml-1 mb-1 block">Lastname</label>
          <input
            className="block w-full rounded-md h-[40px] bg-light-gray"
            name="last_name"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="text-[14px] ml-1 mb-1 block">Email</label>
        <input
          className="block w-full rounded-md h-[40px] bg-light-gray"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="text-[14px] ml-1 mb-1 block">Password</label>
        <input
          className="block w-full rounded-md h-[40px] bg-light-gray"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="text-[14px] ml-1 mb-1 block">Confirm Password</label>
        <input
          className="block w-full rounded-md h-[40px] bg-light-gray"
          type="password"
          name="password_confirmation"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-black text-white block h-[50px] w-full rounded-md mt-8"
        onClick={() => onSubmit({
          firstname, lastname, email, password, confirmPassword
        })}
      >
        Submit
      </button>
    </div>
  );
}

export default RegisterForm;