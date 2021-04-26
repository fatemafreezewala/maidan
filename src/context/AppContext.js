import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [selectedInfo, setSelectedInfo] = useState({
		subcat_id: '',
		subcat_name: '',
		type_id: '', 
		type_name: '',
		type_sub_id: '',
		type_sub_name: '', 
		type_sub_desp: '',
		role: ''
	})
	const [lang, setLang] = useState('en')
	const [menu, setMenu] = useState('')
	 const [cfont, setFont] = useState('DINMedium')
	return (
		<AppContext.Provider
			value={{ selectedInfo, setSelectedInfo, lang, setLang ,setMenu,menu,cfont,setFont}}>
			{children}
		</AppContext.Provider>
	)
}

export { AppProvider, AppContext as default }
