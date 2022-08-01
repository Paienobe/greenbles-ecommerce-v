import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import Link from "next/link";

function ResetPassword() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout = formLayout === "vertical";

  const MessageIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5625 3.75H3.4375C2.57456 3.75 1.875 4.44956 1.875 5.3125V14.6875C1.875 15.5504 2.57456 16.25 3.4375 16.25H16.5625C17.4254 16.25 18.125 15.5504 18.125 14.6875V5.3125C18.125 4.44956 17.4254 3.75 16.5625 3.75Z"
        stroke="#454545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.375 6.25L10 10.625L15.625 6.25"
        stroke="#454545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div>
      <div className="container mx-auto mt-[100px]">
        <div className="max-w-[945px] px-8 mx-auto flex flex-col md:flex-row justify-between">
          <div className=" md:basis-full lg:basis-[274px] ">
            <h1 className="text-tahiti text-[40px] font-[700] leading-[47px] pb-5 pt-[34px]">
              {" "}
              Reset Password{" "}
            </h1>
            <h2 className="leading-[30px] text-[20px] font-[400px]">
              {" "}
              Enter a new password
            </h2>
          </div>
          <div className=" md:basis-full lg:basis-[600px]">
            <div className="bg-[#ffffff] rounded-[6px] border-solid border-[0.05px] border-[#c4c4c4] shadow-9xl pt-[30px]  md:pt-[72px] pb-[30px] lg:pb-[62px] pl-[20px] lg:pl-[71px] pr-[20px] lg:pr-[70px]">
              <Form
                // {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                // onValuesChange={onFormLayoutChange}
                //  className='font-[14px] leading-[20px] font-normal text-[#fff]'
              >
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: false, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter New Password"
                    style={{ background: "rgba(65, 6, 54, 0.05)" }}
                    className="h-[43px] rounded-[2px] border border-solid border-[#c4c4c4]"
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: false, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Re-enter New Password"
                    style={{ background: "rgba(65, 6, 54, 0.05)" }}
                    className="h-[43px] rounded-[2px] border border-solid border-[#c4c4c4]"
                  />
                </Form.Item>
              </Form>

              <div className="pt-[-4px]">
                <div className="w-full">
                  <button className="w-full h-[52px] bg-tahiti text-[#ffffff] rounded-[6px] rounded-bl-[0] font-[700]">
                    {" "}
                    RESET PASSWORD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
