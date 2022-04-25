import useLoginForm from './hook';

const LoginForm = ({ onSubmit, loginButtonText }) => {
  const {
    email, setEmail,
    password, setPassword,
    formError,
    validate
  } = useLoginForm();

  return (
    <div className="p-4 m-4 border border-black">
      <div className="mb-2">
        <label className="text-[14px] ml-1 mb-1 block">Email</label>
        <input
          className="block w-full rounded-md h-[40px] bg-light-gray px-2"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {formError.email && (
          <span className="text-red text-[13px]">{formError.email}</span>
        )}
      </div>
      <div className="mb-2">
        <label className="text-[14px] ml-1 mb-1 block">Password</label>
        <input
          className="block w-full rounded-md h-[40px] bg-light-gray px-2"
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {formError.password && (
          <span className="text-red text-[13px]">{formError.password}</span>
        )}
      </div>
      <button
        className="bg-black text-white block h-[50px] w-full rounded-md mt-8"
        onClick={() => {
          if (!validate()) return;
          onSubmit({ email, password });
        }}
      >
        {loginButtonText || 'Login'}
      </button>
    </div>
  );
}

export default LoginForm;