import React from 'react'
import i18next from 'i18next';
import { Select, MenuItem } from '@mui/material';
import 'font-awesome/css/font-awesome.min.css'; 

const ChangeLanguage = () => {
  return (
    <div>
        <Select style={{position: 'absolute', right: 20, top: 10, color: "#fff"}} >
                  <MenuItem  value={'en' || ''} onClick={() =>  i18next.changeLanguage('en')}><span className='fi fi-gb'></span> <span style={{color: '#31C48D', marginLeft: '10px'}}>English</span> </MenuItem>
                  <MenuItem  value={'de' || ''} onClick={() =>  i18next.changeLanguage('de')}><span className='fi fi-de'></span><span  style={{color: '#31C48D', marginLeft: '10px'}}>Deutch</span></MenuItem>
                  <MenuItem  value={'fr' || ''} onClick={() =>  i18next.changeLanguage('fr')}><span className='fi fi-fr'></span><span style={{color: '#31C48D', marginLeft: '10px'}}>Français</span></MenuItem>
                  <MenuItem value={'it' || ''} onClick={() =>  i18next.changeLanguage('it')}><span className='fi fi-it'></span><span style={{color: '#31C48D', marginLeft: '10px'}}>Italy</span></MenuItem>
        </Select>
    </div>
  )
}

export default ChangeLanguage