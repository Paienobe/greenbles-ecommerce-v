import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import Link from "next/link";

function SignIn() {
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
        <div className="max-w-[932px] px-8 mx-auto flex flex-col md:flex-col lg:flex-row justify-between">
          <div className=" md:pb-10 lg:pb-0 md:basis-full lg:basis-[274px] pr-[95px]">
            <h1 className="text-tahiti text-[40px] font-[700] leading-[47px] pb-5">
              {" "}
              Welcome Back{" "}
            </h1>
            <h2 className="leading-[30px] text-[20px] font-[400]">
              Login to continue{" "}
            </h2>
          </div>
          <div className=" md:basis-full lg:basis-[600px]">
            <div className="bg-[#ffffff] rounded-[6px] border-solid border-[0.05px] border-[#c4c4c4] shadow-9xl pt-[30px]  md:pt-[72px] pb-[30px] md:pb-[62px] pl-[20px] md:pl-[71px] pr-[20px] md:pr-[70px]">
              <Form
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                // onValuesChange={onFormLayoutChange}
              >
                <Form.Item label="Email Address">
                  <Input
                    placeholder="Email Address"
                    className="h-[43px] rounded-[2px] border border-solid border-[#c4c4c4]"
                    suffix={MessageIcon}
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
                    placeholder="Password"
                    style={{ background: "rgba(65, 6, 54, 0.05)" }}
                    className="h-[43px] rounded-[2px] border border-solid border-[#c4c4c4]"
                  />
                </Form.Item>
              </Form>

              <div className="pt-[30px] flex flex-col  md:flex-row justify-between">
                <div className="text-center md:text-left">
                  <p className="text-tahiti-secondary text-[16px] font-[500]">
                    {" "}
                    Forgot Password{" "}
                  </p>
                  <p className="text-tahiti-secondary text-[16px] font-[500]">
                    {" "}
                    <span className="text-[#afafaf]"> New User?</span>
                    <Link href="/sign-up">
                      <a className="text-tahiti pl-[5px]">Create Account </a>
                    </Link>
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="w-[136px] h-[52px] bg-tahiti text-[#ffffff] rounded-[6px] rounded-bl-[0] font-[700]">
                    {" "}
                    LOGIN{" "}
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

export default SignIn;
