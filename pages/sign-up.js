import logo from "../public/assets/green-logo.png";
import Image from "next/image";
import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";

function SignUp() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout = formLayout === "vertical";

  return (
    <div>
      {" "}
      <div className="">
        <div className="max-w-[640px] mx-auto px-5">
          <div className="pt-14 md:pt-16 pb-10 flex justify-center">
            <Image src={logo} alt="greenbles logo" className="h-[80px]" />
          </div>
          <div className="drop-shadoww bg-white border-[0.5px] border-solid border-[#c4c4c4] px-5 md:px-16 pt-5 md:pt-20 pb-7 md:pb-14">
            <Form
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
            >
              <Form.Item
                label="Full Name"
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name",
                  },
                ]}
              >
                <Input placeholder="Full Name" className="h-[48px]" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name",
                  },
                ]}
              >
                <Input placeholder="Full Name" className="h-[48px]" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="emailaddress"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your Email Address",
                  },
                ]}
              >
                <Input placeholder="Email Address" className="h-[48px]" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="h-[48px]" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phonenumber"
                rules={[
                  {
                    required: true,

                    message: "Please input your Phone number",
                  },
                ]}
              >
                <Input placeholder="Email Address" className="h-[48px]" />
              </Form.Item>
            </Form>

            <Form.Item>
              <button
                type="primary"
                className="text-center text-[#ffffff] bg-tahiti w-full h-12 rounded-lg rounded-bl-none mb-6"
              >
                {" "}
                CREATE ACCOUNT
              </button>
            </Form.Item>

            <div>
              <p className="text-center text-black text-sm leading-7">
                {" "}
                Already have an account?{" "}
                <span className="text-tahiti"> Login </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
