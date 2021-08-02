import "antd/dist/antd.css";
import { Form, Input, Button, Select, Cascader, DatePicker } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/NotesPageCss.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NotesPage() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Residence, setResidence] = useState('');
  const [StudentId1, setStudentId1] = useState('');
  const [Gender, setGender] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [IsPending, setIsPending] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const blog = { FirstName, LastName, UserName, Email, Residence, StudentId1, Gender, BirthDate };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }

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

  const residences = [
    {
      value: "90",
      label: "Turkey",
      children: [
        {
          value: "06",
          label: "Ankara",
        },
      ],
    },
    {
      value: "44",
      label: "England",
      children: [
        {
          value: "14",
          label: "London",
        },
      ],
    },
  ];

  // const formItemLayout = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  // };
  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0,
  //     },
  //     sm: {
  //       span: 16,
  //       offset: 8,
  //     },
  //   },
  // };
  return (
    <AnimatePresence exitBeforeEnter >
      <div className="container my-3 pb-3" >
        <motion.div
          exit={{ opacity: 0, y: -50 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Form
            onFinish={handleSubmit}
            layout="vertical"
            // {...formItemLayout}
            // form={form}
            name="register"
            // onFinish={onFinish}
            initialValues={{
              residence: ["Country", "City"],
              prefix: "90",
            }}
            scrollToFirstError
          >
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  name="FirstName"
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
                  <Input onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  name="LastName"
                  label="Last Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input onChange={(e) => setLastName(e.target.value)}/>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Item
                  name="UserName"
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
                  <Input onChange={(e) => setUserName(e.target.value)}/>
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
                  <Input onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
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
                  <Cascader options={residences} />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item
                  name="StudentId1"
                  label="Student Number"
                  tooltip="What your school number is?"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your student number!",
                    },
                  ]}
                >
                  <Input
                  onChange={(e) => setResidence(e.target.value)}
                    // addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                  />
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
                    <Option value="1">Male</Option>
                    <Option value="2">Female</Option>
                    <Option value="3">Other</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item name="date-picker" label="DatePicker" {...config}>
                  <DatePicker/>
                </Form.Item>
              </div>
            </div>
            <Form.Item>
              {!IsPending && <Button type="primary" htmlType="submit" id="register">
                Submit
              </Button>}
              {IsPending && <Button type="primary" htmlType="submit" id="register">
                Submitting...
              </Button>}
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default NotesPage;
