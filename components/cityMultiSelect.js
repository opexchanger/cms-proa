import React, { useEffect, useState } from 'react'
import { Card, Flex, Checkbox, Box, Text } from '@sanity/ui'
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent'
import { useId } from "@reach/auto-id"
import sanityClient from 'part:@sanity/base/client';
import { withDocument } from 'part:@sanity/form-builder'

const client = sanityClient.withConfig({ apiVersion: '2022-01-01' })

const cityMultiSelect = React.forwardRef((props, ref) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const fetchCities = async () => {
      if (!props.document?.countryReference) {
        setCities([{
          noCountry: true,
          message: 'Primeiro selecione um país'
        }])
        return;
      }
      await client
        .fetch(`*[_type == 'city' && country._ref == $country]{
          _id,
          title
        }`,
          { country: props.document.countryReference._ref }
        )
        .then(setCities)
    }

    fetchCities()
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
  } = props

  const handleClick = React.useCallback(
    (e) => {
      const inputValue = {
        _key: e.target.value.slice(0, 10),
        _type: 'reference',
        _ref: e.target.value
      }

      if (value) {
        if (value.some(city => city._ref === inputValue._ref)) {
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
        cities.length ? cities.map(city => (
          <Card padding={2} style={{
            width: '47%',
            display: 'inline-block'
          }}>
            <Flex align="center">
              {city.noCountry ? (
                <Box flex={1} paddingLeft={3}>
                  <Text>
                    {city.message}
                  </Text>
                </Box>
              ) : (
                <>
                  <Checkbox
                    id={city.title}
                    style={{ display: 'block' }}
                    onClick={handleClick}
                    value={city._id}
                    checked={value ? value.some(item => item._ref === city._id) : false}
                  />
                  <Box flex={1} paddingLeft={3}>
                    <Text>
                      <label htmlFor={city.title} style={{
                        cursor: 'pointer'
                      }}>{city.title}</label>
                    </Text>
                  </Box>
                </>
              )}
            </Flex>
          </Card>
        )) :
          <Box flex={1} paddingLeft={3}>
            <Text>
              Nenhuma cidade encontrada para o país selecionado.
            </Text>
          </Box>
      }
    </FormField>
  )
})

export default withDocument(cityMultiSelect)