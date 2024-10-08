import './issue-form.scss';
import { FC, useState } from 'react';
import { SecurityFeaturesImages } from '../../text-mocks/playgrounds-security-section';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailPattern } from '../../constants/constants';

interface IssueFormFields {
  subject: string;
  issue: string;
  file: string;
  name: string;
  email: string;
  priority: string;
}

const enum PriorityOptions {
  high = 'High',
  low = 'Low',
}

const IssueForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormFields>({
    defaultValues: {
      subject: '',
      issue: '',
      file: '',
      name: '',
      email: '',
      priority: 'Priority',
    },
  });

  const [fileImages, setFileImages] = useState<string[]>([]);

  const getFilesLinks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const filePreviews: string[] = [];

    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          filePreviews.push(reader.result as string);
          if (filePreviews.length === files.length) {
            setFileImages(fileImages => [...filePreviews, ...fileImages]); //
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const formData: SubmitHandler<IssueFormFields> = data => console.log(data);

  return (
    <div className="issue-form-container">
      <h2 className="issue-form-title">Report an Issue</h2>
      <div className="issue-image-form-container">
        <img
          className="issue-image"
          src={SecurityFeaturesImages.issue}
          alt="issue-image"
        />
        <div className="form-container">
          <h2 className="issue-form-heading">Submit your ticket</h2>
          <form
            className="ticket-form"
            action="#"
            onSubmit={handleSubmit(formData)}
          >
            <label htmlFor="subject" className="form-subject">
              <p className="form-error">
                {errors.subject && errors.subject.message}
              </p>
              <input
                {...register('subject', {
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'Minimal lenght 5 symbols',
                  },
                })}
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="input-subject"
              />
            </label>
            <label htmlFor="issue" className="form-issue">
              <p className="form-error">
                {errors.issue && errors.issue.message}
              </p>
              <textarea
                {...register('issue', {
                  required: 'This field is required',
                  minLength: {
                    value: 10,
                    message: 'Minimal lenght 10 symbols',
                  },
                })}
                id="issue"
                name="issue"
                placeholder="Issue"
                className="input-issue"
              />
            </label>
            <div className="form-file-container">
              <p className="form-file-title">Images</p>
              <div className="form-images-container">
                {fileImages.map(image => {
                  return (
                    <img
                      className="image-preview"
                      key={image}
                      src={image}
                      alt="preview"
                    />
                  );
                })}
              </div>

              <label htmlFor="file" className="form-file-label">
                <input
                  {...register('file')}
                  className="form-file"
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*"
                  multiple
                  onChange={getFilesLinks}
                />
                <p>ADD IMAGE</p>
              </label>
            </div>
            <label htmlFor="name" className="form-name">
              <p className="form-error">{errors.name && errors.name.message}</p>
              <input
                {...register('name', {
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'Minimal lenght 5 symbols',
                  },
                })}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="input-name"
              />
              <p className="form-error">{errors.name && errors.name.message}</p>
            </label>
            <label htmlFor="email" className="form-email">
              <p className="form-error">
                {errors.email && errors.email.message}
              </p>
              <input
                {...register('email', {
                  required: 'This field is required',
                  minLength: {
                    value: 5,
                    message: 'Minimal lenght 5 symbols',
                  },
                  pattern: {
                    value: emailPattern,
                    message: 'This field must be email',
                  },
                })}
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="input-email"
              />
            </label>
            <label htmlFor="priority">
              <p className="form-error">
                {errors.priority && errors.priority.message}
              </p>
              <select
                {...register('priority', {
                  required: 'This field is required,please choose option',
                })}
                className="priority-select"
                name="priority"
                id="priority"
                defaultValue="Priority"
              >
                <option className="form-priority" value="Priority" disabled>
                  Priority
                </option>
                <option value={PriorityOptions.high}>
                  {PriorityOptions.high}
                </option>
                <option value={PriorityOptions.low}>
                  {PriorityOptions.low}
                </option>
              </select>
            </label>
            <input
              className="form-submit"
              type="submit"
              value="SUBMIT A TICKET"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;
