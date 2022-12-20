import { IFormData, TOptions } from 'index'

export const createFormData = (formElement: HTMLFormElement): IFormData => {
  const data: IFormData = {
    principal: {
      name: '',
      id: 0
    },
    salsas: [],
    toppins: [],
    extras: []
  }
  const form = new FormData(formElement)
  const options = Object.fromEntries(form.entries())

  for (const [key] of Object.entries(options)) {
    const id = Number(key.split('-')[2])
    const name = key.split('-')[1].replaceAll('_', ' ')
    const keyindex = key.split('-')[0].toLocaleLowerCase()

    console.log({ keyindex, name, id })

    if (keyindex === 'principal') {
      data[keyindex] = {
        name,
        id
      }
      continue
    }

    data[keyindex] = [...data[keyindex] as TOptions[], { name, id }]
  }

  return data
}

export const createOrder = async (data: IFormData[]): Promise<void> => {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const json = await res.json()
  console.log(json)
}
