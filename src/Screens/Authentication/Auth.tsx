import React, { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_USER, REGISTER_USER } from "../../Saga/AuthSaga/sagaAction";
import { checkValidData } from "../../Utils/Assets/Validate/Validate";
import { RootState } from "../../Redux/Store/AppStore";
import { useNavigate } from "react-router-dom";
import useLoggedin from "../../Custom-hooks/useLoggedin";

interface ComponentProps {
  isOpen?: any;
  onClose?: any;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent",
  },
};

const Auth: React.FC<ComponentProps> = ({ isOpen, onClose }) => {
  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const name = useRef<any>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.userAuth.userInfo);

  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState<any>({});
  const isLoggedin = useLoggedin();
  useEffect(() => {
    if (isLoggedin) {
    }
  }, [isLoggedin]);

  const validateForm = () => {
    const newErrors: any = {};

    if (!email.current?.value) {
      newErrors.email = "Email is required";
    }

    if (!password.current?.value) {
      newErrors.password = "Password is required";
    }

    if (isLogin && !name.current?.value) {
      newErrors.name = "Name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleButton = async () => {
    if (validateForm()) {
      if (isLogin) {
        const data = {
          email: email.current?.value,
          password: password.current?.value,
          name: name.current?.value,
        };
        const res = await dispatch(REGISTER_USER(data));
      } else {
        const data = {
          email: email.current?.value,
          password: password.current?.value,
        };
        const res = await dispatch(LOGIN_USER(data));
      }
    }
  };

  return (
    <Modal
      className="relative bg-transparent"
      style={customStyles}
      isOpen={isOpen}
    >
      <div className="flex flex-row min-h-screen min-w-screen justify-center items-center">
        <div className="flex w-[40rem] h-[45rem] rounded-xl flex-col relative border-2 backdrop-blur-xl bg-white/30">
          <div className="absolute right-2 top-2 cursor-pointer">
            <RxCross1
              onClick={onClose}
              size={20}
              className="font-bold"
              color="#797d85"
            />
          </div>
          <div className="flex mt-10 px-10">
            <div
              onClick={() => setIsLogin(true)}
              className={`flex h-12 w-[20rem] justify-center items-center rounded-s-xl ${
                isLogin ? "bg-black" : "bg-gray-300"
              }`}
              dir="ltr"
            >
              <p className="text-white">Sign Up</p>
            </div>

            <div
              onClick={() => setIsLogin(false)}
              className={`flex h-12 w-[20rem] justify-center items-center rounded-s-xl ${
                isLogin ? "bg-gray-300" : "bg-black"
              }`}
              dir="rtl"
            >
              <p className="text-white">Log in</p>
            </div>
          </div>

          <div className="justify-center flex font-bold text-xl my-8">
            <p>{isLogin ? "Sign Up " : "Login"}</p>
          </div>

          <div className="space-y-3">
            <div className="border-2 flex justify-center h-12 mx-40 rounded-full items-center font-normal text-base space-x-2">
              <BsFacebook size={20} color="#0324fc" />
              <p>Sign up with Facebook</p>
            </div>
            <div className="border-2 flex justify-center h-12 mx-40 rounded-full items-center font-normal text-base space-x-2">
              <FcGoogle size={20} />
              <p>Sign up with Google</p>
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-center space-x-10 mt-[2rem] my-5">
              <div>
                <div className="mb-2 font-normal text-base">
                  <p>First Name</p>
                </div>
                <div>
                  <input
                    ref={name}
                    className="border-2 bg-transparent py-2 rounded-lg w-[12rem]"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <div className="mb-2 font-normal text-base">
                  <p>Last Name</p>
                </div>
                <div>
                  <input className="border-2 bg-transparent py-2 rounded-lg w-[12rem]" />
                </div>
              </div>
            </div>
          )}

          <div className={`mx-[7rem] ${isLogin ? "" : "mt-10"}`}>
            <div className="mb-2 font-normal text-base">
              <p>Email address</p>
            </div>
            <div>
              <input
                ref={email}
                className="bg-transparent border-2 rounded-lg py-2 w-[25rem]"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mx-[7rem] mt-5">
            <div className="mb-2 font-normal text-base">
              <p>Password</p>
            </div>
            <div>
              <input
                ref={password}
                type="password"
                className="bg-transparent border-2 rounded-lg py-2 w-[25rem]"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-center my-5">
            <button
              onClick={handleButton}
              className="border-2 px-[10rem] py-2 rounded-full font-medium text-lg bg-gray-500 text-white"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Auth;
