import React, { useState } from 'react'
import {  Mail,Phone,Building, User  } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Profile = ({name,userName,userEmail,userCity,userContact}) => {

   const { theme } = useTheme();

  return (
     <div
  className="rounded-3xl shadow-lg w-full p-8"
  style={{ background: theme.card, color: theme.text }}
>
  <div className="flex justify-center mb-6">
    <div
      className="w-40 h-40 rounded-full flex justify-center text-2xl font-bold items-center overflow-hidden"
      style={{ background: theme.background }}
    >
      {name?.slice(0, 2).toUpperCase() || "Not Available"}
    </div>
  </div>

  <h1 className="text-2xl font-bold text-center mb-8">
    {name || "Not Available"} 
  </h1>

  <div className="space-y-6 mb-8">
    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: theme.background }}
      >
        <User />
      </div>
      <div>
        <p className="text-sm mb-1" style={{ opacity: 0.7 }}>Name</p>
        <p className="text-base font-medium">{userName || "Not Available"}</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: theme.background }}
      >
        <Mail />
      </div>
      <div>
        <p className="text-sm mb-1" style={{ opacity: 0.7 }}>Email</p>
        <p className="text-base font-medium">{userEmail || "Not Available"}</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: theme.background }}
      >
        <Phone />
      </div>
      <div>
        <p className="text-sm mb-1" style={{ opacity: 0.7 }}>Contact Info.</p>
        <p className="text-base font-medium">{userContact || "Not Available"}</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: theme.background }}
      >
        <Building />
      </div>
      <div>
        <p className="text-sm mb-1" style={{ opacity: 0.7 }}>City</p>
        <p className="text-base font-medium">{userCity || "Not Available"}</p>
      </div>
    </div>
  </div>

  <button
    className="w-full mt-2 font-semibold py-2 px-4 rounded-full transition-colors duration-200 cursor-pointer"
    style={{
      background: theme.primary,
      color: "#fff"
    }}
  >
  Full Profile View not Available
  </button>
</div>

   
  )
}

export default Profile
