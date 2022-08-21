import React from 'react';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
export default function Users (){
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem('auth', '');
        navigate(`/login`);
    }
    const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const BoxStyle=styled(Box)((theme)=>({
    width: 400,
        height: 300,
        backgroundColor: 'green',
        borderRadius: 20,
        '& .MuiBox-thumb':{
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        }},
        ['@media (min-width:780px)']: {
            backgroundColor: 'red',
          }

  }))
  const myBox={
    width: 200,
    height: 300,
    backgroundColor: 'blue',
    "&:hover": {
        backgroundColor: "rgba(255,240,10,0.8)",
      },
  }
  const handleApi = async () =>{
    fetch('http://laravel.test/api', {
      method: "GET",
      headers: {"Authorization": `Bearer 37b3mWZ9BHc....LRZwbTnYBKtcQss`}
    }).then(res => res.json()).then(json => setResult(json));
  }
    return(
        <div className="flex flex-col w-full justify-center items-center">
            <h2>Users Page using Material UI</h2>
            <h1 className="heading">Users Page loads after authentication</h1>
            <button onClick={()=>handleLogout()}>Logout</button>

            <BoxStyle />
            <Box sx={myBox}/>
            <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: {
            xs: 'orange',
            sm: 'red',
            md: 'green',
            lg: 'black'
          },
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />

            <Box sx={{width: '50%', maxWidth: 500, background: 'lightBlue', borderRadius: '20px', textAlign: 'center'}}>
                <Typography variant='h1'>
                    h1. heading
                </Typography>
                <Typography variant='h2'>
                    h2. heading
                </Typography>
                <Typography variant='body2' fontWeightBold sx={{fontFamily: 'myfont'}} aria-label="left aligned">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
                </Typography>
            </Box>
            <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel disabled control={<Checkbox size='small'/>} label="Disabled" />
    </FormGroup>
    <Badge badgeContent={4} color="success">
    <MailIcon color="action" />
    </Badge>


    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Your Step {activeStep + 1}</Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
          <Button onClick={handleApi}>
            Call Api
          </Button>
        </React.Fragment>
      )}
    </Box>
        </div>
    );
}