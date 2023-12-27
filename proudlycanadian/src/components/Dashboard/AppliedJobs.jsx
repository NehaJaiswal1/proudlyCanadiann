
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const AppliedJobs = ({ appliedJobs }) => {
  return (
    <div>
      {appliedJobs.map((job, index) => (
        <Card key={index} style={{ marginBottom: '1rem', borderRadius: '1rem', boxShadow: '2px 2px 10px #888888', marginTop: '0.5rem' }}>

          <CardContent>
            <Typography variant="h7" component="div" className="text-gray-600 font-bold">
              {job.jobTitle}
            </Typography>
            <Typography component="div" className="text-gray-500 text-sm"> {job.jobDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="extrasmall" className="text-xs">View Details</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default AppliedJobs;
