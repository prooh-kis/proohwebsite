import { message, notification, Radio } from "antd";
import { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { useDispatch } from "react-redux";
import { saveContactDetailsForQuery } from "../../actions/LandingPageAction";
import { useSelector } from "react-redux";
import { SAVE_CONTACT_DETAILS_RESET } from "../../constants/LandingPageConstants";

export const ContactForm = () => {
  const dispatch = useDispatch<any>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    websiteLink: "",
    organization: "",
    subject: "DOOH inventory related enquiry", // Default selected
    message: "",
  });

  const { loading, success, error, data } = useSelector(
    (state: any) => state.saveContactDetails
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const validate = () => {};

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // View the user input data
    console.log("Form submitted with data:", formData);
    message.success("Please wait, sending request");

    dispatch(
      saveContactDetailsForQuery({
        ...formData,
        date: new Date(),
        subjects: [formData.subject],
      })
    );
  };

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  useEffect(() => {
    if (success) {
      notification.success({
        message: "Success",
        description: "Successfully send your query, please your ",
      });
      dispatch({ type: SAVE_CONTACT_DETAILS_RESET });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        websiteLink: "",
        organization: "",
        subject: "DOOH inventory related enquiry", // Default selected
        message: "",
      });
    }
    if (error) {
      notification.error({
        message: "Error",
        description: "Error send your query",
      });
      dispatch({ type: SAVE_CONTACT_DETAILS_RESET });
    }
  }, [error, success]);

  return (
    <div className="px-12 sm:px-8 lg:px-16 w-full font-custom py-16">
      {/* Form */}
      <div className="grid grid-cols-12 p-2 mt-8">
        {/* Left Column (Contact Info) - unchanged */}
        <div className="col-span-12 sm:col-span-4 rounded">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[#1E376E] text-start font-custom font-semibold text-[36px] md:text-[48px] leading-[42px] md:leading-[54.72px] tracking-normal">
              {`Let's Connect`} & <br />
              Grow
              <span className="font-cursive font-regular tracking-[-0.2rem] text-[#129BFF]">
                Together!
              </span>
            </h1>
            <p className="text-[20px] py-8 text-[#2D5087]">
              Our Platform helps your business in <br /> managing expenses.
              These are some
            </p>
          </div>

          <div className="flex gap-4 items-center justify-start py-2">
            <div className="w-8 h-8 bg-[#E8F5FF] rounded-full flex justify-center items-center">
              <i className="fi fi-sr-phone-call text-[#129BFF] flex justify-center items-center"></i>
            </div>
            <p className="text-[#2D5087] text-sm">+918125480000</p>
          </div>
          <div className="flex gap-4 items-center justify-start py-4">
            <div className="w-8 h-8 bg-[#E8F5FF] rounded-full flex justify-center items-center">
              <i className="fi fi-sr-envelope text-[#129BFF] flex justify-center items-center"></i>
            </div>
            <p className="text-[#2D5087] text-sm">contact@prooh.ai</p>
          </div>
          <div className="flex gap-4 items-center justify-start py-2">
            <div className="w-8 h-8 bg-[#E8F5FF] rounded-full flex justify-center items-center">
              <i className="fi fi-sr-marker text-[#129BFF] flex justify-center items-center"></i>
            </div>
            <p className="text-[#2D5087] text-sm">
              Paras Trade Center, Gwal Pahari, Gurgaon, India
            </p>
          </div>
          <div className="py-8 flex items-center gap-4">
            <div className="w-8 h-8 bg-[#129BFF] rounded-full flex justify-center items-center">
              <i className="fi fi-brands-linkedin text-white flex justify-center items-center"></i>
            </div>
            <div className="w-8 h-8 bg-[#129BFF] rounded-full flex justify-center items-center">
              <i className="fi fi-brands-instagram text-white flex justify-center items-center"></i>
            </div>
            <div className="w-8 h-8 bg-[#129BFF] rounded-full flex justify-center items-center">
              <i className="fi fi-brands-twitter-alt text-white flex justify-center items-center"></i>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="col-span-12 sm:col-span-8 p-8 border border-gray-100 shadow-sm rounded-[8px]">
          <form onSubmit={sendEmail}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
              <div>
                <label className="text-sm text-gray-500">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
            </div>

            {/* Website and Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
              <div>
                <label className="text-sm text-gray-500">Website</label>
                <input
                  type="url"
                  name="websiteLink"
                  value={formData.websiteLink}
                  onChange={handleChange}
                  placeholder="Enter your website link"
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500">Organization</label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Enter your organization name"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="py-4">
              <h1 className="text-sm font-semibold">Select Subject</h1>
              <div className="flex items-center gap-4 py-2 flex-wrap">
                <Radio.Group
                  value={formData.subject}
                  onChange={onChange1}
                  options={[
                    {
                      value: "DOOH inventory related enquiry",
                      label: "DOOH inventory related enquiry",
                    },
                    {
                      value: "Campaigns related enquiry",
                      label: "Campaigns related enquiry",
                    },
                    { value: "Other enquiry", label: "Other enquiry" },
                  ]}
                />
              </div>
            </div>

            {/* Message */}
            <div className="py-2">
              <label className="text-sm text-gray-500">Message</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How Did You Find Us? *"
                className="w-full border-b border-[#D6D2D2] bg-transparent px-4 py-3 text-gray-800 focus:outline-none focus:border-primaryButton"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="py-2 px-4 bg-[#129BFF] text-[#FFFFFF]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
