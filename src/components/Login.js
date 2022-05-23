import { Button, Form, Input } from "antd";

import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgCjzaU6X6PIx8xOWD3W7Y9SE9brhjyeM",
  authDomain: "my-first-firestore-jr.firebaseapp.com",
  projectId: "my-first-firestore-jr",
  storageBucket: "my-first-firestore-jr.appspot.com",
  messagingSenderId: "295116885121",
  appId: "1:295116885121:web:4d675746749881a4019180",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function LogIn() {
  return (
    <section style={{ padding: "2em" }}>
      <Form labelCol={{ span: 0 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: "16", offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Input.Password />
        </Form.Item>
      </Form>
    </section>
  );
}
