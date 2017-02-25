export function isEmail(value) {
  const format = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return format.test(value)
}

export function isValid(value, rules) {
  if (rules) {
    if (rules.required) {
      if (!value) {
        return rules.required.message || 'Input is required.'
      }
    }

    if (rules.min) {
      if (value.length < rules.min.length) {
        return rules.min.message || 'Min length is ' + rules.min.length + '.'
      }
    }

    if (rules.type) {
      switch (rules.type) {
        case 'email': {
          if (!isEmail(value)) {
            return rules.format.message || 'Invalid email.'
          }
        }
        default: { //Default to type 'text'
        }
      }
    }
  }

  return ''
}
