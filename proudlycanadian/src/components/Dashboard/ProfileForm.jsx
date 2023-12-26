// ProfileForm.jsx
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const ProfileForm = ({ formData, handleInputChange, handleProfileSave, handleProfileCancel }) => (
    <form style={{
        padding: '30px', borderRadius: '8px', width: '450px', margin: 'auto', height: '90%',
        boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
    }}>

        <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
            Personal Information
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ marginRight: '8px', flex: 1 }}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName} 
                        onChange={handleInputChange}
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
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
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

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ marginRight: '8px', flex: 1 }}>
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ marginRight: '8px', flex: 1 }}>
                    <TextField
                        label="Applicant Id"
                        name="applicantId"
                        value={formData.applicantId}
                        onChange={handleInputChange}
                        fullWidth
                        required
                        inputProps={{ readOnly: true }}
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
                    label="Mobile No"
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={handleInputChange}
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
        <div style={{ marginBottom: '16px' }}>
            <TextField
                label="Job Category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                fullWidth
                required
                InputLabelProps={{
                    style: { fontSize: 'small' },
                }}
                InputProps={{
                    style: { height: '42px', padding: '1px', fontSize: 'small', width: '98%', },
                }}
            />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ marginRight: '8px', flex: 1 }}>
                    <TextField
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
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
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
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
        <div style={{ marginBottom: '16px' }}>
            <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
                required
                InputLabelProps={{
                    style: { fontSize: 'small' },
                }}
                InputProps={{
                    style: { height: '42px', padding: '1px', fontSize: 'small', width: '98%', },
                }}
            />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px', marginBottom: '25px' }}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#1e3a8a', color: '#fff', width: '100%', marginRight: '8px',marginBottom: '10px' }}
                onClick={handleProfileSave}
            >
                Save
            </Button>
            <Button
                variant="contained"
                style={{ backgroundColor: '#1e3a8a', color: '#fff', width: '100%',marginBottom: '10px' }}
                onClick={handleProfileCancel}
            >
                Cancel
            </Button>


        </div>
    </form>
);

export default ProfileForm;
