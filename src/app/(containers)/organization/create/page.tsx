"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import { Labels, routeNames } from "@/static";
import { CreateOrganization } from "../createOrganization";
import { OrgDepartment } from "../createDepartment";
import { EditDepartment } from "../createDepartment/editDepartment";

const steps = [Labels.STEP_1, Labels.STEP_2];
const { START } = routeNames;

const CreateOrganizationComponent = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const status = useAppSelector((state) => state.status);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
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

  useEffect(() => {
    if (status.createOrganization && status.selectDepartments) {
      router.push(START);
    } else if (status.createOrganization) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container component="main" maxWidth="md">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};

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
                {Labels.STEP_HEADING}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <CreateOrganization step={handleNext} />}
              {activeStep === 1 && <OrgDepartment />}
              {activeStep === 2 && <EditDepartment />}
            </React.Fragment>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CreateOrganizationComponent;
