import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import { message } from 'antd';
import axios from 'axios';

const UserCreation = () => {
    const createUserSchema = yup.object().shape({
        username: yup.string().required().min(5).max(15),
        password: yup.string().required().min(5).max(15),
        confirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref('password'), null], 'Password not matched'),
        selectRole: yup.string().required(),
      });
    
      const updateUserSchema = yup.object().shape({
        updateUsername: yup.string().required().min(5).max(15),
        updatePassword: yup.string().required().min(5).max(15),
        updateConfirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref('updatePassword'), null], 'Password not matched'),
        updateSelectRole: yup.string().required(),
      });
  
    const {
      register: createRegister,
      handleSubmit: createHandleSubmit,
      formState: { errors: createErrors },
      reset: createReset, // Add reset function for create form
    } = useForm({
      resolver: yupResolver(createUserSchema),
    });
  
    const {
      register: updateRegister,
      handleSubmit: updateHandleSubmit,
      formState: { errors: updateErrors },
      reset: updateReset, // Add reset function for update form
    } = useForm({
      resolver: yupResolver(updateUserSchema),
    });
  
    const onCreate = (data) => {
      const transformedData = {
        userName: data.username,
        password: data.password,
        userRole: data.selectRole,
      };
      console.log(transformedData);
      axios
        .post('http://localhost:8080/createUser/saveAdminUser', transformedData)
        .then((response) => {
          console.log(response.data);
          message.success('User created successfully!');
          createReset(); // Reset create form fields
        })
        .catch((error) => {
          console.error(error);
          message.error('An error occurred while creating the user.');
        });
    };
  
    const onUpdate = (data) => {
      const transformedData = {
        userName: data.updateUsername,
        password: data.updatePassword,
        userRole: data.updateSelectRole,
      };
      console.log(transformedData);
      axios
        .put('http://localhost:8080/createUser/update', transformedData)
        .then((response) => {
          console.log(response.data);
          message.success('User updated successfully!');
          updateReset(); // Reset update form fields
        })
        .catch((error) => {
          console.error(error);
          message.error('An error occurred while updating the user.');
        });
    };

  return (
    <React.Fragment>
      <div className="container text-start">
        <div className="row justify-content-evenly">
          <div className=" col-4">
            <h3>Create a User</h3>
            <form onSubmit={createHandleSubmit(onCreate)}>
              {/* Form 1 */}
              <div className="form-group">
                <label htmlFor="exampleInputUsername" className="p-2">
                  Create Username:
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter username"
                  {...createRegister('username')}
                />
                <p className="grammar-error">{createErrors.username?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Create Password:</label>
                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Enter password"
                  {...createRegister('password')}
                />
                <p className="grammar-error">{createErrors.password?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Confirm password"
                  {...createRegister('confirmPassword')}
                />
                <p className="grammar-error">{createErrors.confirmPassword?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Select Role:</label>
                <select className="form-control p-2" {...createRegister('selectRole')}>
                  <option>Admin</option>
                  <option>Delivery Section</option>
                  <option>Ware house</option>
                  <option>Packing Section</option>
                </select>
                <p className="grammar-error">{createErrors.selectRole?.message}</p>
              </div>
              <button className="btn btn-primary" type="submit">
                Create User
              </button>
            </form>
          </div>
          <div className="col-4">
            <h3>Update Details</h3>
            <form onSubmit={updateHandleSubmit(onUpdate)}>
              {/* Form 2 */}
              <div className="form-group">
                <label htmlFor="exampleInputUsername" className="p-2">
                  Enter the User name:
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter username"
                  {...updateRegister('updateUsername')}
                />
                <p className="grammar-error">{updateErrors.updateUsername?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Create new Password:</label>
                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Enter password"
                  {...updateRegister('updatePassword')}
                />
                <p className="grammar-error">{updateErrors.updatePassword?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Confirm password"
                  {...updateRegister('updateConfirmPassword')}
                />
                <p className="grammar-error">{updateErrors.updateConfirmPassword?.message}</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Select Role:</label>
                <select className="form-control p-2" {...updateRegister('updateSelectRole')}>
                  <option>Admin</option>
                  <option>Delivery Section</option>
                  <option>Ware house</option>
                  <option>Packing Section</option>
                </select>
                <p className="grammar-error">{updateErrors.updateSelectRole?.message}</p>
              </div>
              <button className="btn btn-primary" type="submit">
                Update User
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserCreation;
