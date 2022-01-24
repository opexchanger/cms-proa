import React, { useEffect, useState } from 'react'
import { Card, Flex, Checkbox, Box, Text } from '@sanity/ui'
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { useId } from "@reach/auto-id"
import sanityClient from 'part:@sanity/base/client';
import { withDocument } from 'part:@sanity/form-builder'

const client = sanityClient.withConfig({ apiVersion: '2022-01-01' })

const stateMultiSelect = React.forwardRef((props, ref) => {
  const [states, setStates] = useState([])

  //TODO idea:: make a custom country Ref, that instead of actual refs, is a array with the _ref on values,
  // because array is way easier to select than refs

  useEffect(() => {
    const fetchStates = async () => {
      if (!props.document?.countryReference) {
        setStates([{
          noCountry: true,
          message: 'Primeiro selecione um país'
        }])
        return;
      }
      await client
        .fetch(`*[_type == 'state' && country._ref == $country]{
          _id,
          title
        }`,
          { country: props.document.countryReference._ref }
        )
        .then(setStates)
    }

    fetchStates()
  }, [props.document])

  const {
    type,         // Schema information
    value,        // Current field value
    readOnly,     // Boolean if field is not editable
    markers,      // Markers including validation rules
    presence,     // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus,      // Method to handle focus state
    onBlur,       // Method to handle blur state  
    onChange,     // Method to handle patch events,
    document
  } = props

  console.log('document :>> ', document);

  const handleClick = React.useCallback(
    (e) => {
      const inputValue = {
        _key: e.target.value.slice(0, 10),
        _type: 'reference',
        _ref: e.target.value
      }

      if (value) {
        if (value.some(state => state._ref === inputValue._ref)) {
          onChange(PatchEvent.from(set(value.filter(item => item._ref != inputValue._ref))))
        } else {
          onChange(PatchEvent.from(set([...value, inputValue])))
        }
      } else {
        onChange(PatchEvent.from(set([inputValue])))
      }
    },
    [value]
  )

  const inputId = useId()

  return (
    <FormField
      description={type.description}  // Creates description from schema
      title={type.title}              // Creates label from schema title
      __unstable_markers={markers}    // Handles all markers including validation
      __unstable_presence={presence}  // Handles presence avatars
      compareValue={compareValue}     // Handles "edited" status
      inputId={inputId}               // Allows the label to connect to the input field
      readOnly={readOnly}
    >
      {
        states.length ? states.map(state => (
          <Card padding={2} style={{
            width: '47%',
            display: 'inline-block'
          }}>
            <Flex align="center">
              {state.noCountry ? (
                <Box flex={1} paddingLeft={3}>
                  <Text>
                    {state.message}
                  </Text>
                </Box>
              ) : (
                <>
                  <Checkbox
                    id={state.title}
                    style={{ display: 'block' }}
                    onClick={handleClick}
                    value={state._id}
                    checked={value ? value.some(item => item._ref === state._id) : false}
                  />
                  <Box flex={1} paddingLeft={3}>
                    <Text>
                      <label htmlFor={state.title} style={{
                        cursor: 'pointer'
                      }}>{state.title}</label>
                    </Text>
                  </Box>
                </>
              )}
            </Flex>
          </Card>
        )) :
          <Box flex={1} paddingLeft={3}>
            <Text>
              Nenhum estado encontrado para o país selecionado.
            </Text>
          </Box>
      }
    </FormField>
  )
})

export default withDocument(stateMultiSelect)