import { Button, Form, Input } from "antd";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

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

export default function Login({ setUser }) {
  const handleLogin = ({ email, password }) => {
    const app = initializeApp(firebaseConfig); // connect to firebase
    const auth = getAuth(app); // connect to firebase/auth
    // login with Firebase Auth
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  const handleGoogleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch(console.error);
  };
  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
