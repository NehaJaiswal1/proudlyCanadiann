
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const AppliedJobs = ({ appliedJobs }) => {
  console.log(appliedJobs);

  return (
    <TableContainer component={Paper}>
      <div>My Applied Jobs</div>
      <Table>
        
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Date Applied</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={job._id}>
              <TableCell>{job.jobTitle}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>
                <Button size="small" className="text-xs">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppliedJobs;
