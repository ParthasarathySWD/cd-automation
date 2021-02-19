import React, { useState, useEffect } from 'react'
import Dropdown from 'react-mui-multiselect-dropdown';

function MulitiSelect() {
  const [skills, setSkills] = useState([])
  const [selectedSkills, setSelectedSkills] = useState([])

  const populateData = () => {
    const skillsData = [
      { id: 1, name: 'Prelim CD' },
      { id: 2, name: 'Tax Certificate' },
      { id: 3, name: 'Pay Off' },
      { id: 4, name: 'Title Commitment' },
      { id: 5, name: 'Closing Instruction' }
    ]
    setSkills(skillsData)
  }

  useEffect(() => {
    populateData()
  }, [])

  return (
    <Dropdown
      data={skills}
      fullWidth
      searchable
      searchPlaceHolder='search...'
      itemId='id'
      itemLabel='name'
      multiple
      simpleValue
      searchByValue='name'
      itemValue='id'
      notFoundText='true'
      title="Closing Package"
      selectedValues={selectedSkills}
      customStyles={{
        error: 'red',
        checkBox: 'fancy-checkbox'
      }}
      errorText='error'
      onItemClick={(skill) => {
        setSelectedSkills(skill)
      }}
      onDeleteItem={(deleted) => {
        console.log('deleted', deleted)
      }}
    />
  )
}

export default MulitiSelect;