import React, { useState } from 'react';
import { Mail, Trash2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence } from "framer-motion";
import DeleteUserModal from '../DeleteUserModel/DeleteUserModal';

const UserCard = ({ user, onDelete, handleData }) => {
  const { theme } = useTheme();
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  return (
    <div
      className="rounded-lg shadow-md w-full sm:w-[48%] p-5 hover:shadow-lg transition-shadow duration-300"
      style={{ background: theme.card, color: theme.text }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {user.City || 'New York'}
          </h3>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold mb-1">
          {user.Name || 'Letty Taylor'}
        </h4>

        <div className="flex items-center text-sm" style={{ opacity: 0.8 }}>
          <Mail className="w-4 h-4 mr-2" />
          <span>{user.Email || 'lettytaylor@gmail.com'}</span>
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b"
        style={{ borderColor: theme.text + "40" }}
      >
        <div>
          <p className="text-xs mb-1" style={{ opacity: 0.6 }}>Region</p>
          <p className="text-sm font-semibold">{user.City || 'New York'}</p>
        </div>

        <div>
          <p className="text-xs mb-1" style={{ opacity: 0.6 }}>Company</p>
          <p className="text-sm font-semibold">{user.Company || 'West Bay'}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm cursor-pointer"
          style={{
            background: theme.primary,
            color: "#fff",
          }}
          onClick={() => handleData(user.Name)}
        >
          View Details
        </button>

        <button
          onClick={() => setOpenDeleteModel(true)}
          className="p-2 rounded-lg transition-colors duration-200"
          style={{
            background: theme.background,
            color: "#ff4d4d",
          }}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>


   <div className='z-auto'>
    
      <AnimatePresence>
        {openDeleteModel && (
         <DeleteUserModal 
         deleteModel={setOpenDeleteModel}
         onDelete={onDelete}
         user={user} 
          />
        )}
      </AnimatePresence>
   </div>
    </div>
  );
};

export default UserCard;
