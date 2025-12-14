import React from 'react'
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const DeleteUserModal = ({onDelete,deleteModel,user}) => {
  return (
    <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 p-4"
            onClick={()=>{setOpenDeleteModel(false)}}
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm grid gap-4" onClick={(e)=>e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-red-600" />
                <h2 className="text-xl font-semibold">Confirm Deletion</h2>
              </div>


              <p className="text-sm text-gray-600">
                This action cannot be undone. Are you sure you want to proceed?
              </p>


              <div className="flex justify-between gap-3">
                <button
                  onClick={() => deleteModel(false)}
                  className="rounded-xl cursor-pointer bg-black text-white px-6 py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteModel(false);
                    onDelete(user.id)
                  }}
                  className="bg-red-600 px-6 py-2 hover:cursor-pointer text-white rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
  )
}

export default DeleteUserModal
