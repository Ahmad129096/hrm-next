/** @format */

export const Content = {
  username: "Username",
  forget_password: "Forgot Password",
  reset_Password: "Reset Password",
  password_regex:
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  phoneRegExp:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  short: "Please enter valid Input",
  long: "Please enter valid Input",
  required: "Field is Required",
  valid_email: "Enter a Valid Email",
  valid_password: "Uppercase Lowercase Special char Required",
  min_password: "Password Should be minimum 8 character",
  confirm_password: "Password does not matched",
  user_name: "Please Enter valud User Name",
  enter_message: "Please Select or Fill this field",
  valid_name: "Please Enter Valid Name",
  correct_name: "Minimum should be 3 Character",
  required_name: "Please Enter your Username",
  required_email: "Please Enter Your Email",
  required_email_Username: "Please Enter Your Email or Username",
  required_password: "Please Enter Your Password",
  confirm_required_password: "Confirm Password is Required",
  required_orgName: "Please Enter your Organization Name",
  organization_type: "Please Select Organization Type",
  city_field: "Please Select Your City",
  province_field: "Please Select Your Province or State",
  country_field: "Please Select Your Country",
  department_field: "Please Select Your Department",
  designation_field: "Please Select Your Designation",
  enter_zipcode: "Please Enter Your Zipcode",
  valid_zipcode: "Enter Valid Zip code",
  enter_url: "Only HTTP or HTTPS Accpeted",
  enter_otp: "Enter Your OTP code",
  valid_otp: "Enter Valid OTP code",
  enter_number: "Enter correct Phone number",
  Salary_number: "Enter Your Salary",
  valid_number: "Phone number is not valid",

  drawerWidth: 230,

  email: "email",
  signUplink: "Dont have an Account? Sign Up",
  signInlink: "Already have an account? Sign In",
  terms_condtions: "Please accept our terms & conditons",
  correct_date: "Please enter correct Established Date of Company",

  initial_image: "https://abdulbasit7886.s3.ap-northeast-1.amazonaws.com/",

  no_image:
    "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg",

  organization_image:
    "https://cdn.dribbble.com/users/844846/screenshots/6593834/icon-animation-1_still_2x.gif?compress=1&resize=250x250",
  employee_image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAflBMVEX29vYAAAD+/v5PT0/6+vr7+/v////x8fE9PT0nJye0tLTe3t7X19eKiorh4eExMTHCwsLr6+s4ODhsbGxhYWHLy8uioqIiIiKUlJS9vb3R0dF5eXlYWFh2dnabm5vn5+eBgYGurq5ISEhlZWUSEhIXFxcdHR0tLS0UFBRLS0sGXipeAAAFdUlEQVR4nO2di3qiMBCFSZyAVlBpvVKvtZfd93/BReuW6m4tyUAST/M/AZxvMplkLomiQCAQCAQCgUAgEAi8Q6SklOT6M9xDUm4W2XImBj9ajIM9JKNsKI7MpevvsQ6pw4I4rol8NF+KD3o/yi5KM6A8vZtuH8bjZedeXLBQrj/QFqRosFv9I8An7tXPsAySm+nTFR2OPCQ/QAySxcN3QhyYpfDLRKbjOkocGGFvJpRs6ypRMkG2DFn0NKQQoo/rM+KplhJCDF1/cWtInfXxzmPs+qPbQT5qS1H6T0iXEWcGUoghoseQOxMphNjhGQalZlKIXuL605una6gFnmHItakUogvmMSg3lkKIAksMOWdo8Yh1LEmeGVo8Q3lPtWNIUcZbSItELb//4SsgLRKW5yx5A7ILGvG0QDq6K84ucgAo3FJ7phZADoOM4+8TXRy7oBlTC4ETYSRcKYCcJ1+LRdDigzsYh9GAFjB2EXFOZkdw1kj0ytUC53RGesmy/zDB0WLI1SLF0YIbdwLFF6rD1WKDowX3bCZy17/QGEaJ1M88u/6D5pBGmdRPACVVlXmi6J3fMCF4RHdMLR6A7nImTC0yILvoM7WY4mjBPqjiHEdK3nha4ITg7LwZUKhVBhgrlhQz19/fJMwAowPkOiPFCzCAwgt2gLGF0sK0iO8drOYznr9YIW2p+nXg5wCV8vHv+HDaVYkZdkKVNb5wtcA5kLAqGo/g5M1CPrUi5NkrghYVQYuKoEVF0KKCv6fi7CP8+gucWCvUHFTIWjMeroFz+cvOpwLllqlgarFCuthiOk+coxmzDVGIV9ff3yi8CAMptVx6zwVDiiegFXKA0cPdwyniOyEX1yaLXWGco0lxmD04SLW3k2zUx5y/RrF2zesAU4kS+e3guUtwziGXKO0zGlJBzjlK230C5YguCHZRoe8vgLXQ3kdwfafU7p2ACzk/0C/nw+ndvkR79gPwNGjtcr4l0n3WOdolbBmuFtrDH5Du9i7RbbbCdZ2R7l0f1t3eJbTRCMOxSlz/hQa1pdiCjvqtiGu3kuDUdH5F7dF8T+ArpETVbRlAnYZdITd1z2fDHNwwtNIkW2iHoRlrjYHFkLrPCUDVGpyh9MswpqBiUGIwlg/0wtOoagvz0Q3DvkyoHsQTlBuWo+CM1voLxaZt3EPCEkOpifkopXEqYe4xSOZTwzqUE51FBPGIqFIFb8jBkZf54NbVIJns2LXgJ5a3bBykqOAOGTtjlvXVTXqOw/uPTZlERecuuTXjIBmN2L0B/+f5saAbMg6KB3N21/YVutP8NoyjNIlF7YcwjdmPvHekpFSasYf71mKWpcrjgkeKN2teUKXH/XoT+6kGxQV7ZKk2+8JDNUol2INsjXia+KaG7DMnqzHopD5lUijiDm7lsU28iThkwX5fhMnLxI/bL2K/RtQEmQ83PpS0H1nVoeP+aXut4pJWees7dhpq4NpVVPxKnYpBHklRHmFdWgbl7AckGuXVYfk4uQk1v6brzIEaPD3fNntHcQarF7kt3CTmuQ+BtoST7hv9xhgruCj/Y78R0BYOxk9Jv7bTCvvvtjCnXLfJ2vYqUeyRWe1hWQrycT/9i+VWC/1OU4u8WdWC/bhKu1gta/LiKutrrJbI6g8ssIrNbdXzJWJ1kdTuh3GFxb5W/tzFluna00Kx58C3jbUZl967C4sOg0auf/Vb1rbCLfZo0vax9sIR+znU9rm3poXv24gQvaDFB/a08C8XcIm1NaJ02wntM7alxQ3EF9b2VL9vco7Yy5Iwn7FrH5sPKEp/b8EPdK3O2ZHpb9c//DVZZDePSDKdrpYd79jPF4n9LCIp6SXOS9gCgUAgEAgEAoFAQJs/nhBc/gQacrcAAAAASUVORK5CYII=",

  employee_type: "Please Select Employee Name",
  restriction: "Please Select Additional Charges or Restrictions",
  title: "Enter Job title",
  title_regex: "Title must only contain alphabetic characters",
  salary: "Select Salary Range.",
  requirement: "Please Mention Job Requirements",
  designatio: "Designation must only contain alphabetic characters",
  designatio_req: "Please Enter Job Designation",
};
