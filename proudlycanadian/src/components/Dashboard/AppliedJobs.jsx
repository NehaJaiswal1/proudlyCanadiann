
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const AppliedJobs = ({ appliedJobs }) => {
  console.log(appliedJobs);
  const navigate = useNavigate();

  const handleViewDetails = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  return (
    <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <div style={{ textAlign: 'center', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
        <span style={{ color: '#1d4ed8', fontSize: '1.5rem', fontWeight: '700' }}>My Applied Jobs</span>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Company</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Job Title</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>NOC</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Opening</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Education</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Industry</TableCell>
            <TableCell style={{ textAlign: 'left', color: '#2d3748', fontSize: '1rem', backgroundColor: '#e2e8f0' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={job._id} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#e2e8f0' }}>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.company}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.jobTitle.split(' ').slice(0, 2).join(' ')}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.NOC}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.positionAvailable}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.education}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>{job.jobIndustry}</TableCell>
              <TableCell style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
                <Button style={{ fontSize: '12px' }} onClick={() => handleViewDetails(job._id)}>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppliedJobs;
