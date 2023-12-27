
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const ChangePassword = ({ changePasswordFormData, handleChangePasswordInputChange, handleChangePasswordUpdate, handleChangePasswordCancel }) => (
    <form style={{
        padding: '30px', borderRadius: '8px', width: '450px', margin: 'auto', height: '80%',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
    }}>

        <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
            Change Password
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ marginRight: '8px', flex: 1 }}>
                    <TextField
                        label="Old Password"
                        name="oldPassword"
                        value={changePasswordFormData.oldPassword}
                        
                        onChange={handleChangePasswordInputChange}
                        fullWidth
                        required
                        InputLabelProps={{
                            style: { fontSize: 'small' },
                        }}
                        InputProps={{
                            style: { height: '42px', padding: '1px', fontSize: 'small' },
                        }}
                    />
                </div>

            </div>
            <div style={{ flex: 1 }}>
                <TextField
                    label="newPassword"
                    name="newPassword"
                    value={changePasswordFormData.newPassword}
                    onChange={handleChangePasswordInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                        style: { fontSize: 'small' },
                    }}
                    InputProps={{
                        style: { height: '42px', width: '96%', padding: '1px', fontSize: 'small' },
                    }}
                />
            </div>
        </div>
        <div style={{ flex: 1 }}>
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    value={changePasswordFormData.confirmPassword}
                    onChange={handleChangePasswordInputChange}
                    fullWidth
                    required
                    InputLabelProps={{
                        style: { fontSize: 'small' },
                    }}
                    InputProps={{
                        style: { height: '42px', width: '96%', padding: '1px', fontSize: 'small' },
                    }}
                />
            </div>

       
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px', marginBottom: '25px' }}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#1e3a8a', color: '#fff', width: '100%', marginRight: '8px',marginBottom: '10px' }}
                onClick={handleChangePasswordUpdate}
            >
                Save
            </Button>
            <Button
                variant="contained"
                style={{ backgroundColor: '#1e3a8a', color: '#fff', width: '100%',marginBottom: '10px' }}
                onClick={handleChangePasswordCancel}
            >
                Cancel
            </Button>


        </div>
    </form>
);

export default ChangePassword;
