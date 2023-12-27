
// FileUploadForm.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const FileUploadForm = ({ fileUploadFormData, handleFileUploadInputChange, handleFileUpload }) =>{ 
  
  const [newSkill, setNewSkill] = useState('');
  const skillsArray = fileUploadFormData.skills || [];

  const handleSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleSkillKeyPress = (event) => {
   
    if (event.key === 'Enter' && newSkill.trim() !== '') {
     
      handleFileUploadInputChange({
        target: {
          name: 'skills',
          value: [...skillsArray, newSkill.trim()],
        },
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skillsArray];
    updatedSkills.splice(index, 1);

    handleFileUploadInputChange({
      target: {
        name: 'skills',
        value: updatedSkills,
      },
    });
  };


return (
  <form style={{
    padding: '30px', borderRadius: '8px', width: '450px', margin: 'auto', height: '100%',
    boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.2), -2px 2px 10px rgba(0, 0, 0, 0.1)'
  }}>
    <div className='text-center text-lg mb-8 font-bold text-gray-500 border-b-2 p-2'>
      Resume
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginRight: '8px', flex: 1 }}>
          <TextField
            label="Full Name"
            name="fullName"
            value={fileUploadFormData.fullName}
            onChange={handleFileUploadInputChange}
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

    </div>
    {/* About me */}
    <div className='text-sm mb-8 font-bold text-gray-500 border-b-2 p-2'>
      About Me
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginRight: '8px', flex: 1 }}>
          <TextField
            label="About Me"
            name="aboutMe"
            value={fileUploadFormData.aboutMe}
            onChange={handleFileUploadInputChange}
            fullWidth
            required
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}
            InputProps={{
              style: { height: '90px', padding: '1px', fontSize: 'small' },
            }}
          />
        </div>

      </div>

    </div>
    {/* Contact details */}

    <div className=' text-sm mb-8 font-bold text-gray-500 border-b-2 p-2'>
      Contact Details
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginRight: '8px', flex: 1 }}>
          <TextField
            label="Mobile No"
            name="mobileNo"
            value={fileUploadFormData.mobileNo}
            onChange={handleFileUploadInputChange}
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
          label="email"
          name="email"
          value={fileUploadFormData.email}
          onChange={handleFileUploadInputChange}
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
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginRight: '8px', flex: 1 }}>
          <TextField
            label="Linkedin Profile"
            name="linkedinProfile"
            value={fileUploadFormData.linkedinProfile}
            onChange={handleFileUploadInputChange}
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
          label="Github Profile"
          name="githubProfile"
          value={fileUploadFormData.githubProfile}
          onChange={handleFileUploadInputChange}
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
    <div style={{ marginRight: '8px', flex: 1 }}>
      <TextField
        label="Address"
        name="address"
        value={fileUploadFormData.address}
        onChange={handleFileUploadInputChange}
        fullWidth
        required
        InputLabelProps={{
          style: { fontSize: 'small' },
        }}
        InputProps={{
          style: { height: '50px', padding: '1px', fontSize: 'small' },
        }}
      />
    </div>
    <div className='text-sm mb-8 font-bold text-gray-500 border-b-2 p-2 mt-10'>
      Education Details
    </div>
    {/* High school */}
    <div className='text-xs mb-2 font-bold text-gray-500  mt-10'>
      High School
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>

      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Institute Name"
          name="highSchool.institute"
          value={fileUploadFormData.highSchool ? fileUploadFormData.highSchool.institute : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Passout Year"
          name="highSchool.passoutYear"
          value={fileUploadFormData.highSchool ? fileUploadFormData.highSchool.passoutYear : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1 }}>
        <TextField
          label="Percentage"
          name="highSchool.percentage"
          value={fileUploadFormData.highSchool ? fileUploadFormData.highSchool.percentage : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
          required
          type="number"  // To allow only numeric input
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
    </div>
    {/* Intermidiate school */}
    <div className='text-xs mb-2 font-bold text-gray-500  mt-10'>
      Intermediate School
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>

      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Institute Name"
          name="intermediate.institute"
          value={fileUploadFormData.intermediate ? fileUploadFormData.intermediate.institute : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Passout Year"
          name="intermediate.passoutYear"
          value={fileUploadFormData.intermediate ? fileUploadFormData.intermediate.passoutYear : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1 }}>
        <TextField
          label="Percentage"
          name="intermediate.percentage"
          value={fileUploadFormData.intermediate ? fileUploadFormData.intermediate.percentage : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
          required
          type="number" 
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
    </div>

    {/* UnderGraduation */}

    <div className='text-xs mb-2 font-bold text-gray-500  mt-10'>
      UnderGraduate
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>

      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Institute Name"
          name="ug.institute"
          value={fileUploadFormData.ug ? fileUploadFormData.ug.institute : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Passout Year"
          name="ug.passoutYear"
          value={fileUploadFormData.ug ? fileUploadFormData.ug.passoutYear : ''}
          onChange={handleFileUploadInputChange}
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
      <div style={{ flex: 1 }}>
        <TextField
          label="Percentage"
          name="ug.percentage"
          value={fileUploadFormData.ug ? fileUploadFormData.ug.percentage : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
          required
          type="number"  
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
    </div>

    {/* PostGraduation */}

    <div className='text-xs mb-2 font-bold text-gray-500  mt-10'>
      Post Graduation
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>

      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Institute Name"
          name="pg.institute"
          value={fileUploadFormData.pg ? fileUploadFormData.pg.institute : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
          
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
      <div style={{ flex: 1, marginRight: '8px' }}>
        <TextField
          label="Passout Year"
          name="pg.passoutYear"
          value={fileUploadFormData.pg ? fileUploadFormData.pg.passoutYear : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
         
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <TextField
          label="Percentage"
          name="pg.percentage"
          value={fileUploadFormData.pg ? fileUploadFormData.pg.percentage : ''}
          onChange={handleFileUploadInputChange}
          fullWidth
         
          type="number" 
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />
      </div>
    </div>

    {/* Job Experience */}

    <div className='text-sm mb-8 font-bold text-gray-500 border-b-2 p-2 mt-10'>
      Job Experience
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px', marginTop: '10px' }}>
      <div className='mb-3'>
        <label className='text-xs font-bold text-gray-500'>Select Experience Level</label>
        <select
          name="experienceLevel"
          value={fileUploadFormData.experienceLevel}
          onChange={handleFileUploadInputChange}
          style={{ height: '32px', fontSize: 'small', width: '100%' }}
        >
          <option value="fresher">Fresher</option>
          <option value="experience">Experience</option>
        </select>
      </div>

      {fileUploadFormData.experienceLevel === 'experience' && (
        <div>
          <TextField
            label="Company Name"
            name="companyName"
            value={fileUploadFormData.companyName}
            onChange={handleFileUploadInputChange}
            fullWidth
            required
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}
            InputProps={{
              style: { height: '42px', padding: '1px', fontSize: 'small' },
            }}
          />

          <TextField
            label="Work Details"
            name="workDetails"
            value={fileUploadFormData.workDetails}
            onChange={handleFileUploadInputChange}
            fullWidth
            required
            InputLabelProps={{
              style: { fontSize: 'small' },
            }}
            InputProps={{
              style: { height: '90px', padding: '1px', fontSize: 'small', marginTop:'10px' },
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', marginTop: '10px' }}>
            <div style={{ flex: 1, marginRight: '8px' }}>
              <TextField
                label="From Year"
                name="fromYear"
                value={fileUploadFormData.fromYear}
                onChange={handleFileUploadInputChange}
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
            <div style={{ flex: 1 }}>
              <TextField
                label="To Year"
                name="toYear"
                value={fileUploadFormData.toYear}
                onChange={handleFileUploadInputChange}
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
        </div>
      )}
    </div>

     {/* Skills */}
     <div className='text-sm mb-8 font-bold text-gray-500 border-b-2 p-2 mt-10'>
        Skills
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px', marginTop: '10px' }}>
        <TextField
          label="Skills"
          name="skills"
          value={newSkill}
          onChange={handleSkillChange}
          onKeyPress={handleSkillKeyPress}
          fullWidth
          InputLabelProps={{
            style: { fontSize: 'small' },
          }}
          InputProps={{
            style: { height: '42px', padding: '1px', fontSize: 'small' },
          }}
        />

        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}>
          {skillsArray.map((skill, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '6px',
                  marginRight: '6px',
                  marginBottom: '6px',
                }}
              >
                {skill}
                <button
                type="button"
                onClick={() => handleRemoveSkill(index)}
                style={{
                  cursor: 'pointer',
                  marginLeft: '4px',
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              >
                &#x2715;
              </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Achievement */}
      <div className=' text-sm mb-8 font-bold text-gray-500 border-b-2 p-2'>
      Achievements
    </div>
    <div style={{ marginRight: '8px', flex: 1 }}>
      <TextField
        label="Achievements"
        name="achievements"
        value={fileUploadFormData.achievements}
        onChange={handleFileUploadInputChange}
        fullWidth
        required
        InputLabelProps={{
          style: { fontSize: 'small' },
        }}
        InputProps={{
          style: { height: '50px', padding: '1px', fontSize: 'small' },
        }}
      />
    </div>


    <div className='mt-10 mb-10'>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFileUpload}
      >
        Upload
      </Button>
    </div>
  </form>
);
};
export default FileUploadForm;
