import React from "react";
import { assests } from "../../assests";
const Feautures = () => {
  return (
    <div className="ml-8">
      <h1 className="text-[30px] font-bold tracking-wide text-center">Master Our App in Minutes!</h1>
      <div className="my-4 flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1">
          <h2 className="text-[25px] font-bold capitalize">Join us!!</h2>
          <div>
            <p className="py-2">
              Creating an account is quick and easy. Unlock a world of exclusive
              features and benefits by signing up today!
            </p>
            <h3 className="text-[20px] font-semibold">Why Sign Up?</h3>
            <ul className="list-disc ml-4">
              <li>
                <span className="font-semibold">Personalized Experience:</span>{" "}
                Tailor your experience to suit your preferences.
              </li>
              <li>
                <span className="font-semibold">Exclusive Content:</span> Access
                members-only content and updates.
              </li>
              <li>
                <span className="font-semibold">Seamless Access:</span> Sync
                your data across all your devices.
              </li>
              <li>
                <span className="font-semibold">Stay Informed:</span> Receive
                notifications about the latest updates and offers.
              </li>
            </ul>
            <h3 className="text-[20px] font-semibold">Sign Up Options:</h3>
            <ul className="list-disc ml-4">
              <li>
                <span className="font-semibold">Email & Password:</span>Enter
                your email and create a password.
              </li>
              <li>
                <span className="font-semibold">Google Login:</span> Use your
                Google account for a fast and secure sign-up.
              </li>
              <li>
                <span className="font-semibold">Facebook Login:</span>Connect
                with your Facebook account for an easy registration.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img src={assests.login} alt="login" />
        </div>
      </div>
      <div className=" my-4 flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1">
          <h2 className="text-[25px] font-bold capitalize">Your Workspace </h2>
          <p className="py-2">After creation of your Account! you can take  full advantage of our intuitive workspace designed to streamline your task management with powerful CRUD operations.</p>
          <ul className="list-disc ml-4">
            <li><span className="font-semibold">Add Todo:</span>Quickly add new tasks to ensure nothing slips through the cracks.</li>
            <li><span className="font-semibold">Read todo:</span> View and organize all your tasks with ease, gaining a clear overview of your to-do list.</li>
            <li><span className="font-semibold">Complete Todo:</span>When you mark your todo complete you can also track the time taken for the completion of the todo</li>
            <li><span className="font-semibold">Create notes:</span>You can now add your story of your todo's for tommorow by utilizing our notes feauture</li>
            <li><span className="font-semibold">Save:</span>Dont forget to save your todo's and notes so that they won't vanish, and you can Track them</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={assests.save} alt="save" />
        </div>
      </div>
      <div className="my-4 flex flex-col md:flex-row justify-center items-start">
        <div className="flex-1">
          <h2 className="text-[25px] font-bold capitalize">Track Previous Tasks</h2>
          <p className="py-2">Sign up to track your previous tasks, including all associated to-dos and notes. Manage and review your task history easily within our comprehensive workspace, ensuring you stay organized and productive.</p>
          <ul className="list-disc ml-4">
            <li><span className="font-semibold">Date of Task:</span>Track your previous tasks through Dates and Days</li>
            <li><span className="font-semibold">Completion Percent:</span>know your Task completion Efficiency</li>
            <li><span className="font-semibold">Details:</span>Go to Details to view your todo's and notes and the time taken to complete each task</li>
          </ul>
        </div>
        <div className="flex-1 overflow-hidden">
          <img src={assests.tracktodo} alt='previous todos' className="h-[80%]"/>
        </div>
      </div>
    </div>
  );
};

export default Feautures;
