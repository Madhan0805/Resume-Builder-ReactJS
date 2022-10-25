import { BASE_URL, POST } from "./index";

export const resumedetailsservice = async (forms) => {
  let sendData = {
    objective: forms.objective,
    fullname: forms.fullname,
    email: forms.email,
    phonenumber: forms.phonenumber,
    address: forms.address,
    DOB: forms.DOB,
    college: forms.college,
    hsc: forms.hsc,
    sslc: forms.sslc,
    hobbies: forms.hobbies,
  };

  try {
    let { data } = await POST(BASE_URL + "create-resume", sendData);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserResumeService = async () => {
  try {
    let response = await POST(BASE_URL + "user-created-resume");

    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
