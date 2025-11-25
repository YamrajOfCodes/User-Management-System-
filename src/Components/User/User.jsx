import React from 'react'
import moreHorizontal from "../../assets/SVG/more_horizontal.svg"
import { useTheme } from '../../context/ThemeContext';

const Patient = ({patientName,patientGender,patientAge,profilePicture}) => {

   const { theme } = useTheme();
  
  return (
     <div className="flex justify-between items-center w-full px-2 py-1 rounded-2xl" style={{ background: theme.card, color: theme.text }}>
      <div className="flex items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
          alt="Dr. Jose Simmons"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-sm leading-tight">
          <h4 className="font-semibold" style={{
            color: theme.color,
          }}>{patientName}</h4>
          <h5 className=" text-xs"style={{
            color: theme.color,
          }}>{patientGender}</h5>
        </div>
      </div>
    
      <div className="flex items-center gap-3">
        <img src={moreHorizontal} alt="horizontal_more_svg" className="w-5 h-5 cursor-pointer" />
      </div>
      </div>
  )
}

export default Patient
