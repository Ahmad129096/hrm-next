"use client";
import {
  Box,
  Card,
  Grid,
  Button,
  AppBar,
  Divider,
  Toolbar,
  Checkbox,
  Container,
  Typography,
  ButtonGroup,
  CardContent,
  FormControlLabel,
} from "@mui/material";
import { NewDepartment } from "./newDeparment";
import { NewDesignation } from "./newDesignation";
import { Labels } from "../../../../static";
import { SelectDepartment } from "../../Interfaces";

const { TYPE_SUBMIT } = Labels;

export const DepartmentForm = ({
  open,
  data,
  handleClose,
  handleSubmit,
  handleClickOpen,
  selectedDepartment,
  selectedDesignation,
  newDepartmentSubmit,
  DesignationHandleSubmit,
  handleDepartmentCheckboxChange,
  handleDesignationCheckboxChange,
}: SelectDepartment) => {
  return (
    <>
      <Container sx={{ marginTop: 5 }}>
        <Box sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}>
          <AppBar
            position="static"
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              color: "black",
            }}
          >
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Select Department & Designation
              </Typography>
              <ButtonGroup variant="text" aria-label="text button group">
                <NewDesignation
                  open={open}
                  departments={data}
                  handleClose={handleClose}
                  handleClickOpen={handleClickOpen}
                  DesignationHandleSubmit={DesignationHandleSubmit}
                />
                <NewDepartment newDepartmentSubmit={newDepartmentSubmit} />
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
        {data?.map((value: any) => (
          <Card
            key={value?.department._id}
            sx={{ maxWidth: "100%", marginBottom: 1 }}
          >
            <CardContent sx={{ marginLeft: 5, marginRight: 5 }}>
              <FormControlLabel
                control={
                  <>
                    <Checkbox
                      defaultChecked
                      checked={selectedDepartment.includes(
                        value?.department._id
                      )}
                      onChange={(event) =>
                        handleDepartmentCheckboxChange(
                          event,
                          value.department._id
                        )
                      }
                    />

                    <Typography gutterBottom variant="h5" component="div">
                      {value.department.Name}
                    </Typography>
                  </>
                }
                label={""}
              />
              <Divider />
              <br />

              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                {value?.designation?.map((val: any) => (
                  <Grid item xs={2} sm={4} md={4} key={val._id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedDesignation.includes(val._id)}
                          onChange={(event) =>
                            handleDesignationCheckboxChange(event, val._id)
                          }
                        />
                      }
                      label={val.Name}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {TYPE_SUBMIT}
        </Button>
      </Container>
    </>
  );
};
