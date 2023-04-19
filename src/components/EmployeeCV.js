import React, { useEffect, useState } from "react";
import FullHeight from "react-full-height";

import EmployeeGrid from "./EmployeeGrid";
import UserServices from "./UserServices";
import FadeIn from "react-fade-in";

const EmployeeCV = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {

  UserServices.getAllUsers(setUsers);
    return () => {
      setUsers([]);
    };
  }, []);

  const handleSearch = (search) => {
    setSearchText(search.toLowerCase().trim());
  };

  const employeeList = users.filter(
    (x) =>
      x.employeename
        ?.toLowerCase()
        .trim()
        .includes(searchText.toLowerCase().trim()) ||
      x.technologies.some((t) =>
        t.techtools?.toLowerCase().trim()?.includes(searchText)
      )
  );

  return (
    <div>
      <FullHeight>
        <div className="container mb-5">
          <FadeIn>
            <div>
              <div className=" mt-5 d-flex justify-content-md-end justify-content-center">
                <div className="d-md-block d-flex edit-info justify-content-md-between justify-content-center ">
                  <div className="d-flex flex-column flex-md-row justify-content-md-between justify-content-center edit-height d-flex align-items-center">
                    <div className="text-center mb-3 mb-md-0">
                      <h2>Employee's</h2>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="me-md-4 search-border pe-3 ps-3">
                        <input
                          type="text"
                          className="search-bar"
                          id="myInput"
                          placeholder="Search..."
                          onChange={(e) => handleSearch(e.target.value)}
                        />
                        <i className="search-icon fas fa-search"></i>
                      </div>
                      <h2 className="d-none-small name-text mb-0 me-4">
                        Digital Dividend
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <EmployeeGrid employeeState={employeeList} />
            </div>
          </FadeIn>
        </div>
      </FullHeight>
    </div>
  );
};

export default EmployeeCV;
