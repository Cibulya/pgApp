import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormFields } from '../../interfaces/form-interface';

const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};

const Form: FC = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormFields>({
    defaultValues: {
      login: '',
      pass: '',
    },
  });
  const onSubmit: SubmitHandler<FormFields> = data => console.log(data);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        login: '',
        pass: '',
      });
    }
  }, [formState]);

  return (
    <form
      onClick={stopPropagation}
      onSubmit={handleSubmit(onSubmit)}
      className="login-form"
    >
      <h2 className="form-heading">LOGIN</h2>
      <label htmlFor="username/email" className="form-input-label">
        <span className="form-input-disc">UserName/email</span>
        <input
          {...register('login', {
            required: 'This field is required',
            minLength: {
              value: 1,
              message: 'Minimal length 1 symbols',
            },
          })}
          type="text"
          className="form-input"
          name="login"
          id="username/email"
        />
      </label>
      <label htmlFor="pass" className="form-input-label">
        <span className="form-input-disc">Password</span>
        <input
          {...register('pass', {
            required: 'This Field',
            minLength: {
              value: 1,
              message: 'Minimal length 1 symbols',
            },
          })}
          id="pass"
          type="text"
          className="form-input"
          name="pass"
        />
      </label>

      <input type="submit" value="LOGIN" className="form-submit-input" />
    </form>
  );
};

export default Form;
