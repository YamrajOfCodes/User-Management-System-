import { useEffect, useState } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User/User';
import Profile from './Components/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, getUsersData } from './Redux/Slices/UserSlice';
import SectionHeading from './Components/SectionHeading/SectionHeading ';
import UserCard from './Components/UserCard/UserCard ';
import AddUserForm from './Components/UserForm/AddUserForm ';
import { useTheme } from './context/ThemeContext';
import Loader from './Components/Loader/Loader';


function App() {

  const [selectedPatient, setSelectedPatient] = useState("Jessica Taylor");
  const [userInfo, setUserInfo] = useState({});
  const { theme } = useTheme();

  const [filterUserData, setFilterUsersData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { getallusersdata, loader } = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const totalPages = Math.ceil(filterUserData?.length / usersPerPage);


  const handleAddUser = (userData) => {
    dispatch(addUser({
      id: Date.now(),
      name: userData.name,
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      address: {
        city: userData.city
      },
      company: {
        name: userData.company
      }
    }));
  };


  const allUsers = getallusersdata?.slice(-4)?.map((element, index) => {

    const { city } = element.address;

    return {
      name: element.name,
      gender: city,
      age: "",
      profile: ""
    }
  })


  // handlling Search Functionallity

  const handleSearch = (inputValue) => {
    if (inputValue.trim("") === "") {
      setFilterUsersData(getallusersdata)
    }

    if (inputValue === "ascending" || inputValue === "descending") {
      let sorted = [];
      if (inputValue === "ascending") {
        sorted = [...getallusersdata].sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      } else {
        sorted = [...getallusersdata].sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
      }

      const filterusersData = sorted.map((element) => ({
        Name: element?.name,
        City: element?.address?.city,
        Email: element?.email,
        Company: element?.company?.name
      }))

      setFilterUsersData(filterusersData);

    } else {
      const user = getallusersdata?.filter((element) => {
        return element.name?.toLowerCase().includes(inputValue.toLowerCase());
      })

      const filterusersData = user.map((element) => ({
        Name: element?.name,
        City: element?.address?.city || element.city,
        Email: element?.email,
        Company: element?.company?.name || element.company
      }))

      setFilterUsersData(filterusersData)
    }
  }



  // below three related to pagination

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };



  const dispatch = useDispatch();

  const handleHealthData = () => {
    dispatch(getUsersData());
  }



  useEffect(() => {

    const matchPatient = getallusersdata?.find((element) => element.id === 2);

    const filterusersData = getallusersdata?.map((element) => ({
      id: element?.id,
      Name: element?.name,
      City: element?.address?.city,
      Email: element?.email,
      Company: element?.company?.name
    }))

    setFilterUsersData(filterusersData)

    const getData = {
      Name: matchPatient?.name,
      userName: matchPatient?.username,
      userEmail: matchPatient?.email,
      userPhone: matchPatient?.phone,
      userCity: matchPatient?.address?.city,
    }

    setUserInfo(getData);

  }, [getallusersdata])




  const handleDeleteUser = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  }


  const handleUser = (getname) => {
    setSelectedPatient(getname);

    const matchPatient = getallusersdata?.find((element) => element.name === getname);

    const getData = {
      userProfile: matchPatient?.profile_picture,
      Name: matchPatient?.name,
      userName: matchPatient?.username,
      userEmail: matchPatient?.email,
      userPhone: matchPatient?.phone,
      userCity: matchPatient?.address?.city,
    }

    setUserInfo(getData);

    const patientLabResults = matchPatient?.lab_results || [];
    setLabResults(patientLabResults);
  }

  useEffect(() => {
    handleHealthData();
  }, []);

  if (loader) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl " style={{ background: theme.background }}>
        <Loader />
      </div>
    );
  }




  return (
    <>
      <div style={{ background: theme.background, color: theme.text }}>

        {/* Header */}
        <Header handleData={handleSearch} />


        {/* Recently Added Users Section */}

        <section className='h-auto mt-5 w-full flex flex-col  gap-10 px-4 2xl:flex-row mb-2 '>
          <div className="first-wrapper w-full flex flex-col gap-5 md:flex-row ">
            <div className="patients-list  rounded-2xl h-[70vh] md:h-auto w-full md:w-1/3 xl:w-1/3 2xl:w-1/4  py-4 bg-white " style={{
              background: theme.background,
              color: theme.color,
            }}>

              <div className="heading">
                <SectionHeading>Letest Users</SectionHeading>
              </div>
              <div className="patients mt-5 h-screen flex flex-col gap-5 w-full" >
                {
                  allUsers?.map((element, index) => {
                    return (
                      <div key={index} className={`cursor-pointer w-full px-4 ${selectedPatient === element.name && "bg-[#D8FCF7]"}`} onClick={() => { handleUser(element.name) }} style={{
                        background: theme.background,
                        color: theme.color,
                      }}>
                        <User patientName={element.name} patientGender={element.gender} patientAge={element.age} profilePicture={element.profile_picture} />
                      </div>
                    )
                  })
                }
              </div>

            </div>



              {/* Users List Section */}

            <div className="patient-health-details  md:w-2/3  xl:w-full  px-2 gap-10 flex flex-col 2xl:flex-row" >
              <div className="patient-health-wrapper py-1 2xl:w-11/12">
                <div className="wrapper h-auto rounded-md py-4 px-6 full" style={{
                  background: theme.background,
                  color: theme.color,
                }} >
                  <div className="headings px-4 flex justify-between">
                    <SectionHeading>Users List</SectionHeading>
                    <button className='px-4 h-[40px] rounded-xl border cursor-pointer' onClick={() => setShowForm(true)}>Add User</button>
                  </div>
                  <div className='flex flex-wrap gap-5'>
                    {
                      filterUserData?.length > 0 ? filterUserData?.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)?.map((element, index) => {
                        return (
                          <>
                            <UserCard user={element} handleData={handleUser} onDelete={handleDeleteUser} />
                          </>
                        )
                      })
                        :
                        <div className='flex w-full h-full justify-center items-center'>
                          No User Found
                        </div>
                    }

                    {
                      filterUserData?.length > 0 && <div className='w-full pagination py-2'>
                        <nav class="flex items-center justify-end px-4 space-x-2">
                          <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100 hover:text-black cursor-pointer disabled:opacity-40"
                          >
                            Prev
                          </button>

                          {totalPages && [...Array(totalPages)]?.map((_, i) => {
                            const pageNum = i + 1;

                            return (
                              <button
                                key={i}
                                onClick={() => goToPage(pageNum)}
                                className={`px-3 py-1 rounded-md border text-sm cursor-pointer ${currentPage === pageNum
                                    ? "bg-blue-500 text-white"
                                    : "hover:bg-gray-300 hover:text-black"
                                  }`}
                              >
                                {pageNum}
                              </button>
                            );
                          })}

                          <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100 hover:text-black cursor-pointer disabled:opacity-40"
                          >
                            Next
                          </button>

                        </nav>

                      </div>
                    }

                  </div>
                </div>


              </div >




               {/*  View Profile Section */}


              <div className="patient-personal-details w-full  flex flex-col gap-4 xl:flex-row 2xl:w-1/3 2xl:flex-col mt-10 xl:mt-0">
                <div className="details w-full h-auto px-1 py-2 xl:w-1/2 2xl:w-full">
                  <Profile
                    name={userInfo.Name}
                    userName={userInfo.userName}
                    userEmail={userInfo.userEmail}
                    userCity={userInfo.userCity}
                    userContact={userInfo.userPhone}
                  />
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>


      {showForm && (
        <AddUserForm
          onSubmit={handleAddUser}
          onClose={() => setShowForm(false)}
        />
      )}

    </>
  )
}

export default App
