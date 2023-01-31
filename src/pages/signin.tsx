import React from "react";
import styles from "../styles/register.module.css";
import Nav from "@/components/Nav";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef, useState } from "react";
import { GrFormCheckmark } from "react-icons/gr";
import { BiErrorCircle } from "react-icons/bi";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


interface FormInput {
  username: string;
  password: string;
}
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().max(16).min(8),
});

const Signup = ({setName, currentModal}:any) => {
  const [loading, setLoading] = useState(false);
  const timer: any = useRef();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit = (data: FormInput) => {
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios
      .post(
        "https://web-production-3251.up.railway.app/v1/auth-user/login/",
        data
      )
      .then((res: any) => {
        console.log(res);
        //  document.cookie = `ID=${res.data._id}; expires=Thu, 22 Dec 2022 12:00:00 UTC;`;
        toast.success(`${res?.data?.message}`);
        router.push("/shop");
      })
      .catch((error) => {
        console.log(error?.response?.data?.errors);
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  return (
    <div className={styles.sign}>
      <ToastContainer />
      <Nav setName={setName} currentModal={currentModal} />

      <div className={styles.signCap}>
        <img src="/pi.png" alt="" />

        <div className={styles.signInput}>
          <h3>Log In</h3>
          <p>
            Don’t have an account?
            <Link href="/signup">Create One</Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.input}>
            <input type="email" {...register("username")} placeholder="Email" />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />

            <button type="submit">
              {" "}
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Log In"
              )}
            </button>
          </form>
          <p>Or Continue with:</p>

          <div className={styles.img}>
            <img src="/pi8.png" alt="" />
            <img src="/pi9.png" alt="" />
          </div>
        </div>
      </div>
      {/* <Verifymodal /> */}
    </div>
  );
};

export default Signup;
