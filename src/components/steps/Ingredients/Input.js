import React from 'react'
import Downshift from 'downshift'
import { useIntl } from 'react-intl'
import { useQuery, gql } from '@apollo/client'
import cn from 'classnames'

const GET_INGREDIENTS = gql`
  query getIngredients ($locale: String!, $value: String!) {
    ingredients(filter:{ nameByRegex:[$locale, $value]}){
      _id
      name{
        ca
        es
      }
    }
  }
`

function Wrapper (props) {
  const { locale } = useIntl()
  const stateReducer = (state, changes) => {
    switch(changes.type) {
      case Downshift.stateChangeTypes.mouseUp: {        
        return {
          ...changes,
          inputValue: state.inputValue
        }
      }
      default:
        return changes
    }
  }

  const itemToString = item => item && item.name[locale]
  
  return (
    <Downshift
      stateReducer={stateReducer}
      onInputValueChange={inputValue => props.setValue(inputValue)}      
      onChange={selection => props.setSelected({ type: 'db', value: selection._id, label: selection.name[locale] })}
      itemToString={itemToString}
    >
      {props => (
        <Input
          {...props}
          {...props.getRootProps({ refKey: 'innerRef', suppressRefError : true })}
        />
      )}
    </Downshift>
  )
}

function Input ({
  getLabelProps,
  getInputProps,
  getToggleButtonProps,
  getMenuProps,
  getItemProps,
  isOpen,
  clearSelection,
  selectedItem,
  inputValue,
  highlightedIndex,
  innerRef
}) {
  const { locale } = useIntl()
  const { loading, data } = useQuery(GET_INGREDIENTS, {
    skip: !inputValue || inputValue.length <= 3,
    variables: {
      locale,
      value: inputValue
    }
  })

  return (
    <>
      <i className={cn('fas', loading ? 'fa-circle-notch fa-spin' : 'fa-tag')} />
      <div className='relative w-full' ref={innerRef}>
        {/* <label {...getLabelProps()}>Find a Star Wars character</label> */}
        <div className='flex'>
          <input
            {...getInputProps({
              // isOpen,
              value: inputValue || '',
              placeholder: 'Nom ingredient'
            })}
            className='border-0'
          />
          {selectedItem ? (
            <button
              onClick={clearSelection}
              aria-label="clear selection"
              className='w-10'
            >
              X
            </button>
          ) : (
            <button {...getToggleButtonProps()} className='w-10'>
              {/* <ArrowIcon isOpen={isOpen} /> */}
              ^
            </button>
          )}
        </div>
        <div style={{position: 'relative'}}>
          {isOpen ? (
            <ul
              {...getMenuProps()}
              className='absolute w-full z-50 bg-white rounded-b cursor-pointer overflow-y-scroll border border-gray-300 shadow-xl'
              style={{ maxHeight: '200px' }}
            >
              {data && data.ingredients && data.ingredients.length
                ? data.ingredients.map((item, index) => (
                    <li
                      className='p-3 border-b border-gray-300'
                      key={item._id}
                      {...getItemProps({
                        item,
                        index,
                        // isActive: highlightedIndex === index,
                        // isSelected: selectedItem === item,
                      })}
                    >
                      {item.name.ca}
                    </li>
                  ))
                : null}
            </ul>            
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Wrapper
