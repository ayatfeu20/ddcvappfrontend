import axios from "axios";

const handleLogin = (email, password, isAuth, setIncorrectPassword) => {
  axios
    .post(`${process.env.REACT_APP_URL}login`, email, password)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("isadmin", JSON.stringify(res.data.user.isadmin));
      isAuth(res.data.user);
    })
    .catch((err) => {
      setIncorrectPassword(true);
    });
};

const handlesignup = (data) => {
  console.log("TEST 2")
  console.log("TEST", process.env.REACT_APP_URL)
  return axios.post(
    `${process.env.REACT_APP_URL}signup`, data
  );
};

const getAllUsers = (setEmployeeState) => {
  
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(`${process.env.REACT_APP_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("data",res.data)
      setEmployeeState(res.data);

    })
    .catch((error) => {
      console.error(error);
    });
};

//COMPONENT: EMPLOYEEBYID
const GetOneUser = async (params) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const userData = await axios.get(
    `${process.env.REACT_APP_URL}${params._id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return userData;
};

//COMPONENT: EMPLOYEEBYID
const updateOneUser = async (params, updateState) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const userData = await axios.put(
    `${process.env.REACT_APP_URL}${params._id}`,
    updateState,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return userData;
};

//COMPONENT: EDITCARD
const editOnSave = async (obj) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  axios
    .put(`${process.env.REACT_APP_URL}update`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (user === obj._id) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  handleLogin,
  handlesignup,
  editOnSave,
  getAllUsers,
  GetOneUser,
  updateOneUser,
};
