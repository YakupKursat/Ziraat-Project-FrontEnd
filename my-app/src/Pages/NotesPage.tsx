import "antd/dist/antd.css";
import {
  AutoComplete,
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
} from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/NotesPageCss.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostType } from "../model";

function NotesPage() {
  const [form] = Form.useForm();
  const [IsPending, setIsPending] = useState(false);

  const handleSubmit = () => {
    
    const data = form.getFieldsValue();

    const blog :PostType= {
      
      studentId1: Number(data.studentId1),
      firstName: data.firstName,
      lastName: data.lastName,
      passWord: "No Password",
      email: data.email,
      country: data.residence[0],
      city: data.residence[1],
      userName: data.userName,
      gender: Number(data.gender),
      birthDate: new Date()
    };

    console.log("ömer")
    console.log("asdasds", blog);
    console.log("Hello", form.getFieldsValue());

    setIsPending(true);

    fetch("https://localhost:5001/api/student/Add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
    });
  };

  const { Option } = Select;

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onEmailChange = (value: any) => {
    if (!value) {
      setAutoCompleteResult(['example@hotmail.com', 'example@gmail.com', 'example@outlook.com'].map(domain => `${value}${domain}`));
    }
     else {
      setAutoCompleteResult(['@hotmail.com', '@gmail.com', '@outlook.com'].map(domain => `${value}${domain}`));
    }
  };

  const EmailOptions = autoCompleteResult.map(EmailOptions => ({
    label: EmailOptions,
    value: EmailOptions,
  }));

   const residences = [   
    {
      value: 90,
      label: "Turkey",
      children: [
        {
          value: 6,
          label: "Ankara",
        },
        {
          value: 34,
          label: "Istanbul",
        },
      ],
    },
    {
      value: 44,
      label: "England",
      children: [
        {
          value: 14,
          label: "London",
        },
      ],
    },
  ];

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="container my-3 pb-3">
        <motion.div
          exit={{ opacity: 0, y: -50 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            name="register"
            initialValues={{
              residence: ["Country", "City"],
              prefix: "90",
            }}
            scrollToFirstError
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  tooltip="If you wish you can write your second name either"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  name="userName"
                  label="Username"
                  tooltip="This will be your profile name."
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  id="inputs"
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <AutoComplete options={EmailOptions} 
                  onChange={onEmailChange} 
                  placeholder="example@hotmail.com"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 rounded-circle">
                <Form.Item
                  name="residence"
                  label="Habitual Residence"
                  rules={[
                    {
                      type: "array",
                      required: true,
                      message: "Please select your habitual residence!",
                    },
                  ]}
                >
                  <Cascader options={residences} 
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  name="studentId1"
                  label="Student Number"
                  tooltip="What your school number is?"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your student number!",
                    },
                  ]}
                >
                  <Input/>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  id="genders"
                  name="gender"
                  label="Gender"
                  rules={[{ required: true, message: "Please select gender!" }]}
                >
                  <Select placeholder="select your gender">
                    <Option value= {1}>Male</Option>
                    <Option value= {2}>Female</Option>
                    <Option value= {3}>Other</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item name="birthDate" label="DatePicker" {...config}>
                  <DatePicker />
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              {!IsPending && (
                <Button type="primary" htmlType="submit" id="register">
                  Submit
                </Button>
              )}
              {IsPending && (
                <Button type="primary" htmlType="submit" id="register" disabled>
                  Submitting...
                </Button>
              )}      
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default NotesPage;