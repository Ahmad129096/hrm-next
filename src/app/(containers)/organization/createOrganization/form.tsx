"use client";
import { Fragment, useState } from "react";
import {
  CssBaseline,
  TextField,
  Box,
  Grid,
  Container,
  MenuItem,
  Autocomplete,
  CircularProgress,
  Paper,
  IconButton,
} from "@mui/material";

import {
  Icons,
  MenuField,
  ButtonX,
  InputField,
  FormikForm,
  SkeletonLoader,
} from "@/shared";

import { Field, Form, ErrorMessage } from "formik";
import { Labels, Content } from "@/static";

import { OrganizationProps } from "../../Interfaces";
import { OrganizationValidation } from "@/app/(auth)/Validation/organizationValidation";

export const CreateOrgForm = ({
  deleteImage,
  uploadImage,
  handleSubmit,
  initialValue,
  data,
  check,
  img,
  countries,
  states,
  getCountries,
  getStates,
  getCities,
  cities,
  isLoading,
}: OrganizationProps) => {
  const { RxCross1 } = Icons;

  const {
    ESTABLISHED_YEAR,
    ORGANIZATION_NAME,
    ORGANIZATION_CATEGORY,
    ZIP_CODE,
    COUNTRY,
    CITY,
    STATE,
    ORG_DOMAIN,
    ORG_EMAIL,
    ORG_PHONE,
    REGISTER,
    TYPE_FILE,
    TYPE_MONTH,
    TYPE_TEL,
    TYPE_URL,
    TYPE_ZIP,
    MARGIN,
    FIELD_SIZE,
    TYPE_EMAIL,
    PLEASE_WAIT,
  } = Labels;
  const { organization_image } = Content;
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [statesOpen, setStatesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  const loadingCountries = countriesOpen && countries.length === 0;
  const loadingState = statesOpen && states.length === 0;
  const loadingCities = citiesOpen && cities.length === 0;

  return (
    <FormikForm
      initialValues={initialValue}
      validationSchema={OrganizationValidation}
      onSubmit={handleSubmit}
      FormData={(props: any) => {
        return (
          <>
            <br />
            {data.length !== 0 ? (
              <Form autoComplete="off">
                <Container component="main" maxWidth="xs">
                  <CssBaseline />

                  <Paper
                    style={{
                      height: "100%",
                      width: "120%",
                      padding: "30px 40px 40px 50px",
                    }}
                    elevation={24}
                  >
                    <Box
                      sx={{
                        marginTop: 0,
                        marginBottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                        style={{ position: "relative", alignItems: "center" }}
                      >
                        <input
                          hidden
                          accept="image/*"
                          onChange={(e: any) => {
                            uploadImage(e);
                          }}
                          type={TYPE_FILE}
                        />
                        {isLoading ? (
                          <CircularProgress
                            style={{ height: "100px", width: "100px" }}
                          />
                        ) : (
                          <img
                            style={{
                              height: "100px",
                              width: "100px",
                              borderRadius: "80px",
                            }}
                            src={!img ? organization_image : img.Location}
                            loading="lazy"
                            alt=""
                          />
                        )}
                      </IconButton>
                      {!img ? (
                        ""
                      ) : (
                        <RxCross1
                          style={{
                            position: "absolute",
                            right: "20vh",
                            top: "0vh",
                          }}
                          onClick={deleteImage}
                        />
                      )}
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid container spacing={0.5}>
                          <InputField
                            margin={MARGIN}
                            required
                            fullWidth
                            id="organizationName"
                            size={FIELD_SIZE}
                            label={ORGANIZATION_NAME}
                            name="organizationName"
                            autoComplete="name"
                            helperText="organizationName"
                            error={
                              props.errors.organizationName &&
                              props.touched.organizationName
                            }
                            disabled={check}
                          />
                          <MenuField
                            margin={MARGIN}
                            required
                            fullWidth
                            name="organizationTypeId"
                            label={ORGANIZATION_CATEGORY}
                            size={FIELD_SIZE}
                            id="organizationTypeId"
                            helperText="organizationTypeId"
                            error={
                              props.errors.organizationTypeId &&
                              props.touched.organizationTypeId
                            }
                            disabled={check}
                            menuData={data.map((option: any) => (
                              <MenuItem key={option?._id} value={option?._id}>
                                {option?.organizationCategory}
                              </MenuItem>
                            ))}
                          />

                          <Grid item xs={10} sm={6}>
                            <InputField
                              margin={MARGIN}
                              required
                              fullWidth
                              name="zipCode"
                              label={ZIP_CODE}
                              size={FIELD_SIZE}
                              type={TYPE_ZIP}
                              id="zipCode"
                              helperText={<ErrorMessage name="zipCode" />}
                              error={
                                props.errors.zipCode && props.touched.zipCode
                              }
                              disabled={check}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Autocomplete
                              size="small"
                              onOpen={() => {
                                setCountriesOpen(true);
                              }}
                              onClose={() => {
                                setCountriesOpen(false);
                              }}
                              isOptionEqualToValue={(option: any, value) =>
                                option?._id === value._id
                              }
                              getOptionLabel={(option: any) => option?.name}
                              options={countries}
                              loading={loadingCountries}
                              renderInput={(params) => (
                                <Field
                                  key={
                                    props.values.country
                                      ? props.values.country._id
                                      : "empty"
                                  }
                                  as={TextField}
                                  name="country"
                                  margin={MARGIN}
                                  required
                                  {...params}
                                  label={COUNTRY}
                                  onSelect={() => {
                                    if (loadingCountries) {
                                      getCountries();
                                    }
                                  }}
                                  InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                      <Fragment>
                                        {loadingCountries ? (
                                          <CircularProgress
                                            color="inherit"
                                            size={20}
                                          />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                      </Fragment>
                                    ),
                                  }}
                                  helperText={<ErrorMessage name="country" />}
                                  error={
                                    props.errors.country &&
                                    props.touched.country
                                  }
                                  disabled={check}
                                />
                              )}
                              onChange={(_event: any, newValue: any | null) => {
                                getStates(newValue);
                                props.setFieldValue("country", newValue?._id);
                              }}
                              onInputChange={(_event: any, newValue: any) => {
                                props.setFieldValue("country", newValue);
                                props.setFieldValue("city", "");
                                props.setFieldValue("province", "");
                                props.setFieldTouched("province", false);
                                props.setFieldTouched("city", false);
                                props.setFieldTouched("country", false);
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Autocomplete
                              key={
                                props.values.country
                                  ? props.values.country._id
                                  : "empty"
                              }
                              id="province"
                              size="small"
                              onOpen={() => {
                                setStatesOpen(true);
                              }}
                              onClose={() => {
                                setStatesOpen(false);
                              }}
                              isOptionEqualToValue={(option: any, value) =>
                                option?._id === value._id
                              }
                              getOptionLabel={(option: any) => option?.name}
                              options={states}
                              loading={loadingState}
                              renderInput={(params) => (
                                <div style={{ position: "relative" }}>
                                  <Field
                                    as={TextField}
                                    name="province"
                                    required
                                    margin={MARGIN}
                                    {...params}
                                    label={STATE}
                                    InputProps={{
                                      ...params.InputProps,
                                      endAdornment: (
                                        <Fragment>
                                          {loadingState ? (
                                            <CircularProgress
                                              color="inherit"
                                              size={20}
                                              style={{
                                                position: "absolute",
                                                top: "25%",
                                                right: 40,
                                                transform: "translateY(-50%)",
                                              }}
                                            />
                                          ) : null}
                                          {params.InputProps.endAdornment}
                                        </Fragment>
                                      ),
                                    }}
                                    helperText={
                                      <ErrorMessage name="province" />
                                    }
                                    error={
                                      props.errors.province &&
                                      props.touched.province
                                    }
                                    disabled={check}
                                  />
                                </div>
                              )}
                              onChange={(_event: any, newValue: any | null) => {
                                getCities(newValue);
                                props.setFieldValue("province", newValue?._id);
                              }}
                              onInputChange={(_event: any, newValue: any) => {
                                props.setFieldValue("province", newValue);
                                props.setFieldValue("city", "");
                                props.setFieldTouched("city", false);
                                props.setFieldTouched("province", false);
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Autocomplete
                              key={
                                props.values.province
                                  ? props.values.province._id
                                  : "empty"
                              }
                              id="city"
                              size="small"
                              onOpen={() => {
                                setCitiesOpen(true);
                              }}
                              onClose={() => {
                                setCitiesOpen(false);
                              }}
                              isOptionEqualToValue={(option: any, value) =>
                                option?._id === value._id
                              }
                              getOptionLabel={(option: any) => option?.name}
                              options={cities}
                              loading={loadingCities}
                              renderInput={(params) => (
                                <Field
                                  as={TextField}
                                  name="city"
                                  required
                                  margin={MARGIN}
                                  {...params}
                                  label={CITY}
                                  InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                      <Fragment>
                                        {loadingCities ? (
                                          <CircularProgress
                                            color="inherit"
                                            size={20}
                                          />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                      </Fragment>
                                    ),
                                  }}
                                  helperText={<ErrorMessage name="city" />}
                                  error={
                                    props.errors.city && props.touched.city
                                  }
                                  disabled={check}
                                />
                              )}
                              onChange={(_event: any, newValue: any | null) => {
                                props.setFieldValue("city", newValue?._id);
                              }}
                              onInputChange={(_event: any, newValue: any) => {
                                props.setFieldValue("city", newValue);
                              }}
                            />
                          </Grid>

                          <Field
                            as={TextField}
                            margin={MARGIN}
                            fullWidth
                            name="organizationEmail"
                            label={ORG_EMAIL}
                            size={FIELD_SIZE}
                            type={TYPE_EMAIL}
                            id="organizationEmail"
                            helperText={
                              <ErrorMessage name="organizationEmail" />
                            }
                            error={
                              props.errors.organizationEmail &&
                              props.touched.organizationEmail
                            }
                            disabled={check}
                          />
                          <Field
                            as={TextField}
                            margin={MARGIN}
                            fullWidth
                            name="phoneNumber"
                            label={ORG_PHONE}
                            size={FIELD_SIZE}
                            type={TYPE_TEL}
                            id="phoneNumber"
                            helperText={<ErrorMessage name="phoneNumber" />}
                            error={
                              props.errors.phoneNumber &&
                              props.touched.phoneNumber
                            }
                            disabled={check}
                          />
                          <Field
                            as={TextField}
                            margin={MARGIN}
                            fullWidth
                            name="subDomain"
                            label={ORG_DOMAIN}
                            size={FIELD_SIZE}
                            type={TYPE_URL}
                            id="subDomain"
                            helperText={<ErrorMessage name="subDomain" />}
                            error={
                              props.errors.subDomain && props.touched.subDomain
                            }
                            disabled={check}
                          />

                          <Field
                            as={TextField}
                            margin={MARGIN}
                            fullWidth
                            name="yearEstablished"
                            label={`${ESTABLISHED_YEAR}`}
                            size={FIELD_SIZE}
                            type={TYPE_MONTH}
                            id="yearEstablished"
                            helperText={<ErrorMessage name="yearEstablished" />}
                            disabled={check}
                            inputProps={{
                              max: `${new Date().getFullYear()}-${
                                new Date().getMonth() < 9 ? "0" : ""
                              }${new Date().getMonth() + 1}`,
                            }}
                          />
                          <ButtonX
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: 3 }}
                            disabled={check}
                            endIcon={
                              check && (
                                <CircularProgress
                                  size="1.5rem"
                                  color="inherit"
                                  disableShrink
                                />
                              )
                            }
                            btnText={check ? `${PLEASE_WAIT}` : `${REGISTER}`}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </Container>
              </Form>
            ) : (
              <SkeletonLoader />
            )}
          </>
        );
      }}
    />
  );
};
