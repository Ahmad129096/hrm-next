import { Formik } from "formik";
import { ForkmikProps } from "./Interface";
export const FormikForm = ({
    initialValues,
    validationSchema,
    onSubmit,
    FormData,
    enableReinitialize
}: ForkmikProps) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={enableReinitialize}
        >
            {FormData}
        </Formik>
    );
};

export default FormikForm;