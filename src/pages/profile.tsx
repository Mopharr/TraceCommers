import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import styles from "../styles/profile.module.css";
import { PassContent, PassTitle } from "../components/passProfile";

const Profile = () => {
  const [tog, setTog] = useState("1");

  const handleTog = (e: any) => {
    setTog(e.target.id);
  };

  
  return (
    <div className={styles.profile}>
      <Nav />

      <div className={styles.profileCap}>
        <div className={styles.top}>
          {/* <PassTitle /> */}
          <h3> Privacy Settings</h3>
          <p>Change your profile and account settings</p>
        </div>

        <div className={styles.bottom}>
          <Sidebar />

          <div className={styles.bottomCap}>
            <img src="/pi.png" alt="" />
            <div className={styles.bottomInput}>
              <h4>Reset Password</h4>
              <p>
                By resetting your password, your old <br /> password becomes
                invalid.{" "}
              </p>

              <form action="" className={styles.input}>
                <input type="password" placeholder="Old Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm New Password" />
                <button type="submit">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
